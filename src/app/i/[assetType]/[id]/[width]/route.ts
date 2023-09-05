import path from 'path'
import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

import { AssetSchema } from '@/schemas/AssetSchema'
import { CDN_FRIENDLY_HEADERS, getAssetTypePath } from '@/constants'

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
