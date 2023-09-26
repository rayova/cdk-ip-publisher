/* eslint-disable import/no-extraneous-dependencies */

import { DescribeNetworkInterfacesCommand, EC2Client } from '@aws-sdk/client-ec2';
import { z } from 'zod';

export type TaskState = z.infer<typeof TaskState$>;
export const TaskState$ = z.object({
  clusterArn: z.string(),
  taskArn: z.string(),
  attachments: z.array(
    z.object({
      details: z.array(
        z.object({
          name: z.string(),
          value: z.string(),
        }),
      ),
    }),
  ),
});

export const TaskStateEvent$ = z.object({
  detail: TaskState$,
});

const Env$ = z.object({
  CLUSTER_ARN: z.string(),
  SERVICE_NAME: z.string(),
  HOSTED_ZONE_ID: z.string(),
  RECORD_NAME: z.string(),
});

export const env = Env$.parse(process.env);

export async function getPublicIps(event: TaskState): Promise<string[]> {
  const ec2 = new EC2Client({});
  const networkInterfaceIds: string[] = [];
  for (const attachment of event.attachments) {
    for (const detail of attachment.details) {
      if (detail.name === 'networkInterfaceId') {
        networkInterfaceIds.push(detail.value);
      }
    }
  }

  const describeResult = await ec2.send(
    new DescribeNetworkInterfacesCommand({
      NetworkInterfaceIds: networkInterfaceIds,
    }),
  );

  const publicIps: string[] = [];
  for (const networkInterface of describeResult.NetworkInterfaces ?? []) {
    if (networkInterface.Association?.PublicIp) {
      publicIps.push(networkInterface.Association.PublicIp);
    }
  }

  return publicIps;
}
