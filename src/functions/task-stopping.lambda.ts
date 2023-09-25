import { TaskStateChange$ } from './common';
import { database } from './database';
import { env } from './env';

export async function handler(event: unknown) {
  const parsedEvent = TaskStateChange$.parse(event);
  console.log('task stopping', parsedEvent.detail.taskArn);

  const { data } = await database.entities.EcsTaskIps.get({ taskArn: parsedEvent.detail.taskArn }).go();
  if (!data) {
    // Task ips already deleted.
    return;
  }

  await database.entities.DnsRecord
    .patch({ hostedZoneId: env.HOSTED_ZONE_ID, name: env.RECORD_NAME })
    .delete({ publicIps: data.publicIps ?? [] })
    .add({ version: 1 })
    .go();

  await database.entities.EcsTaskIps
    .delete({ taskArn: parsedEvent.detail.taskArn })
    .go();
}
