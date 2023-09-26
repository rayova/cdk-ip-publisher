import { AppHandler, logger } from '../runtime';
import { DescribeTasksCommand, ECSClient, ListTasksCommand, Task } from '@aws-sdk/client-ecs';
import { env, getPublicIps, TaskState$ } from './runtime';
import { ListTasksCommandOutput } from '@aws-sdk/client-ecs/dist-types/commands/ListTasksCommand';
import { database } from '../database';

const ecs = new ECSClient({});

export const handler = AppHandler(async () => {
  const dnsRecordKey = {
    hostedZoneId: env.HOSTED_ZONE_ID,
    name: env.RECORD_NAME,
  };

  const { data: dnsRecord } = await database.entities.DnsRecord
    .get(dnsRecordKey)
    .go();

  // Get tasks for the given service
  const taskArns = await listTaskArns(env.CLUSTER_ARN, env.SERVICE_NAME);
  let tasks = await describeTasks(env.CLUSTER_ARN, taskArns);

  tasks = tasks.slice(0, 90);

  const taskMap = new Map<string, string[]>;
  await Promise.all(tasks.map(async (task) => {
      if (task.lastStatus !== 'RUNNING') return;
      if (task.desiredStatus !== 'RUNNING') return;

      const parsedTask = TaskState$.parse(task);
      const taskPublicIps = await getPublicIps(parsedTask);

      taskMap.set(parsedTask.taskArn, taskPublicIps);
    }),
  );

  const publicIps = Array.from(taskMap.values()).flat();

  logger.info('Public IPs', { publicIps });

  const tx = await database.transaction.write((entities) => [
    dnsRecord
      // When the record already exists, lets update it.
      ? entities.DnsRecord
        .patch(dnsRecordKey)
        .set({ ips: publicIps })
        .add({ version: 1 })
        .where((ent, cmp) => cmp.eq(ent.version, dnsRecord.version))
        .commit()
      // When the record does not exist, lets create it.
      : entities.DnsRecord
        .create({
          ...dnsRecordKey,
          ips: publicIps,
        })
        .commit(),
    // Upsert the latest IPs for each task.
    ...[...taskMap.entries()]
      .map(([taskArn, publicIps]) =>
        entities.EcsTaskIps
          .upsert({
            taskArn,
            publicIps,
            expiresAt: undefined, // Ensure the task is not expired.
          })
          .commit()),
  ]).go();

  if (tx.canceled) {
    throw new Error('Transaction failed');
  }
});

async function listTaskArns(clusterArn: string, serviceName: string) {
  const taskArns = new Set<string>();

  let nextToken: string | undefined = undefined;
  do {
    const listRes: ListTasksCommandOutput = await ecs.send(
      new ListTasksCommand({
        cluster: clusterArn,
        serviceName,
        nextToken,
      }),
    );

    const tasks = listRes.taskArns ?? [];
    for (const task of tasks) {
      taskArns.add(task);
    }

    nextToken = listRes.nextToken;
  } while (nextToken);

  return Array.from(taskArns);
}

async function describeTasks(clusterArn: string, taskArns: string[]) {
  function chunkArray<T>(arr: T[], size: number): T[][] {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }

    return chunks;
  }

  const tasks = new Array<Task>();
  for (const chunk of chunkArray(taskArns, 100)) {
    const res = await ecs.send(
      new DescribeTasksCommand({
        cluster: clusterArn,
        tasks: chunk,
      }),
    );

    tasks.push(...(res.tasks ?? []));
  }

  return tasks;
}
