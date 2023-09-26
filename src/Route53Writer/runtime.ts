/* eslint-disable import/no-extraneous-dependencies */

import { ChangeResourceRecordSetsCommand, ListResourceRecordSetsCommand, Route53Client } from '@aws-sdk/client-route-53';
import { DnsRecord, getDnsRecordIps } from '../database';
import { logger, tracer } from '../runtime';

const r53 = new Route53Client({});

export async function upsertRecordSet(dnsRecord: DnsRecord) {
  let ips = getDnsRecordIps(dnsRecord);
  tracer.putMetadata('ips', ips);

  if (ips.length > 100) {
    logger.warn(`Too many IPs. Mitigating the risk of exceeding the maximum recordset size by truncating ${ips.length} records to 100.`);
    ips = ips.slice(0, 100);
    tracer.putMetadata('ipsTruncated', ips);
  }

  logger.info(`Setting ${dnsRecord.name} to ${ips.join(', ')}`);

  await r53.send(
    new ChangeResourceRecordSetsCommand({
      HostedZoneId: dnsRecord.hostedZoneId,
      ChangeBatch: {
        Changes: [
          {
            Action: 'UPSERT',
            ResourceRecordSet: {
              Type: 'A',
              Name: dnsRecord.name,
              ResourceRecords: ips.map(ip => ({ Value: ip })),
              TTL: 30,
            },
          },
        ],
      },
    }),
  );
}

export async function deleteRecordSet(dnsRecord: DnsRecord) {
  const recordSet = await getRecordSet(dnsRecord);
  if (!recordSet) {
    logger.info('Record not found in Route53', { record: dnsRecord });
    return;
  }

  await r53.send(
    new ChangeResourceRecordSetsCommand({
      HostedZoneId: dnsRecord.hostedZoneId,
      ChangeBatch: {
        Changes: [{
          Action: 'DELETE',
          ResourceRecordSet: recordSet,
        }],
      },
    },
    ),
  );

  logger.info('Deleted record from Route53', { record: dnsRecord });
}

export async function getRecordSet(record: DnsRecord) {
  const listResult = await r53.send(
    new ListResourceRecordSetsCommand({
      HostedZoneId: record.hostedZoneId,
      StartRecordName: record.name,
      StartRecordType: 'A',
      MaxItems: 1,
    }),
  );

  const [recordSet] = listResult.ResourceRecordSets ?? [];

  if (!recordSet || recordSet.Name !== `${record.name}.` || recordSet.Type !== 'A') {
    return;
  }

  return recordSet;
}
