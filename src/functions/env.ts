import { z } from 'zod';

const Env$ = z.object({
  HOSTED_ZONE_ID: z.string(),
  RECORD_NAME: z.string(),
});

export const env = Env$.parse(process.env);