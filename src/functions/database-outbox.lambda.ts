import * as lambda from 'aws-lambda';
import { database, DnsRecord } from './database';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { AttributeValue } from '@aws-sdk/client-dynamodb';
import { captureLambdaHandler, Tracer } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
import { ChangeResourceRecordSetsCommand, Route53Client } from '@aws-sdk/client-route-53';
import { serviceName } from './constants';

const tracer = new Tracer({
  serviceName,
});

export const handler = middy(lambdaHandler).use(captureLambdaHandler(tracer));

async function lambdaHandler(event: lambda.DynamoDBStreamEvent) {
  const [firstRecord] = event.Records;
  if (!firstRecord) {
    return;
  }

  const firstRecordDate = firstRecord.dynamodb?.ApproximateCreationDateTime;

  tracer.putMetadata('iteratorStartDate', firstRecordDate);
  tracer.putMetadata('iteratorAge', firstRecordDate ? Date.now() / 1000 - firstRecordDate : undefined);
  tracer.putMetadata('iteratorSeq', firstRecord?.dynamodb?.SequenceNumber);
  tracer.putMetadata('event', JSON.stringify(event, null, 2));

  const dnsRecords = findLatestDnsRecords(event);
  tracer.putMetadata('dnsRecords', JSON.stringify(dnsRecords, null, 2));

  const r53 = new Route53Client({});

  for (const dnsRecord of dnsRecords) {
    const hostedZoneId = dnsRecord.hostedZoneId;
    const recordName = dnsRecord.name;

    let publicIps: string[] | undefined = dnsRecord.publicIps ?? ['127.0.0.1'];
    if (publicIps.length > 100) {
      console.warn(`Too many public IPs. Mitigating the risk of exceeding the maximum recordset size by truncating ${publicIps.length} records to 100.`);
      publicIps = publicIps.slice(0, 100);
    }

    console.log(`Setting ${recordName} to ${publicIps.join(', ')}`);

    await r53.send(
      new ChangeResourceRecordSetsCommand({
        HostedZoneId: hostedZoneId,
        ChangeBatch: {
          Changes: [
            {
              Action: 'UPSERT',
              ResourceRecordSet: {
                Type: 'A',
                Name: recordName,
                ResourceRecords: publicIps.map(ip => ({ Value: ip })),
                TTL: 30,
              },
            },
          ],
        },
      }),
    );
  }

  if (dnsRecords.length === 0) {
    console.log('SUCCESS: exiting because there are no ip groups');
  } else {
    console.log('SUCCESS: exiting because there are ip groups and all worked', dnsRecords.length);
  }

  return undefined;
}

function findLatestDnsRecords(event: lambda.DynamoDBStreamEvent): DnsRecord[] {
  // console.log('event', JSON.stringify(event, null, 2));
  const map = new Map<string, DnsRecord>();

  for (const record of event.Records.reverse()) {
    const newImage = record.dynamodb?.NewImage;
    if (!newImage) continue;

    const item = unmarshall(newImage as Record<string, AttributeValue>);
    const { data: dnsRecord } = database.entities.DnsRecord.parse({ Item: item });

    if (!dnsRecord) continue;

    const key = JSON.stringify({
      hostedZoneId: dnsRecord.hostedZoneId,
      name: dnsRecord.name,
    });

    if (!map.has(key)) {
      map.set(key, dnsRecord);
    }
  }

  return [...map.values()];
}