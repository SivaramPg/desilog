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
    const { assetType, width } = await RandomSchema.parseAsync({
      assetType: params.assetType,
      width: params.width,
    })

    const assetId = getRandomAssetId(assetType)

    return NextResponse.redirect(
      `https://desilog.sivaramp.com/i/${assetType}/${assetId}/${width}`
    )
  } catch (error) {
    console.log(error)
    return new NextResponse('invalid params', { status: 400 })
  }
}
