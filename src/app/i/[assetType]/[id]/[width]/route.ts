import path from 'path'
import fsPromises from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

import { AssetSchema } from '@/schemas/AssetSchema'
import { CDN_FRIENDLY_HEADERS, getAssetTypePath } from '@/utils'
import { AssetType } from '@/schemas/BaseSchemas'
import { MAX_AVATAR_WIDTH, MAX_CHARACTERS_WIDTH } from '@/constants'

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
    const result = await AssetSchema.safeParseAsync({
      assetType: params.assetType,
      assetId: params.id,
      width: params.width,
    })

    if (!result.success) {
      return new NextResponse('invalid params', { status: 400 })
    }

    const { assetType, assetId, width } = result.data

    const staticAssetBuffer = await fsPromises.readFile(
      path.join(
        process.cwd(),
        `src/assets/static/${getAssetTypePath(assetType)}/${assetId}.jpg`
      )
    )

    let imgBuffer: Buffer

    if (
      (width === MAX_AVATAR_WIDTH && assetType === 'avatars') ||
      width === MAX_CHARACTERS_WIDTH
    ) {
      imgBuffer = staticAssetBuffer
    } else {
      imgBuffer = await sharp(staticAssetBuffer)
        .resize(width)
        .jpeg({ quality: 75 })
        .toBuffer()
    }

    return new NextResponse(imgBuffer, {
      headers: CDN_FRIENDLY_HEADERS(
        assetType,
        `${imgBuffer.length}`,
        assetId,
        width
      ),
    })
  } catch (error) {
    console.log(error)
    return new NextResponse('request failed', { status: 500 })
  }
}
