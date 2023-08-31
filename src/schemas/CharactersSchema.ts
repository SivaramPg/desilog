import { z } from 'zod'

import { CHARACTERS_COUNT } from '@/constants'

export const CharactersIdSchema = z.coerce
  .number()
  .int()
  .positive()
  .max(CHARACTERS_COUNT)

export const CharactersSchema = z
  .object({
    id: CharactersIdSchema,
    width: z.coerce.number().int().positive().max(2000),
  })
  .strict()
