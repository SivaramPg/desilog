import { z } from 'zod'

import {
  AVATARS_COUNT,
  CHARACTERS_COUNT,
  CHARACTERS_BW_COUNT,
} from '@/constants'

export const AssetTypeEnum = z.enum(['avatars', 'characters', 'characters-bw'])

const BaseAssetId = z.coerce.number().int().positive()

const BaseWidth = z.coerce.number().int().positive()

export const AssetSchema = z
  .object({
    assetType: AssetTypeEnum,
    assetId: BaseAssetId,
    width: BaseWidth,
  })
  .strict()
  .refine(({ assetType, assetId, width }) => {
    if (assetType === 'avatars') {
      return assetId <= AVATARS_COUNT && width <= 1000
    } else if (assetType === 'characters') {
      return assetId <= CHARACTERS_COUNT && width <= 2000
    } else if (assetType === 'characters-bw') {
      return assetId <= CHARACTERS_BW_COUNT && width <= 2000
    }

    return false
  })
