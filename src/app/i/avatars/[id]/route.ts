import path from 'path'
import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

import { AvatarsSchema } from '@/schemas/AvatarSchema'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const searchParamsObj = Object.fromEntries(
      request.nextUrl.searchParams.entries()
    )

    const { id, width } = await AvatarsSchema.parseAsync({
      id: params.id,
      width: searchParamsObj.width,
    })

    const imgBuffer = await sharp(
      path.resolve(`./src/assets/static/avatars/${id}.jpg`)
    )
      .resize(width)
      .jpeg({ quality: 85 })
      .toBuffer()

    return new NextResponse(imgBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Content-Length': imgBuffer.length.toString(),
        'Content-Disposition': `inline; filename="avatar-${id}-${width}x${width}.jpg"`,
        'Cache-Control':
          'public, max-age=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
        'CDN-Cache-Control':
          'public, max-age=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
        'Vercel-CDN-Cache-Control':
          'public, max-age=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
      },
    })
  } catch (error) {
    console.log(error)
    return new NextResponse('invalid params', { status: 400 })
  }
}
