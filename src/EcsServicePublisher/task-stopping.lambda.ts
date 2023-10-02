import { AppHandler, tracer } from '../runtime';
import { database } from '../Database/runtime';
import { env, TaskStateEvent$ } from './runtime';

// https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_cwe_events.html#ecs_task_events

export const handler = AppHandler(async (event: unknown) => {
  const parsedEvent = TaskStateEvent$.parse(event);
  console.log('Task stopping', parsedEvent.detail.taskArn);

  const { data: ecsTaskIps } = await database.entities.EcsTaskIps.get({ taskArn: parsedEvent.detail.taskArn }).go();
  if (!ecsTaskIps || ecsTaskIps.expiresAt) {
    // Task ips already deleted.
    return;
  }

  const publicIps = ecsTaskIps.publicIps ?? [];

  tracer.putAnnotation('hostedZoneId', env.HOSTED_ZONE_ID);
  tracer.putAnnotation('recordName', env.RECORD_NAME);
  tracer.putAnnotation('taskArn', parsedEvent.detail.taskArn);
  tracer.putMetadata('publicIps', publicIps);

  const tx = await database.transaction.write((entities) => [
    entities.EcsTaskIps
      .patch({ taskArn: parsedEvent.detail.taskArn })
      .set({ expiresAt: Math.round(Date.now() / 1000 + 10 * 60) })
      .commit(),
    entities.DnsRecord
      .patch({
        hostedZoneId: env.HOSTED_ZONE_ID,
        name: env.RECORD_NAME,
      })
      .delete({ ips: publicIps })
      .add({ version: 1 })
      .commit(),
  ]).go();

  if (tx.canceled) {
    throw new Error('Transaction failed');
  }
});
