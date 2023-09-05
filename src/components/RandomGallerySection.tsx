'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge as cn } from 'tailwind-merge'
import { useDebouncedCallback } from 'use-debounce'
import { nanoid } from 'nanoid'

import { LinkImage } from './LinkImage'

import { ExternalIcon } from '@/icons/ExternalIcon'

interface RandomGallerySectionProps {
  className?: string
  sectionId: string
  sectionTitle: string
  galleryImageDimension: number
}

const RandomGallerySection = ({
  className,
  sectionId,
  sectionTitle,
  galleryImageDimension,
}: RandomGallerySectionProps): JSX.Element => {
  const [id, setId] = useState(() => nanoid())

  const debounced = useDebouncedCallback((value: string) => {
    setId(value)
  }, 250)

  console.log(id)

  return (
    <div className={cn(className)}>
      <h2
        id={sectionId}
        className="px-4 text-4xl sm:text-5xl lg:text-6xl font-black text-center drop-shadow-lg mb-4"
      >
        <Link href={`#${sectionId}`}>
          <span className="font-medium text-black hover:text-blue-600 duration-100 text-3xl sm:text-6xl">
            #
          </span>
          &nbsp;
        </Link>
        {sectionTitle}
      </h2>
      <section
        className={cn(
          ' mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 gap-4 py-10 px-4',
          'max-w-screen-lg'
        )}
      >
        <LinkImage
          key={`avatar-${id}`}
          className={cn(
            'rounded-xl shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200'
          )}
          url={`https://desilog.sivaramp.com/r/avatars/${galleryImageDimension}?${id}`}
          index={1}
          customElement={
            <ExternalIcon className={cn('absolute w-6 h-6', 'top-3 right-3')} />
          }
        />
        <LinkImage
          key={`character-${id}`}
          className={cn(
            'rounded-xl shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200'
          )}
          url={`https://desilog.sivaramp.com/r/characters/${galleryImageDimension}?${id}`}
          index={1}
          customElement={
            <ExternalIcon className={cn('absolute w-6 h-6', 'top-3 right-3')} />
          }
        />
        <LinkImage
          key={`character-bw-${id}`}
          className={cn(
            'rounded-xl shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200'
          )}
          url={`https://desilog.sivaramp.com/r/characters-bw/${galleryImageDimension}?${id}`}
          index={1}
          customElement={
            <ExternalIcon className={cn('absolute w-6 h-6', 'top-3 right-3')} />
          }
        />
      </section>
      <button
        className="w-fit font-bold text-lg sm:text-xl flex items-center gap-2 border p-3 px-8 bg-fuchsia-600 text-white rounded-lg hover:shadow-md mx-auto duration-100 active:scale-95"
        onClick={() => debounced(nanoid())}
      >
        <Image
          src={'/icons/randomise.svg'}
          alt="randomise"
          width={24}
          height={24}
          className="mr-2 invert"
          fetchPriority="high"
        />
        Randomise
      </button>
    </div>
  )
}

export default RandomGallerySection
