import path from 'path'
import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

import { CharactersSchema } from '@/schemas/CharactersSchema'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const searchParamsObj = Object.fromEntries(
      request.nextUrl.searchParams.entries()
    )

    const { id, width } = await CharactersSchema.parseAsync({
      id: params.id,
      width: searchParamsObj.width,
    })

    const imgBuffer = await sharp(
      path.resolve(`./src/assets/static/characters/vibrant/${id}.png`)
    )
      .resize(width)
      .png({ quality: 85 })
      .toBuffer()

    return new NextResponse(imgBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': imgBuffer.length.toString(),
        'Content-Disposition': `inline; filename="character-${id}-${width}x${width}.png"`,
        'Cache-Control':
          'public, max-age=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
        'CDN-Cache-Control':
          'public, max-age=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
        'Vercel-CDN-Cache-Control':
          'public, max-age=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable',
      },
    })
  } catch (error) {
    return new NextResponse('invalid params', { status: 400 })
  }
}
