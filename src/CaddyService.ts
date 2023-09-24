import { aws_ec2, aws_ecs, aws_efs, aws_route53, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CaddyCompute } from './CaddyCompute';
import { EcsDnsExporter } from './EcsDnsExporter';

export interface CaddyServiceProps {
  readonly vpc?: aws_ec2.IVpc;
  readonly cluster?: aws_ecs.ICluster;
}

export class CaddyService extends Construct {
  readonly aliasTarget: aws_route53.IAliasRecordTarget;

  constructor(scope: Construct, id: string, props: CaddyServiceProps) {
    super(scope, id);

    const cluster = props.cluster ??
      // Create a new cluster if one is not provided
      new aws_ecs.Cluster(this, 'Cluster', {
        // Create a vpc if one is not provided
        vpc: props.vpc ?? new aws_ec2.Vpc(this, 'Vpc', {
          subnetConfiguration: [
            {
              name: 'public',
              subnetType: aws_ec2.SubnetType.PUBLIC,
              mapPublicIpOnLaunch: true,
            },
          ],
        }),
      });

    // Always create a new EFS in the cluster's vpc.
    const efs = new aws_efs.FileSystem(this, 'Efs', {
      removalPolicy: RemovalPolicy.DESTROY,
      vpc: cluster.vpc,
    });

    const compute = new CaddyCompute(this, 'Compute', {
      cluster,
      efs,
    });

    const dnsExporter = new EcsDnsExporter(this, 'EcsPublicDns');

    this.aliasTarget = dnsExporter.addService('thing', {
      service: compute.service,
    });
  }
}

