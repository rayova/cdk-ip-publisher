import { createHash } from 'crypto';
import {
  aws_dynamodb,
  aws_ecs,
  aws_events,
  aws_events_targets,
  aws_iam,
  aws_lambda,
  aws_lambda_event_sources,
  aws_logs,
  aws_route53, aws_route53_targets,
  Duration,
  Names,
  RemovalPolicy,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DatabaseOutboxFunction } from './functions/database-outbox-function';
import { TaskStartedFunction } from './functions/task-started-function';
import { TaskStoppingFunction } from './functions/task-stopping-function';

export interface EcsDnsExporterProps {
  readonly hostedZone?: aws_route53.IHostedZone;
}

export class EcsDnsExporter extends Construct {
  readonly hostedZone: aws_route53.IHostedZone;

  private readonly table: aws_dynamodb.Table;

  constructor(scope: Construct, id: string, props: EcsDnsExporterProps = {}) {
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

    const zoneNameHashPart = createHash('sha256')
      .update(Names.uniqueId(this))
      .digest('hex')
      .substring(0, 8);

    this.hostedZone = props.hostedZone ?? new aws_route53.HostedZone(this, 'HostedZone', {
      zoneName: `x${zoneNameHashPart}.cdk-caddy.wheatstalk.ca`,
    });

    new Route53Writer(this, 'Route53Writer', {
      table: this.table,
      hostedZone: this.hostedZone,
    });
  }

  addService(id: string, props: { service: aws_ecs.BaseService; name?: string }): aws_route53.IAliasRecordTarget {
    const name = props.name ?? id;

    const serviceIpExporter = new ServiceIpExporter(this, id, {
      hostedZone: this.hostedZone,
      table: this.table,
      service: props.service,
      name: name,
    });

    return new aws_route53_targets.Route53RecordTarget(serviceIpExporter.aRecord);
  }
}

export interface ServiceIpExporterProps {
  readonly hostedZone: aws_route53.IHostedZone;
  readonly service: aws_ecs.BaseService;
  readonly table: aws_dynamodb.ITable;
  readonly name: string;
}

class ServiceIpExporter extends Construct {
  readonly aRecord: aws_route53.ARecord;

  constructor(scope: Construct, id: string, props: ServiceIpExporterProps) {
    super(scope, id);

    const {
      hostedZone,
      table,
      service,
      name,
    } = props;

    this.aRecord = new aws_route53.ARecord(this, 'ARecord', {
      zone: hostedZone,
      recordName: name,
      comment: 'This record is drifted by cdk-caddy during normal operation.',
      ttl: Duration.seconds(15),
      target: aws_route53.RecordTarget.fromValues('127.0.0.1'),
    });

    const taskLambdaProps: Partial<aws_lambda.FunctionProps> = {
      environment: {
        TABLE: table.tableName,
        GROUP: name,
      },
      initialPolicy: [
        new aws_iam.PolicyStatement({
          effect: aws_iam.Effect.ALLOW,
          actions: ['ec2:DescribeNetworkInterfaces'],
          resources: ['*'],
        }),
      ],
      logRetention: aws_logs.RetentionDays.ONE_WEEK,
    };

    const taskStoppingFunction = new TaskStoppingFunction(this, 'TaskStopping', taskLambdaProps);
    table.grantReadWriteData(taskStoppingFunction);

    const taskStartedFunction = new TaskStartedFunction(this, 'TaskStarted', taskLambdaProps);
    table.grantReadWriteData(taskStartedFunction);

    const lambdaTargetProps: aws_events_targets.LambdaFunctionProps = {
      retryAttempts: 1,
    };

    new aws_events.Rule(this, 'TaskStoppingRule', {
      eventPattern: {
        source: ['aws.ecs'],
        detailType: ['ECS Task State Change'],
        detail: {
          clusterArn: [service.cluster.clusterArn],
          group: [`service:${service.serviceName}`],
          lastStatus: ['RUNNING'],
          desiredStatus: ['STOPPED'],
        },
      },
      targets: [
        new aws_events_targets.LambdaFunction(
          taskStoppingFunction,
          lambdaTargetProps,
        ),
      ],
    });

    new aws_events.Rule(this, 'TaskStartedRule', {
      eventPattern: {
        source: ['aws.ecs'],
        detailType: ['ECS Task State Change'],
        detail: {
          clusterArn: [service.cluster.clusterArn],
          group: [`service:${service.serviceName}`],
          lastStatus: ['RUNNING'],
          desiredStatus: ['RUNNING'],
        },
      },
      targets: [
        new aws_events_targets.LambdaFunction(
          taskStartedFunction,
          lambdaTargetProps,
        ),
      ],
    });
  }
}

export interface Route53WriterProps {
  readonly table: aws_dynamodb.ITable;
  readonly hostedZone: aws_route53.IHostedZone;
}

class Route53Writer extends Construct {
  constructor(scope: Construct, id: string, props: Route53WriterProps) {
    super(scope, id);

    new DatabaseOutboxFunction(this, 'DatabaseOutbox', {
      tracing: aws_lambda.Tracing.ACTIVE,
      environment: {
        HOSTED_ZONE_ID: props.hostedZone.hostedZoneId,
        HOSTED_ZONE_NAME: props.hostedZone.zoneName,
      },
      initialPolicy: [
        new aws_iam.PolicyStatement({
          effect: aws_iam.Effect.ALLOW,
          actions: [
            'route53:ChangeResourceRecordSets',
            'route53:ListResourceRecordSets',
          ],
          resources: [props.hostedZone.hostedZoneArn],
        }),
      ],
      events: [
        new aws_lambda_event_sources.DynamoEventSource(props.table, {
          startingPosition: aws_lambda.StartingPosition.TRIM_HORIZON,
          batchSize: 1000,
          maxBatchingWindow: Duration.seconds(5),
        }),
      ],
    });
  }
}
