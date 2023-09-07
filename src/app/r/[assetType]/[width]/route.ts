import { NextRequest, NextResponse } from 'next/server'

import { RandomSchema } from '@/schemas/RandomSchema'
import { getRandomAssetId } from '@/constants'

type Params = {
  assetType: string
  width: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const result = RandomSchema.safeParse({
      assetType: params.assetType,
      width: params.width,
    })

    if (!result.success) {
      return new NextResponse('invalid params', { status: 400 })
    }

    const { assetType, width } = result.data

    const assetId = getRandomAssetId(assetType)

    return NextResponse.redirect(
      `https://desilog.sivaramp.com/i/${assetType}/${assetId}/${width}`
    )
  } catch (error) {
    return new NextResponse('request failed', { status: 500 })
  }
}
