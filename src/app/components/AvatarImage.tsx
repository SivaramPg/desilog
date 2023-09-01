'use client'

import clsx from 'clsx'
import Image from 'next/image'

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ccc" offset="20%" />
      <stop stop-color="#ddd" offset="50%" />
      <stop stop-color="#ccc" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ccc" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export function AvatarImage({
  className,
  index,
  url,
}: {
  className?: string
  index: number
  url: string
}) {
  return (
    <div className="w-full aspect-square relative">
      <Image
        unoptimized
        src={url}
        alt={`${index + 1}.jpg`}
        fill
        className={clsx(
          'w-full aspect-square rounded-full',

          className
        )}
        fetchPriority={'high'}
        loading={'lazy'}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
      />
    </div>
  )
}
