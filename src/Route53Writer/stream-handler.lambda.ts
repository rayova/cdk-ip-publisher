import { AttributeValue } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import * as lambda from 'aws-lambda';
import { database, DnsRecord } from '../database';
import { AppHandler, logger, tracer } from '../runtime';
import { deleteRecordSet, upsertRecordSet } from './runtime';

export const handler = AppHandler(async function (event: lambda.DynamoDBStreamEvent) {
  logger.info('Stream event', { event });
  const [firstRecord] = event.Records;

  // No records, no problem. AWS is just billing for nothing.
  if (!firstRecord) return;

  const firstRecordDate = firstRecord.dynamodb?.ApproximateCreationDateTime;
  const firstRecordAge = firstRecordDate ? Date.now() / 1000 - firstRecordDate : undefined;
  tracer.putMetadata('firstRecordDate', firstRecordDate);
  tracer.putMetadata('firstRecordAge', firstRecordAge);
  tracer.putMetadata('sequenceNumber', firstRecord?.dynamodb?.SequenceNumber);

  const dnsRecordEvents = findLatestDnsRecordEvents(event);

  for (const dnsRecordEvent of dnsRecordEvents) {
    const subSegment = tracer.getSegment()?.addNewSubsegment('update-dns-record');
    subSegment && tracer.setSegment(subSegment);

    try {
      const {
        eventName,
        dnsRecord,
      } = dnsRecordEvent;

      tracer.putAnnotation('hostedZoneId', dnsRecord.hostedZoneId);
      tracer.putAnnotation('recordName', dnsRecord.name);

      if (eventName === 'REMOVE' || !dnsRecord.publicIps || dnsRecord.publicIps.length === 0) {
        await deleteRecordSet(dnsRecord);
      } else {
        await upsertRecordSet(dnsRecord);
      }

      subSegment?.close();
    } catch (e) {
      logger.error('Failed to close subsegment', { e });
    } finally {
      subSegment && tracer.setSegment(subSegment.parent);
    }
  }
});

function findLatestDnsRecordEvents(event: lambda.DynamoDBStreamEvent): DnsRecordEvent[] {
  const map = new Map<string, DnsRecordEvent>();

  for (const record of event.Records.reverse()) {
    let itemImage = record.dynamodb?.NewImage ?? record.dynamodb?.OldImage;
    if (!itemImage) continue;

    const item = unmarshall(itemImage as Record<string, AttributeValue>);
    const { data: dnsRecord } = database.entities.DnsRecord.parse({ Item: item });

    if (!dnsRecord) continue;

    const key = JSON.stringify({
      hostedZoneId: dnsRecord.hostedZoneId,
      name: dnsRecord.name,
    });

    if (!map.has(key)) {
      map.set(key, {
        eventName: record.eventName,
        dnsRecord,
      });
    }
  }

  return [...map.values()];
}

type DnsRecordEvent = { eventName: string | undefined; dnsRecord: DnsRecord };

