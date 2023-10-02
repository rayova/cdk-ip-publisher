import { database } from '../../src/database';

export async function handler(event: any) {
  console.log(event);

  await database.entities.DnsRecord
    .upsert(event)
    .go();

  return 'OK';
}