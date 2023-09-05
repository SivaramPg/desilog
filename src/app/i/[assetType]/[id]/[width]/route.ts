import path from 'path'
import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'
import { z } from 'zod'

import { AssetSchema, AssetTypeEnum } from '@/schemas/AssetSchema'

type Params = {
  assetType: string
  id: string
  width: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { assetType, assetId, width } = await AssetSchema.parseAsync({
      assetType: params.assetType,
      assetId: params.id,
      width: params.width,
    })

    const imgBuffer = await sharp(
      path.resolve(
        `./src/assets/static/${getAssetTypePath(assetType)}/${assetId}.jpg`
      )
    )
      .resize(width)
      .jpeg({ quality: 75 })
      .toBuffer()

    return new NextResponse(imgBuffer, {
      headers: CDN_FRIENDLY_HEADERS(assetType, imgBuffer, assetId, width),
    })
  } catch (error) {
    console.log(error)
    return new NextResponse('invalid params', { status: 400 })
  }
}

const getAssetTypePath = (assetType: z.infer<typeof AssetTypeEnum>) => {
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

const CDN_FRIENDLY_HEADERS = (
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
