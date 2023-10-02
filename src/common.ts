/* eslint-disable import/no-extraneous-dependencies */
import { Logger } from '@aws-lambda-powertools/logger';
import { captureLambdaHandler, Tracer } from '@aws-lambda-powertools/tracer';
import middy from '@middy/core';
import * as lambda from 'aws-lambda';

export const serviceName = 'cdk-ip-publisher';

export const tracer = new Tracer({
  serviceName,
});

export const logger = new Logger({
  serviceName,
});

export function AppHandler<T, U>(handler: (event: T, context: lambda.Context) => Promise<U>) {
  return middy(handler).use(captureLambdaHandler(tracer));
}