import { z } from 'zod'

import {
  AVATARS_COUNT,
  CHARACTERS_COUNT,
  CHARACTERS_BW_COUNT,
  MAX_AVATAR_WIDTH,
  MAX_CHARACTERS_WIDTH,
} from '@/constants'
import { AssetTypeEnum } from './RandomSchema'
import { BaseAssetId, BaseWidth } from './BaseSchemas'

export const AssetSchema = z
  .object({
    assetType: AssetTypeEnum,
    assetId: BaseAssetId,
    width: BaseWidth,
  })
  .strict()
  .refine(({ assetType, assetId, width }) => {
    switch (assetType) {
      case AssetTypeEnum.enum.avatars:
        return assetId <= AVATARS_COUNT && width <= MAX_AVATAR_WIDTH

      case AssetTypeEnum.enum.characters:
        return assetId <= CHARACTERS_COUNT && width <= MAX_CHARACTERS_WIDTH

      case AssetTypeEnum.enum['characters-bw']:
        return assetId <= CHARACTERS_BW_COUNT && width <= MAX_CHARACTERS_WIDTH

      default:
        return false
    }
  })
