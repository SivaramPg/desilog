import { z } from 'zod'

import { AVATARS_COUNT } from '@/constants'

export const AvatarsIdSchema = z.coerce
  .number()
  .int()
  .positive()
  .max(AVATARS_COUNT)

export const AvatarsSchema = z
  .object({
    id: AvatarsIdSchema,
    width: z.coerce.number().int().positive().max(1000),
  })
  .strict()
