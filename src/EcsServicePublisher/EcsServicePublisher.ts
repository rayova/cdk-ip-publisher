import { aws_dynamodb, aws_ecs, aws_events, aws_events_targets, aws_iam, aws_lambda, aws_logs, aws_route53, Duration, triggers } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TaskStartedFunction } from './task-started-function';
import { TaskStoppingFunction } from './task-stopping-function';
import { TaskSyncFunction } from './task-sync-function';

export interface EcsServiceIpsProps {
  readonly table: aws_dynamodb.ITable;
  readonly hostedZone: aws_route53.IHostedZone;
  readonly service: aws_ecs.BaseService;
  readonly name: string;
}

export class EcsServicePublisher extends Construct {
  constructor(scope: Construct, id: string, props: EcsServiceIpsProps) {
    super(scope, id);

    const {
      table,
      service,
      name,
      hostedZone,
    } = props;

    const lambdaProps: Partial<aws_lambda.FunctionProps> = {
      tracing: aws_lambda.Tracing.ACTIVE,
      timeout: Duration.minutes(1),
      memorySize: 512,
      environment: {
        TABLE: table.tableName,
        HOSTED_ZONE_ID: hostedZone.hostedZoneId,
        RECORD_NAME: `${name}.${hostedZone.zoneName}`,
        CLUSTER_ARN: service.cluster.clusterArn,
        SERVICE_NAME: service.serviceName,
      },
      initialPolicy: [
        new aws_iam.PolicyStatement({
          effect: aws_iam.Effect.ALLOW,
          actions: ['ec2:DescribeNetworkInterfaces'],
          resources: ['*'],
        }),
        new aws_iam.PolicyStatement({
          effect: aws_iam.Effect.ALLOW,
          actions: ['ecs:DescribeTasks', 'ecs:ListTasks'],
          resources: ['*'],
        }),
      ],
      logRetention: aws_logs.RetentionDays.ONE_WEEK,
    };

    const taskStoppingFunction = new TaskStoppingFunction(this, 'TaskStopping', lambdaProps);
    table.grantReadWriteData(taskStoppingFunction);

    const taskStartedFunction = new TaskStartedFunction(this, 'TaskStarted', lambdaProps);
    table.grantReadWriteData(taskStartedFunction);

    const taskSyncFunction = new TaskSyncFunction(this, 'TaskSync', lambdaProps);
    table.grantReadWriteData(taskSyncFunction);

    const lambdaTargetProps: aws_events_targets.LambdaFunctionProps = {
      retryAttempts: 50,
      // maxEventAge: Duration.seconds(60),
    };

    // https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_cwe_events.html#ecs_task_events

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

    new aws_events.Rule(this, 'TaskSyncRule', {
      eventPattern: {
        source: ['aws.ecs'],
        detailType: ['ECS Service Action'],
        detail: {
          eventName: ['SERVICE_STEADY_STATE'],
          clusterArn: [service.cluster.clusterArn],
        },
      },
      targets: [
        new aws_events_targets.LambdaFunction(
          taskSyncFunction,
          lambdaTargetProps,
        ),
      ],
    });

    new triggers.Trigger(this, 'TaskSyncTrigger', {
      handler: taskSyncFunction,
      timeout: taskSyncFunction.timeout,
      invocationType: triggers.InvocationType.EVENT,
      executeOnHandlerChange: true,
    });
  }
}