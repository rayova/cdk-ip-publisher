import { aws_dynamodb, aws_ecs, aws_route53, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EcsServicePublisher } from './EcsServicePublisher';
import { Route53Writer } from './Route53Writer';

export class IpPublisher extends Construct {
  private readonly table: aws_dynamodb.Table;
  private readonly writer: Route53Writer;

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
      timeToLiveAttribute: 'expiresAt',
      stream: aws_dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
    });

    this.table.addGlobalSecondaryIndex({
      indexName: 'gsi1',
      partitionKey: {
        name: 'sk',
        type: aws_dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: 'pk',
        type: aws_dynamodb.AttributeType.STRING,
      },
    });

    this.writer = new Route53Writer(this, 'Route53Writer', {
      table: this.table,
    });
  }

  publishEcsService(id: string, params: PublishEcsServiceParams): void {
    const name = (params.name ?? id).toLowerCase();

    this.writer.registerRecord({
      hostedZone: params.hostedZone,
      name,
    });

    new EcsServicePublisher(this, id, {
      table: this.table,
      hostedZone: params.hostedZone,
      service: params.service,
      name,
    });
  }
}

export interface PublishEcsServiceParams {
  readonly hostedZone: aws_route53.IHostedZone;
  readonly service: aws_ecs.BaseService;
  readonly name?: string;
}
