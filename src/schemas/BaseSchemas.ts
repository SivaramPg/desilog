import { CHARACTERS_COUNT, MAX_CHARACTERS_WIDTH } from '@/constants'
import { z } from 'zod'

export const AssetTypeEnum = z.enum(['avatars', 'characters', 'characters-bw'])

const BaseNumberSchema = z.coerce.number().int().positive()

export const BaseAssetId = BaseNumberSchema.max(CHARACTERS_COUNT)
export const BaseWidth = BaseNumberSchema.max(MAX_CHARACTERS_WIDTH)
