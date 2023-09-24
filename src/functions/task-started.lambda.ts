import { getPublicIps, TaskStateChange$ } from './common';
import { database } from './database';

export async function handler(event: unknown) {
  const parsedEvent = TaskStateChange$.parse(event);
  console.log('task started', parsedEvent.detail.taskArn);

  const publicIps = await getPublicIps(parsedEvent);

  const group = process.env.GROUP!;

  await database.entities.EcsTaskIps
    .upsert({
      taskArn: parsedEvent.detail.taskArn,
      publicIps,
    })
    .go();

  await database.entities.IpGroup
    .upsert({ group })
    .add({
      publicIps,
      version: 1,
    })
    .go();

  console.log('publicIps', publicIps);
}