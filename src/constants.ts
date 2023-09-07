import { z } from 'zod'
import random from 'lodash.random'

import { AssetTypeEnum } from './schemas/BaseSchemas'

type AssetType = z.infer<typeof AssetTypeEnum>

export const AVATARS_COUNT = 39
export const CHARACTERS_COUNT = 72
export const CHARACTERS_BW_COUNT = 70

export const MAX_AVATAR_WIDTH = 1_000
export const MAX_CHARACTERS_WIDTH = 2_000

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

export function getAssetTypePath(assetType: AssetType) {
  switch (assetType) {
    case AssetTypeEnum.enum['characters-bw']:
      return 'characters/mono'

    case AssetTypeEnum.enum.characters:
      return 'characters/vibrant'

    case AssetTypeEnum.enum.avatars:
    default:
      return 'avatars'
  }
}

export function getRandomAssetId(assetType: AssetType) {
  switch (assetType) {
    case AssetTypeEnum.enum['characters-bw']:
      return random(1, CHARACTERS_BW_COUNT)

    case AssetTypeEnum.enum.characters:
      return random(1, CHARACTERS_COUNT)

    case AssetTypeEnum.enum.avatars:
    default:
      return random(1, AVATARS_COUNT)
  }
}
