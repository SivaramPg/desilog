import { MAX_AVATAR_WIDTH, MAX_CHARACTERS_WIDTH } from '@/constants'
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
    switch (assetType) {
      case AssetTypeEnum.enum.avatars:
        return width <= MAX_AVATAR_WIDTH

      case AssetTypeEnum.enum.characters:
        return width <= MAX_CHARACTERS_WIDTH

      case AssetTypeEnum.enum['characters-bw']:
        return width <= MAX_CHARACTERS_WIDTH

      default:
        return false
    }
  })
