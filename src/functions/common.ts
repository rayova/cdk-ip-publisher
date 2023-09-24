import { DescribeNetworkInterfacesCommand, EC2Client } from '@aws-sdk/client-ec2';
import { z } from 'zod';
import { Route53Client } from '@aws-sdk/client-route-53';

export const route53 = new Route53Client({});

const ec2 = new EC2Client({});

export async function getPublicIps(event: z.infer<typeof TaskStateChange$>): Promise<string[]> {
  const networkInterfaceIds: string[] = [];
  for (const attachment of event.detail.attachments) {
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

export const TaskStateChange$ = z.object({
  detail: z.object({
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
  }),
});