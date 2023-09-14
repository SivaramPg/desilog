import { z } from 'zod'

export const AssetTypeEnum = z.enum(['avatars', 'characters', 'characters-bw'])

const BaseNumberSchema = z.coerce.number().int().positive()

export const BaseAssetId = BaseNumberSchema
export const BaseWidth = BaseNumberSchema
