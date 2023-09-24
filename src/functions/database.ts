import { Entity, EntityItem, Service } from 'electrodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const EcsTaskIps = new Entity({
  model: {
    service: 'cdk-ecs-caddy',
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

export type IpGroup = EntityItem<typeof IpGroup>;
const IpGroup = new Entity({
  model: {
    service: 'cdk-ecs-caddy',
    entity: 'IpGroup',
    version: '1',
  },
  attributes: {
    group: {
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
        composite: ['group'],
      },
      sk: {
        field: 'sk',
        composite: [],
      },
    },
  },
});

export const database = new Service({
  EcsTaskIps,
  IpGroup,
}, {
  table: process.env.TABLE,
  client: DynamoDBDocumentClient.from(new DynamoDBClient({})),
});