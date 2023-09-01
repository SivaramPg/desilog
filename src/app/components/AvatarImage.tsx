'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export function AvatarImage({
  className,
  index,
  url,
}: {
  className?: string
  index: number
  url: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded ? (
        <div
          className={clsx(
            'w-full aspect-square rounded-full bg-slate-300 animate-pulse',
            className
          )}
        />
      ) : null}
      <Image
        unoptimized
        src={url}
        alt={`${index + 1}.jpg`}
        width={100}
        height={100}
        className={clsx(
          'w-full aspect-square bg-slate-300 rounded-full',
          isLoaded ? 'inline-block' : 'hidden',
          className
        )}
        fetchPriority={'auto'}
        onLoadingComplete={() => {
          setIsLoaded(true)
        }}
        loading={'eager'}
      />
    </>
  )
}
