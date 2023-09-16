import { z } from 'zod'

import { MAX_AVATAR_WIDTH } from '@/constants'
import { AssetTypeEnum, BaseWidth } from './BaseSchemas'

const randomSchemaRefinementMap = {
  [AssetTypeEnum.enum.avatars]: (width: number) => width <= MAX_AVATAR_WIDTH,
  [AssetTypeEnum.enum['characters-bw']]: (width?: number) => true,
  [AssetTypeEnum.enum.characters]: (width?: number) => true,
}

export const RandomSchema = z
  .object({
    assetType: AssetTypeEnum,
    width: BaseWidth,
  })
  .strict()
  .refine(({ assetType, width }) => {
    return randomSchemaRefinementMap[assetType](width)
  })
