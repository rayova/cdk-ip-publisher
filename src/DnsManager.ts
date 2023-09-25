import { aws_dynamodb, aws_ecs, aws_route53, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EcsServiceIps } from './EcsServiceIps';
import { Route53Writer } from './Route53Writer';

export class DnsManager extends Construct {
  private readonly table: aws_dynamodb.Table;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.table = new aws_dynamodb.Table(this, 'Table', {
      removalPolicy: RemovalPolicy.DESTROY,
      billingMode: aws_dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'pk',
        type: aws_dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: 'sk',
        type: aws_dynamodb.AttributeType.STRING,
      },
      stream: aws_dynamodb.StreamViewType.NEW_IMAGE,
    });

    new Route53Writer(this, 'Route53Writer', {
      table: this.table,
    });
  }

  publishEcsService(id: string, params: PublishEcsServiceParams): void {
    const name = params.name ?? id;

    new EcsServiceIps(this, id, {
      table: this.table,
      hostedZone: params.hostedZone,
      service: params.service,
      name: name.toLowerCase(),
    });
  }
}

export interface PublishEcsServiceParams {
  readonly hostedZone: aws_route53.IHostedZone;
  readonly service: aws_ecs.BaseService;
  readonly name?: string;
}
