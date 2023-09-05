import { z } from 'zod'
import random from 'lodash.random'

import { AssetTypeEnum } from './schemas/AssetSchema'

export const AVATARS_COUNT = 39
export const CHARACTERS_COUNT = 72
export const CHARACTERS_BW_COUNT = 70

export const CDN_FRIENDLY_HEADERS = (
  assetType: string,
  imgBuffer: Buffer,
  id: number,
  width: number
) => ({
  'Content-Type': 'image/jpeg',
  'Content-Length': imgBuffer.length.toString(),
  'Content-Disposition': `inline; filename="${assetType}-${id}-${width}x${width}.jpg"`,
  'Cache-Control':
    'public, max-age=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
  'CDN-Cache-Control':
    'public, max-age=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
  'Vercel-CDN-Cache-Control':
    'public, max-age=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
})

export const getAssetTypePath = (assetType: z.infer<typeof AssetTypeEnum>) => {
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

export function getRandomAssetId(assetType: z.infer<typeof AssetTypeEnum>) {
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
