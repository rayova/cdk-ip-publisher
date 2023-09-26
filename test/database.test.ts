import { database } from '../src/database';

test('asdf', () => {
  const key = database.entities.DnsRecord.conversions.fromKeys.toComposite({
    pk: 'pk',
    sk: 'sk',
  });

  expect(key).toEqual(null);
});