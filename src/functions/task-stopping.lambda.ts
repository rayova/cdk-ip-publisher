import { TaskStateChange$ } from './common';
import { database } from './database';

export async function handler(event: unknown) {
  const parsedEvent = TaskStateChange$.parse(event);
  console.log('task stopping', parsedEvent.detail.taskArn);

  const { data } = await database.entities.EcsTaskIps.get({ taskArn: parsedEvent.detail.taskArn }).go();
  if (!data) {
    // Task ips already deleted.
    return;
  }

  const publicIps = data.publicIps;
  const group = process.env.GROUP!;

  await database.entities.IpGroup
    .patch({ group })
    .delete({ publicIps })
    .add({ version: 1 })
    .go();

  await database.entities.EcsTaskIps
    .delete({ taskArn: parsedEvent.detail.taskArn })
    .go();
}
