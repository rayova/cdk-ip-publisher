import { Entity, EntityItem, Service } from 'electrodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { serviceName } from './constants';

const EcsTaskIps = new Entity({
  model: {
    service: serviceName,
    entity: 'EcsTaskIps',
    version: '1',
  },
  attributes: {
    taskArn: {
      type: 'string',
      required: true,
    },
    publicIps: {
      type: 'set',
      items: 'string',
      required: true,
      default: [],
    },
  },
  indexes: {
    main: {
      pk: {
        field: 'pk',
        composite: ['taskArn'],
      },
      sk: {
        field: 'sk',
        composite: [],
      },
    },
  },
});

export type DnsRecord = EntityItem<typeof DnsRecord>;
const DnsRecord = new Entity({
  model: {
    service: serviceName,
    entity: 'DnsRecord',
    version: '1',
  },
  attributes: {
    hostedZoneId: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    version: {
      type: 'number',
      required: true,
      default: 0,
    },
    publicIps: {
      type: 'set',
      items: 'string',
      required: true,
      default: [],
    },
  },
  indexes: {
    main: {
      pk: {
        field: 'pk',
        composite: ['hostedZoneId'],
      },
      sk: {
        field: 'sk',
        composite: ['name'],
      },
    },
  },
});

export const database = new Service({
  EcsTaskIps,
  DnsRecord,
}, {
  table: process.env.TABLE,
  client: DynamoDBDocumentClient.from(new DynamoDBClient({})),
});