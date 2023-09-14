import { z } from 'zod'

import {
  AVATARS_COUNT,
  CHARACTERS_COUNT,
  CHARACTERS_BW_COUNT,
  MAX_AVATAR_WIDTH,
  MAX_CHARACTERS_WIDTH,
} from '@/constants'
import { AssetTypeEnum } from './BaseSchemas'
import { BaseAssetId, BaseWidth } from './BaseSchemas'

const assetSchemaRefinementMap = {
  [AssetTypeEnum.enum['characters-bw']]: (assetId: number, width: number) =>
    assetId <= CHARACTERS_BW_COUNT && width <= MAX_CHARACTERS_WIDTH,
  [AssetTypeEnum.enum.characters]: (assetId: number, width: number) =>
    assetId <= CHARACTERS_COUNT && width <= MAX_CHARACTERS_WIDTH,
  [AssetTypeEnum.enum.avatars]: (assetId: number, width: number) =>
    assetId <= AVATARS_COUNT && width <= MAX_AVATAR_WIDTH,
}

export const AssetSchema = z
  .object({
    assetType: AssetTypeEnum,
    assetId: BaseAssetId,
    width: BaseWidth,
  })
  .strict()
  .refine(({ assetType, assetId, width }) => {
    return assetSchemaRefinementMap[assetType](assetId, width)
  })
