import { App, aws_ec2, aws_ecs, aws_route53, CfnOutput, Stack } from 'aws-cdk-lib';
import { IpPublisher } from '../src';

const app = new App();

const stack = new Stack(app, 'integ-cdk-ecs-dns');

const vpc = new aws_ec2.Vpc(stack, 'Vpc', {
  subnetConfiguration: [
    {
      name: 'public',
      subnetType: aws_ec2.SubnetType.PUBLIC,
      mapPublicIpOnLaunch: true,
    },
  ],
});

const cluster = new aws_ecs.Cluster(stack, 'Cluster', { vpc });

const taskDefinition = new aws_ecs.FargateTaskDefinition(stack, 'Task');

taskDefinition.addContainer('main', {
  image: aws_ecs.ContainerImage.fromRegistry('nginx'),
  portMappings: [{ containerPort: 80 }],
});

const service = new aws_ecs.FargateService(stack, 'Service', {
  cluster,
  taskDefinition,
  assignPublicIp: true,
  capacityProviderStrategies: [
    {
      capacityProvider: 'FARGATE_SPOT',
      weight: 1,
    },
  ],
});

service.connections.allowFromAnyIpv4(aws_ec2.Port.tcp(80));

const hostedZone = new aws_route53.PublicHostedZone(stack, 'HostedZone', {
  zoneName: 'cdk-ecs-dns.dev.wheatstalk.ca',
});

const ipPublisher = new IpPublisher(stack, 'Ips');

new CfnOutput(stack, 'HostedZoneId', { value: hostedZone.hostedZoneId });
new CfnOutput(stack, 'DnsManagerPath', { value: ipPublisher.node.path });

ipPublisher.publishEcsService('example', {
  hostedZone,
  service: service,
  name: 'example',
});

app.synth();