import {
  aws_dynamodb,
  aws_iam,
  aws_lambda,
  aws_lambda_event_sources, aws_logs,
  aws_route53,
  custom_resources,
  CustomResource,
  Duration, Lazy,
  RemovalPolicy,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { GcFunction } from './gc-function';
import { StreamHandlerFunction } from './stream-handler-function';

export interface Route53WriterProps {
  readonly table: aws_dynamodb.ITable;
}

export class Route53Writer extends Construct {
  readonly registeredRecords: RegisterRecordParams[] = [];

  constructor(scope: Construct, id: string, props: Route53WriterProps) {
    super(scope, id);

    const streamHandler = new StreamHandlerFunction(this, 'StreamHandler', {
      tracing: aws_lambda.Tracing.ACTIVE,
      initialPolicy: [
        new aws_iam.PolicyStatement({
          effect: aws_iam.Effect.ALLOW,
          actions: [
            'route53:ChangeResourceRecordSets',
            'route53:ListResourceRecordSets',
          ],
          resources: ['*'],
        }),
      ],
      events: [
        new aws_lambda_event_sources.DynamoEventSource(props.table, {
          startingPosition: aws_lambda.StartingPosition.TRIM_HORIZON,
          batchSize: 1000,
          maxBatchingWindow: Duration.seconds(5),
        }),
      ],
      logRetention: aws_logs.RetentionDays.ONE_WEEK,
    });

    const gcFunction = new GcFunction(this, 'GcFunction', {
      tracing: aws_lambda.Tracing.ACTIVE,
      timeout: Duration.minutes(15),
      environment: {
        TABLE: props.table.tableName,
      },
      initialPolicy: [
        new aws_iam.PolicyStatement({
          effect: aws_iam.Effect.ALLOW,
          actions: [
            'route53:ChangeResourceRecordSets',
            'route53:ListResourceRecordSets',
          ],
          resources: ['*'],
        }),
      ],
      logRetention: aws_logs.RetentionDays.ONE_WEEK,
    });

    props.table.grantReadWriteData(gcFunction);

    const provider = new custom_resources.Provider(this, 'Provider', {
      onEventHandler: gcFunction,
    });

    const customResource = new CustomResource(this, 'CustomResource', {
      resourceType: 'Custom::Route53WriterGC',
      serviceToken: provider.serviceToken,
      removalPolicy: RemovalPolicy.DESTROY,
      properties: {
        RegisteredRecords: Lazy.any({
          produce: () => this.registeredRecords.map((record) => ({
            HostedZoneId: record.hostedZone.hostedZoneId,
            Name: record.name,
          })),
        }),
      },
    });

    customResource.node.addDependency(streamHandler);
  }

  registerRecord(param: RegisterRecordParams) {
    this.registeredRecords.push(param);
  }
}

export interface RegisterRecordParams {
  readonly hostedZone: aws_route53.IHostedZone;
  readonly name: string;
}
