import { AppHandler, logger, tracer } from '../common';
import { database } from '../Database/runtime';
import { env, getPublicIps, TaskStateEvent$ } from './runtime';

export const handler = AppHandler(async (event: any) => {
  const parsedEvent = TaskStateEvent$.parse(event);
  const parsedDetail = parsedEvent.detail;

  const { data: ecsTaskIps } = await database.entities.EcsTaskIps.get({ taskArn: parsedDetail.taskArn }).go();
  if (ecsTaskIps) {
    logger.warn('Task already registered');
    return;
  }

  const publicIps = await getPublicIps(parsedDetail);

  tracer.putAnnotation('hostedZoneId', env.HOSTED_ZONE_ID);
  tracer.putAnnotation('recordName', env.RECORD_NAME);
  tracer.putAnnotation('taskArn', parsedDetail.taskArn);
  tracer.putMetadata('publicIps', publicIps);

  const dnsRecordKey = {
    hostedZoneId: env.HOSTED_ZONE_ID,
    name: env.RECORD_NAME,
  };

  const { data: dnsRecord } = await database.entities.DnsRecord.get(dnsRecordKey).go();

  const tx = await database.transaction.write((entities) => [
    entities.EcsTaskIps
      .create({
        taskArn: parsedDetail.taskArn,
        publicIps,
      })
      .commit(),
    // Note: When ElectroDB supports upsert update expressions, we can replace this conditional with a single upsert.
    dnsRecord
      // When the record already exists, lets update it.
      ? entities.DnsRecord
        .patch(dnsRecordKey)
        .add({
          ips: publicIps,
          version: dnsRecord.version + 1,
        }).commit()
      // When the record does not exist, lets create it.
      : entities.DnsRecord
        .create({
          ...dnsRecordKey,
          ips: publicIps,
        })
        .commit(),
  ]).go();

  if (tx.canceled) {
    throw new Error('Transaction failed');
  }

  tracer.putMetadata('publicIps', publicIps);
  logger.info('Added public IPs', { publicIps });
});