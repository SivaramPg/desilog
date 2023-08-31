import { z } from 'zod'

import { CHARACTERS_BW_COUNT } from '@/constants'

export const CharactersBWIdSchema = z.coerce
  .number()
  .int()
  .positive()
  .max(CHARACTERS_BW_COUNT)

export const CharactersBWSchema = z
  .object({
    id: CharactersBWIdSchema,
    width: z.coerce.number().int().positive().max(2000),
  })
  .strict()
