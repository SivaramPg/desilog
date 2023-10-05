import { NextResponse } from 'next/server'

import { RandomSchema } from '@/schemas/RandomSchema'
import { getRandomAssetId } from '@/utils'

export const runtime = 'edge'

type Params = {
  assetType: string
  width: string
}

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const result = await RandomSchema.safeParseAsync({
      assetType: params.assetType,
      width: params.width,
    })

    if (!result.success) {
      return new NextResponse('invalid params', { status: 400 })
    }
    const { assetType, width } = result.data

    const assetId = getRandomAssetId(assetType)

    return NextResponse.redirect(
      new URL(`/i/${assetType}/${assetId}/${width}`, request.url)
    )
  } catch (error) {
    return new NextResponse('request failed', { status: 500 })
  }
}
