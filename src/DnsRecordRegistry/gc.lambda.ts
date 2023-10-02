import { AppHandler, logger, tracer } from '../common';
import { z } from 'zod';
import { database } from '../Database/runtime';
import { getRecordSet } from '../Route53Writer/runtime';

type CfnRegisteredRecord = z.infer<typeof CfnRegisteredRecord$>;
const CfnRegisteredRecord$ = z.object({
  HostedZoneId: z.string(),
  Name: z.string(),
});

const Event$ = z.object({
  RequestType: z.enum(['Create', 'Update', 'Delete']),
  ResourceProperties: z.object({
    RegisteredRecords: z.array(CfnRegisteredRecord$),
  }),
});

export const handler = AppHandler(async (event) => {
  logger.info('Garbage collection event', { event });
  const eventPayload = Event$.parse(event);

  tracer.putMetadata('requestType', eventPayload.RequestType);
  logger.info('Request type', { requestType: eventPayload.RequestType });

  const cfnRecords = eventPayload.ResourceProperties.RegisteredRecords;
  tracer.putMetadata('cfnRecords', cfnRecords);

  switch (eventPayload.RequestType) {
    case 'Create':
    case 'Update':
      await gcRecords(cfnRecords);
      break;
    case 'Delete':
      await deleteRecords();
      break;
  }
});

async function gcRecords(cfnRecords: CfnRegisteredRecord[]) {
  logger.info('Cleaning unused DNS records', { cfnRecords });
  tracer.putMetadata('cfnRecords', cfnRecords);

  const { data: dbRecords } = await database.entities.DnsRecord.scan.go({
    pages: 'all',
  });

  tracer.putMetadata('dbRecords', dbRecords);

  await Promise.all(
    dbRecords.map(async (dnsRecord) => {
      logger.info('Evaluating DNS Record', { dnsRecord });

      const cfnRecord = cfnRecords.find((cfnRecord) => {
        return cfnRecord.HostedZoneId === dnsRecord.hostedZoneId && cfnRecord.Name === dnsRecord.name;
      });

      if (cfnRecord) {
        logger.info('DNS record is still in use', { record: dnsRecord });
        return;
      }

      logger.info('DNS record is no longer in use - deleting', { record: dnsRecord });
      await database.entities.DnsRecord
        .delete(dnsRecord)
        .go();
    }),
  );
}

async function deleteRecords() {
  logger.info('Deleting all managed records');

  const { data: dbRecords } = await database.entities.DnsRecord.scan.go({
    pages: 'all',
  });

  tracer.putMetadata('dbRecords', dbRecords);

  await Promise.all(
    dbRecords.map(async (dnsRecord) => {
      try {
        logger.info('Deleting the DNS Record', { record: dnsRecord });
        await database.entities.DnsRecord
          .delete(dnsRecord)
          .go();

        const deadline = Date.now() + 30 * 1000;
        let recordSet = await getRecordSet(dnsRecord);
        while (recordSet !== undefined) {
          if (Date.now() > deadline) {
            logger.error('Timed out waiting for record to be deleted', { recordSet });
            return;
          }

          logger.info('Waiting for record to be deleted', { record: dnsRecord });
          await new Promise((resolve) => setTimeout(resolve, 1000));
          recordSet = await getRecordSet(dnsRecord);
        }

        logger.info('The DNS record is now deleted', { record: dnsRecord });
      } catch (e) {
        logger.error('Failed to delete record', { error: e });
      }
    }),
  );
}