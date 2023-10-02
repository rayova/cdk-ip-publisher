import { aws_ecs, aws_route53 } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EcsServicePublisher } from './EcsServicePublisher';
import { IpPublisherDatabase } from './IpPublisherDatabase';
import { Route53Writer } from './Route53Writer';

export class IpPublisher extends Construct {
  private readonly table: IpPublisherDatabase;
  private readonly writer: Route53Writer;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.table = new IpPublisherDatabase(this, 'Table');

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
      cluster: params.cluster,
      service: params.service,
      name,
    });
  }
}

export interface PublishEcsServiceParams {
  readonly hostedZone: aws_route53.IHostedZone;
  readonly cluster: aws_ecs.ICluster;
  readonly service: aws_ecs.IService;
  readonly name?: string;
}
