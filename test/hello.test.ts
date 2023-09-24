import { database } from '../src/functions/database';

test('database parses IpGroup', () => {
  const data = {
    sk: '$ipgroup_1',
    __edb_e__: 'IpGroup',
    __edb_v__: '1',
    pk: '$cdk-ecs-caddy#group_caddy-cdkcaddymainintegcaddyservice4a81fa5f',
    version: 1,
    publicIps: {},
    group: 'caddy-cdkcaddymainintegCaddyService4A81FA5F',
  };

  const res = database.entities.IpGroup.parse({ Item: data });

  expect(res.data).toBeDefined();
  expect(res.data?.group).toBe('caddy-cdkcaddymainintegCaddyService4A81FA5F');
});