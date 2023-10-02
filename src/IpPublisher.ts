import { aws_ecs, aws_route53 } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Database } from './Database';
import { EcsServicePublisher } from './EcsServicePublisher';
import { DnsRecordRegistry, Route53Writer } from './Route53Writer';

export class IpPublisher extends Construct {
  private readonly table: Database;
  private readonly writer: Route53Writer;
  private readonly registry: DnsRecordRegistry;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.table = new Database(this, 'Table');

    this.writer = new Route53Writer(this, 'Route53Writer', {
      table: this.table,
    });

    this.registry = new DnsRecordRegistry(this, 'DnsRecordRegistry', {
      table: this.table,
    });

    // Ensure the registry depends on the writer so that when the registry is
    // destroyed, the writer is still around to clean up the Route53 records
    // that the registry created.
    this.registry.node.addDependency(this.writer);
  }

  publishEcsService(id: string, params: PublishEcsServiceParams): void {
    const name = (params.name ?? id).toLowerCase();

    // TODO: Consider making this EcsServicePublisher's responsibility.

    this.registry.registerRecord({
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
