import { aws_dynamodb, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class Database extends aws_dynamodb.Table {
  constructor(scope: Construct, id: string) {
    super(scope, id, {
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

    this.addGlobalSecondaryIndex({
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
  }
}