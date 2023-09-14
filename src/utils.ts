import { z } from 'zod'
import random from 'lodash.random'

import { AssetTypeEnum } from './schemas/BaseSchemas'
import {
  AVATARS_COUNT,
  CHARACTERS_BW_COUNT,
  CHARACTERS_COUNT,
} from './constants'

type AssetType = z.infer<typeof AssetTypeEnum>

export function CDN_FRIENDLY_HEADERS(
  assetType: string,
  imgBuffer: Buffer,
  id: number,
  width: number
) {
  return {
    'Content-Type': 'image/jpeg',
    'Content-Length': imgBuffer.length.toString(),
    'Content-Disposition': `inline; filename="${assetType}-${id}-${width}x${width}.jpg"`,
    'Cache-Control':
      'public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
    'CDN-Cache-Control':
      'public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
    'Vercel-CDN-Cache-Control':
      'public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
  }
}

const assetTypeDirPathMap = {
  [AssetTypeEnum.enum['characters-bw']]: 'characters/mono',
  [AssetTypeEnum.enum.characters]: 'characters/vibrant',
  [AssetTypeEnum.enum.avatars]: 'avatars',
}

export function getAssetTypePath(assetType: AssetType) {
  return assetTypeDirPathMap[assetType]
}

const assetTypeRandomIdFuncMap = {
  [AssetTypeEnum.enum['characters-bw']]: () => random(1, CHARACTERS_BW_COUNT),
  [AssetTypeEnum.enum.characters]: () => random(1, CHARACTERS_COUNT),
  [AssetTypeEnum.enum.avatars]: () => random(1, AVATARS_COUNT),
}

export function getRandomAssetId(assetType: AssetType) {
  return assetTypeRandomIdFuncMap[assetType]()
}
