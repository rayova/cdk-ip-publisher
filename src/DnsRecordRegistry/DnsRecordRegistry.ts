import {
  aws_dynamodb,
  aws_iam,
  aws_lambda,
  aws_logs,
  aws_route53,
  custom_resources,
  CustomResource,
  Duration,
  Lazy,
  RemovalPolicy,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { GcFunction } from './gc-function';

export interface DnsRecordRegistryProps {
  readonly table: aws_dynamodb.ITable;
}

export class DnsRecordRegistry extends Construct {
  private readonly registeredRecords: RegisterRecordParams[] = [];

  constructor(scope: Construct, id: string, props: DnsRecordRegistryProps) {
    super(scope, id);

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

    new CustomResource(this, 'CustomResource', {
      resourceType: 'Custom::DnsRecordRegistry',
      serviceToken: provider.serviceToken,
      removalPolicy: RemovalPolicy.DESTROY,
      properties: {
        RegisteredRecords: Lazy.any({
          produce: () => this.registeredRecords.map((record) => ({
            HostedZoneId: record.hostedZone.hostedZoneId,
            Name: `${record.name}.${record.hostedZone.zoneName}`,
          })),
        }),
      },
    });
  }

  registerRecord(param: RegisterRecordParams) {
    this.registeredRecords.push(param);
  }
}

export interface RegisterRecordParams {
  readonly hostedZone: aws_route53.IHostedZone;
  readonly name: string;
}