import { z } from 'zod'

import { MAX_AVATAR_WIDTH, MAX_CHARACTERS_WIDTH } from '@/constants'
import { AssetTypeEnum, BaseWidth } from './BaseSchemas'

const randomSchemaRefinementMap = {
  [AssetTypeEnum.enum['characters-bw']]: (width: number) =>
    width <= MAX_CHARACTERS_WIDTH,
  [AssetTypeEnum.enum.characters]: (width: number) =>
    width <= MAX_CHARACTERS_WIDTH,
  [AssetTypeEnum.enum.avatars]: (width: number) => width <= MAX_AVATAR_WIDTH,
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
