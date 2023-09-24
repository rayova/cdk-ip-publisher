import * as lambda from 'aws-lambda';
import { database, IpGroup } from './database';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { AttributeValue } from '@aws-sdk/client-dynamodb';
import { captureLambdaHandler, Tracer } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
import { ChangeResourceRecordSetsCommand, Route53Client } from '@aws-sdk/client-route-53';


const tracer = new Tracer({
  serviceName: 'cdk-caddy-dns-writer',
});

export const handler = middy(lambdaHandler).use(captureLambdaHandler(tracer));

async function lambdaHandler(event: lambda.DynamoDBStreamEvent) {
  const firstRecordDate = event.Records[0]?.dynamodb?.ApproximateCreationDateTime;
  console.log('dynamodb stream event', {
    records: event.Records.length,
    firstRecordDate: firstRecordDate,
    firstRecordAge: firstRecordDate ? Date.now() / 1000 - firstRecordDate : undefined,
    firstRecordSeq: event.Records[0]?.dynamodb?.SequenceNumber,
  });

  tracer.putMetadata('event', JSON.stringify(event, null, 2));

  const latestIpGroups = findLatestIpGroups(event);

  tracer.putMetadata('latestIpGroups', JSON.stringify(latestIpGroups, null, 2));

  const r53 = new Route53Client({});

  const hostedZoneId = process.env.HOSTED_ZONE_ID!;
  const hostedZoneName = process.env.HOSTED_ZONE_NAME!;

  for (const ipGroup of latestIpGroups) {
    const recordName = ipGroup.group;
    const ips: string[] | undefined = ipGroup.publicIps ?? ['127.0.0.1'];

    const fqdn = `${recordName}.${hostedZoneName}`;

    console.log(`Setting ${fqdn} to ${ips.join(', ')}`);

    await r53.send(
      new ChangeResourceRecordSetsCommand({
        HostedZoneId: hostedZoneId,
        ChangeBatch: {
          Changes: [
            {
              Action: 'UPSERT',
              ResourceRecordSet: {
                Type: 'A',
                Name: fqdn,
                ResourceRecords: ips.map(ip => ({ Value: ip })),
                TTL: 30,
              },
            },
          ],
        },
      }),
    );
  }

  if (latestIpGroups.length === 0) {
    console.log('SUCCESS: exiting because there are no ip groups');
  } else {
    console.log('SUCCESS: exiting because there are ip groups and all worked', latestIpGroups.length);
  }

  return undefined;
}

function findLatestIpGroups(event: lambda.DynamoDBStreamEvent): IpGroup[] {
  // console.log('event', JSON.stringify(event, null, 2));

  const map = new Map<string, IpGroup>();

  for (const record of event.Records.reverse()) {
    const newImage = record.dynamodb?.NewImage;
    if (!newImage) continue;

    const item = unmarshall(newImage as Record<string, AttributeValue>);
    const { data: ipGroup } = database.entities.IpGroup.parse({ Item: item });

    if (!ipGroup) continue;

    if (!map.has(ipGroup.group)) {
      map.set(ipGroup.group, ipGroup);
    }
  }

  return [...map.values()];
}