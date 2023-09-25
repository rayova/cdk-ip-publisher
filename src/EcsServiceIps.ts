import { aws_dynamodb, aws_ecs, aws_events, aws_events_targets, aws_iam, aws_lambda, aws_logs, aws_route53 } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TaskStartedFunction } from './functions/task-started-function';
import { TaskStoppingFunction } from './functions/task-stopping-function';

export interface EcsServiceIpsProps {
  readonly table: aws_dynamodb.ITable;
  readonly hostedZone: aws_route53.IHostedZone;
  readonly service: aws_ecs.BaseService;
  readonly name: string;
}

export class EcsServiceIps extends Construct {
  constructor(scope: Construct, id: string, props: EcsServiceIpsProps) {
    super(scope, id);

    const {
      table,
      service,
      name,
      hostedZone,
    } = props;

    const taskLambdaProps: Partial<aws_lambda.FunctionProps> = {
      environment: {
        TABLE: table.tableName,
        HOSTED_ZONE_ID: hostedZone.hostedZoneId,
        RECORD_NAME: `${name}.${hostedZone.zoneName}`,
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