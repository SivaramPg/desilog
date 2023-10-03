'use client'

import { twMerge as cn } from 'tailwind-merge'
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

const placeholder = `data:image/svg+xml;base64,${toBase64(
  shimmer(400, 400)
)}` as `data:image/${string}`

const bgStyle = {
  // https://gist.github.com/dfrankland/f6fed3e3ccc42e3de482b324126f9542
  backgroundImage:
    'linear-gradient(45deg, #eeeeee90 25%, transparent 25%), linear-gradient(135deg, #eeeeee90 25%, transparent 25%),linear-gradient(45deg, transparent 75%, #eeeeee90 75%),linear-gradient(135deg, transparent 75%, #eeeeee90 75%)',
  backgroundSize: '24px 24px' /* Must be a square */,
  backgroundPosition: '0 0, 12px 0, 12px -12px, 0px 12px',
  // background:
  //   'repeating-conic-gradient(#eeeeee90 0% 25%, transparent 0% 50%) 50% / 24px 24px',
}

export function LinkImage({
  className,
  index,
  url,
  customElement,
  fetchPriority,
  loading,
  randomizer,
}: {
  className?: string
  index: number
  url: string
  customElement?: React.ReactNode
  fetchPriority?: 'high' | 'low' | 'auto' | undefined
  loading?: 'lazy' | 'eager' | undefined
  randomizer?: string
}) {
  return (
    <a href={url} target="_blank">
      <div
        className={cn(
          'relative w-full aspect-square rounded-full overflow-hidden',
          className
        )}
        style={bgStyle}
      >
        <Image
          key={randomizer}
          unoptimized
          src={url}
          alt={`${index + 1}`}
          fill
          className="object-contain"
          fetchPriority={fetchPriority}
          loading={loading ?? 'lazy'}
          placeholder={placeholder}
        />
        {customElement}
      </div>
    </a>
  )
}
