import { AttributeValue } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import * as lambda from 'aws-lambda';
import { database, DnsRecord, getDnsRecordIps } from '../Database/runtime';
import { AppHandler, logger, tracer } from '../runtime';
import { deleteRecordSet, upsertRecordSet } from './runtime';

export const handler = AppHandler(async function (event: lambda.DynamoDBStreamEvent) {
  logger.info('DynamoDBStreamEvent', { event });
  const [firstRecord] = event.Records;

  // No records, no problem. AWS is just billing for nothing.
  if (!firstRecord) {
    logger.info('No records in event');
    return;
  }

  logger.info(`Processing ${event.Records.length} records`);

  const firstRecordDate = firstRecord.dynamodb?.ApproximateCreationDateTime;
  const firstRecordAge = firstRecordDate ? Date.now() / 1000 - firstRecordDate : undefined;
  tracer.putMetadata('firstRecordDate', firstRecordDate);
  tracer.putMetadata('firstRecordAge', firstRecordAge);
  tracer.putMetadata('sequenceNumber', firstRecord?.dynamodb?.SequenceNumber);

  const dnsRecordEvents = findLatestDnsRecordEvents(event);

  logger.info(`Processing ${dnsRecordEvents.length} dns records`);

  for (const dnsRecordEvent of dnsRecordEvents) {
    const subSegment = tracer.getSegment()?.addNewSubsegment('update-dns-record');
    subSegment && tracer.setSegment(subSegment);

    try {
      logger.info('Processing dns record event', { dnsRecordEvent });

      const {
        eventName,
        dnsRecord,
      } = dnsRecordEvent;

      tracer.putAnnotation('hostedZoneId', dnsRecord.hostedZoneId);
      tracer.putAnnotation('recordName', dnsRecord.name);

      let ips = getDnsRecordIps(dnsRecord);
      if (eventName === 'REMOVE' || ips.length === 0) {
        await deleteRecordSet(dnsRecord);
      } else {
        await upsertRecordSet(dnsRecord);
      }

      subSegment?.close();
    } catch (e) {
      logger.error('Failed to process dns record event', { e });
    } finally {
      subSegment && tracer.setSegment(subSegment.parent);
    }
  }
});

function findLatestDnsRecordEvents(event: lambda.DynamoDBStreamEvent): DnsRecordEvent[] {
  const map = new Map<string, DnsRecordEvent>();

  for (const record of event.Records.reverse()) {
    let itemImage = record.dynamodb?.NewImage ?? record.dynamodb?.OldImage;
    if (!itemImage) {
      logger.info('Skipping record without image', { record });
      continue;
    }

    const item = unmarshall(itemImage as Record<string, AttributeValue>);
    const { data: dnsRecord } = database.entities.DnsRecord.parse({ Item: item });

    if (!dnsRecord) {
      logger.info('Skipping record image that does not parse to a DnsRecord', { item });
      continue;
    }

    const key = JSON.stringify({
      hostedZoneId: dnsRecord.hostedZoneId,
      name: dnsRecord.name,
    });

    if (!map.has(key)) {
      logger.info('Selecting DnsRecord', { dnsRecord });
      map.set(key, {
        eventName: record.eventName,
        dnsRecord,
      });
    } else {
      logger.info('Skipping duplicate DnsRecord', { dnsRecord });
    }
  }

  return [...map.values()];
}

type DnsRecordEvent = { eventName: string | undefined; dnsRecord: DnsRecord };

