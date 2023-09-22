import { z } from 'zod'
import { CHARACTERS_COUNT, MAX_CHARACTERS_WIDTH } from '@/constants'

export const AssetTypeSchema = z.union([
  z.literal('avatars'),
  z.literal('characters'),
  z.literal('characters-bw'),
])

export type AssetType = z.infer<typeof AssetTypeSchema>

const BaseNumberSchema = z.coerce.number().int().positive()

export const BaseAssetId = BaseNumberSchema.max(CHARACTERS_COUNT)
export const BaseWidth = BaseNumberSchema.max(MAX_CHARACTERS_WIDTH)
