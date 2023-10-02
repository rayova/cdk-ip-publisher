import { database } from '../../src/Database/runtime';

export async function handler(event: any) {
  console.log(event);

  await database.entities.DnsRecord
    .upsert(event)
    .go();

  return 'OK';
}