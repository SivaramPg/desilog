import { z } from 'zod'

export const AssetTypeEnum = z.enum(['avatars', 'characters', 'characters-bw'])

const BaseWidth = z.coerce.number().int().positive()

export const RandomSchema = z
  .object({
    assetType: AssetTypeEnum,
    width: BaseWidth,
  })
  .strict()
  .refine(({ assetType, width }) => {
    if (assetType === 'avatars') {
      return width <= 1000
    } else if (assetType === 'characters') {
      return width <= 2000
    } else if (assetType === 'characters-bw') {
      return width <= 2000
    }

    return false
  })
