import path from 'path'

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import sharp from 'sharp'

import { CHARACTERS_COUNT } from '@/constants'

const CharactersSchema = z
  .object({
    id: z.coerce.number().int().positive().max(CHARACTERS_COUNT),
    width: z.coerce.number().int().positive().max(2000),
  })
  .strict()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const searchParamsObj = Object.fromEntries(
      request.nextUrl.searchParams.entries()
    )

    const { id, width } = await CharactersSchema.parseAsync({
      ...params,
      ...searchParamsObj,
    })

    const imgBuffer = await sharp(path.resolve(`./public/characters/${id}.png`))
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
