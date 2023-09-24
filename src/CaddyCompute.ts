import { aws_ec2, aws_ecs, aws_efs, aws_logs } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface CaddyComputeProps {
  readonly cluster: aws_ecs.ICluster;
  readonly efs: aws_efs.IFileSystem;
}

export class CaddyCompute extends Construct {
  readonly service: aws_ecs.FargateService;

  constructor(scope: Construct, id: string, props: CaddyComputeProps) {
    super(scope, id);

    const taskDefinition = new aws_ecs.FargateTaskDefinition(this, 'TaskDefinition');

    const efsVolName = 'efs';

    taskDefinition.addVolume({
      name: efsVolName,
      efsVolumeConfiguration: {
        fileSystemId: props.efs.fileSystemId,
      },
    });

    const main = taskDefinition.addContainer('main', {
      image: aws_ecs.ContainerImage.fromAsset('./docker'),
      // image: aws_ecs.ContainerImage.fromRegistry('caddy:2'),
      portMappings: [
        {
          containerPort: 80,
          protocol: aws_ecs.Protocol.TCP,
        },
        {
          containerPort: 443,
          protocol: aws_ecs.Protocol.TCP,
        },
        {
          // HTTP/3
          containerPort: 443,
          protocol: aws_ecs.Protocol.UDP,
        },
      ],
      logging: aws_ecs.LogDrivers.awsLogs({
        streamPrefix: 'caddy',
        logRetention: aws_logs.RetentionDays.ONE_WEEK,
      }),
    });

    main.addMountPoints({
      sourceVolume: efsVolName,
      containerPath: '/data',
      readOnly: false,
    });

    main.addMountPoints({
      sourceVolume: efsVolName,
      containerPath: '/config',
      readOnly: false,
    });

    this.service = new aws_ecs.FargateService(this, 'Service', {
      cluster: props.cluster,
      taskDefinition,
      // Cheapness
      capacityProviderStrategies: [
        {
          capacityProvider: 'FARGATE_SPOT',
          weight: 1,
        },
      ],
      // Availability
      minHealthyPercent: 0,
      maxHealthyPercent: 200,
      // Networking
      assignPublicIp: true,
      vpcSubnets: {
        subnetType: aws_ec2.SubnetType.PUBLIC,
      },
    });

    props.efs.connections.allowDefaultPortFrom(this.service);

    this.service.connections.allowFromAnyIpv4(aws_ec2.Port.tcp(80));
    this.service.connections.allowFromAnyIpv4(aws_ec2.Port.tcp(443));
    this.service.connections.allowFromAnyIpv4(aws_ec2.Port.udp(443)); // HTTP/3
  }
}