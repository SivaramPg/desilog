'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge as cn } from 'tailwind-merge'
import { useDebouncedCallback } from 'use-debounce'
import { nanoid } from 'nanoid'

import { LinkImage } from './LinkImage'
import ApiEndpointElement from './ApiEndpointElement'
import RandomApiUrlDocs from './RandomApiUrlDocs'

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
  const [id, setId] = useState(() => nanoid(6))

  const debounced = useDebouncedCallback((value: string) => {
    setId(value)
  }, 1000)

  return (
    <div className={cn(className)}>
      <h2
        id={sectionId}
        className="px-4 mb-4 text-4xl font-black text-center sm:text-5xl lg:text-6xl drop-shadow-lg"
      >
        <Link href={`#${sectionId}`}>
          <span className="text-3xl font-medium text-black hover:text-blue-600 duration-100 sm:text-6xl">
            #
          </span>
          &nbsp;
        </Link>
        {sectionTitle}
      </h2>
      <section
        className={cn(
          ' mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 gap-2 py-10 px-4',
          'max-w-screen-lg'
        )}
      >
        <LinkImage
          key={`avatar-${id}`}
          className={cn(
            'rounded shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200'
          )}
          url={`https://desilog.sivaramp.com/r/avatars/${galleryImageDimension}?${id}`}
          index={1}
          customElement={
            <div className="w-fit text-black bg-fuchsia-200 px-4 py-1 rounded absolute bottom-5 right-[50%] translate-x-[50%] flex items-center justify-center gap-1 font-bold shadow-lg whitespace-nowrap">
              View
              <Image
                src={'/icons/randomise.svg'}
                alt="randomise"
                width={16}
                height={16}
                fetchPriority="high"
              />
            </div>
          }
        />
        <LinkImage
          key={`character-${id}`}
          className={cn(
            'rounded shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200'
          )}
          url={`https://desilog.sivaramp.com/r/characters/${galleryImageDimension}?${id}`}
          index={1}
          customElement={
            <div className="w-fit text-black bg-fuchsia-200 px-4 py-1 rounded absolute bottom-5 right-[50%] translate-x-[50%] flex items-center justify-center gap-1 font-bold shadow-lg whitespace-nowrap">
              View
              <Image
                src={'/icons/randomise.svg'}
                alt="randomise"
                width={16}
                height={16}
                fetchPriority="high"
              />
            </div>
          }
        />
        <LinkImage
          key={`character-bw-${id}`}
          className={cn(
            'rounded shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200'
          )}
          url={`https://desilog.sivaramp.com/r/characters-bw/${galleryImageDimension}?${id}`}
          index={1}
          customElement={
            <div className="w-fit text-black bg-fuchsia-200 px-4 py-1 rounded absolute bottom-5 right-[50%] translate-x-[50%] flex items-center justify-center gap-1 font-bold shadow-lg whitespace-nowrap">
              View
              <Image
                src={'/icons/randomise.svg'}
                alt="randomise"
                width={16}
                height={16}
                fetchPriority="high"
              />
            </div>
          }
        />
      </section>
      <button
        className="flex items-center p-3 px-8 mx-auto mb-10 text-lg font-bold text-white border rounded cursor-pointer w-fit sm:text-xl gap-2 bg-fuchsia-600 hover:shadow-md duration-100 active:scale-95"
        onClick={() => debounced(nanoid(6))}
      >
        <Image
          src={'/icons/randomise.svg'}
          alt="randomise"
          width={24}
          height={24}
          className="mr-2 invert"
          fetchPriority="high"
        />
        Play 😀
      </button>

      <ApiEndpointElement
        className="mb-2"
        text={`https://desilog.sivaramp.com/r/avatars/256`}
      />
      <ApiEndpointElement
        className="mb-2"
        text={`https://desilog.sivaramp.com/r/characters/256`}
        hideLabel
      />
      <ApiEndpointElement
        className="mb-2"
        text={`https://desilog.sivaramp.com/r/characters-bw/256`}
        hideLabel
      />
      <RandomApiUrlDocs docUrl="https://desilog.sivaramp.com/r/<ASSET_TYPE>/<ASSET_WIDTH>?<OPTIONAL_RANDOM_STRING>" />
    </div>
  )
}

export default RandomGallerySection
