import { getPublicIps, TaskStateChange$ } from './common';
import { database } from './database';
import { env } from './env';

export async function handler(event: unknown) {
  const parsedEvent = TaskStateChange$.parse(event);
  console.log('task started', parsedEvent.detail.taskArn);

  const publicIps = await getPublicIps(parsedEvent);

  await database.entities.EcsTaskIps
    .upsert({
      taskArn: parsedEvent.detail.taskArn,
      publicIps,
    })
    .go();

  await database.entities.DnsRecord
    .upsert({
      hostedZoneId: env.HOSTED_ZONE_ID,
      name: env.RECORD_NAME,
    })
    .add({
      publicIps,
      version: 1,
    })
    .go();

  console.log('publicIps', publicIps);
}