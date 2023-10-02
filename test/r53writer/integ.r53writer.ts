import { AwsApiCall, ExpectedResult, IntegTest, InvocationType, LambdaInvokeFunction } from '@aws-cdk/integ-tests-alpha';
import { DeployAssert } from '@aws-cdk/integ-tests-alpha/lib/assertions/private/deploy-assert';
import { App, aws_lambda_nodejs, aws_route53, Duration, Stack } from 'aws-cdk-lib';
import { Database } from '../../src/Database';
import { Route53Writer } from '../../src/Route53Writer';

const app = new App();
const stack = new Stack(app, 'integ-r53writer');

const hostedZone = new aws_route53.PublicHostedZone(stack, 'HostedZone', {
  zoneName: 'r53writer.integ.wheatstalk.ca',
});

const table = new Database(stack, 'Table');

new Route53Writer(stack, 'Route53Writer', {
  table,
});

const writeDatabase = new aws_lambda_nodejs.NodejsFunction(stack, 'WriteDatabase', {
  entry: `${__dirname}/writeDatabase.ts`,
  environment: {
    TABLE: table.tableName,
    HOSTED_ZONE_ID: hostedZone.hostedZoneId,
    RECORD_NAME: `add.${hostedZone.zoneName}`,
  },
});

table.grantReadWriteData(writeDatabase);


const integTest = new IntegTest(app, 'Integ', {
  testCases: [stack],
});

const deployAssert = integTest.assertions;
if (!DeployAssert.isDeployAssert(deployAssert)) {
  throw new Error('Expected DeployAssert');
}

// Extract the assertion scope from the DeployAssert because their
// implementation fails to allow multiples of the same aws api call
// due to insufficient uniqueness in the assertion ids.
const assertionScope = deployAssert.scope;

let id = 0;
const nextId = () => `Assertion${id++}`;

const name = `example.${hostedZone.zoneName}`;

writeRecord(name, ['1.1.1.1', '2.2.2.2', '3.3.3.3'])
  .next(
    listRecords(name)
      .expect(ExpectedResult.objectLike({
        ResourceRecordSets: [{
          Name: `${name}.`,
          Type: 'A',
          TTL: 30,
          ResourceRecords: [
            { Value: '1.1.1.1' },
            { Value: '2.2.2.2' },
            { Value: '3.3.3.3' },
          ],
        }],
      })),
  )

  .next(writeRecord(name, ['4.4.4.4']))
  .next(
    listRecords(name)
      .expect(ExpectedResult.objectLike({
        ResourceRecordSets: [{
          Name: `${name}.`,
          Type: 'A',
          TTL: 30,
          ResourceRecords: [
            { Value: '4.4.4.4' },
          ],
        }],
      })),
  )

  .next(writeRecord(name, []))
  .next(
    listRecords(name)
      .expect(ExpectedResult.objectLike({
        ResourceRecordSets: [],
      })),
  );

function writeRecord(recordName: string, ips: string[]) {
  return new LambdaInvokeFunction(assertionScope, nextId(), {
    functionName: writeDatabase.functionName,
    invocationType: InvocationType.EVENT,
    payload: JSON.stringify({
      hostedZoneId: hostedZone.hostedZoneId,
      name: recordName,
      ips,
    }),
  });
}

function listRecords(recordName: string) {
  return new AwsApiCall(assertionScope, nextId(), {
    service: 'Route53',
    api: 'listResourceRecordSets',
    parameters: {
      HostedZoneId: hostedZone.hostedZoneId,
      MaxItems: '1',
      StartRecordName: `${recordName}.`,
      StartRecordType: 'A',
    },
  })
    .waitForAssertions({
      totalTimeout: Duration.seconds(30),
      interval: Duration.seconds(1),
    });
}