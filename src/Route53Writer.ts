import { aws_dynamodb, aws_iam, aws_lambda, aws_lambda_event_sources, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DatabaseOutboxFunction } from './functions/database-outbox-function';

export interface Route53WriterProps {
  readonly table: aws_dynamodb.ITable;
}

export class Route53Writer extends Construct {
  constructor(scope: Construct, id: string, props: Route53WriterProps) {
    super(scope, id);

    new DatabaseOutboxFunction(this, 'StreamHandler', {
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
    });
  }
}