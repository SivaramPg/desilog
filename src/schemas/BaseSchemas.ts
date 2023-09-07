import { z } from 'zod'

export const AssetTypeEnum = z.enum(['avatars', 'characters', 'characters-bw'])

export const BaseAssetId = z.coerce.number().int().positive()
export const BaseWidth = z.coerce.number().int().positive()
