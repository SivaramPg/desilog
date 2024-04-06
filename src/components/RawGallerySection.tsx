'use client'

import { useState } from 'react'
import Link from 'next/link'
import { twMerge as cn } from 'tailwind-merge'

import { LinkImage } from './LinkImage'

import { ExternalIcon } from '@/icons/ExternalIcon'
import FileExtensionSelection from './FileExtensionSelection'

interface RawGallerySectionProps {
  className?: string
  sectionId: string
  sectionTitle: string
  galleryItemsCount: number
  galleryItemType: 'avatars' | 'characters/vibrant' | 'characters/mono'
}

const RawGallerySection = ({
  className,
  sectionId,
  sectionTitle,
  galleryItemsCount,
  galleryItemType,
}: RawGallerySectionProps): JSX.Element => {
  const [extension, setExtension] = useState<'jpg' | 'png'>('png')

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

      <FileExtensionSelection
        className="mt-10"
        extension={extension}
        setExtension={setExtension}
      />

      <section className="px-4 py-10 mx-auto max-w-screen-2xl grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {new Array(galleryItemsCount).fill(0).map((_, i) => (
          <LinkImage
            key={i + '.' + extension}
            className="object-contain border rounded hover:border-4 hover:border-fuchsia-500 duration-200"
            url={`https://desilog.sivaramp.com/raw/${galleryItemType}/${
              i + 1
            }.${extension}`}
            index={i}
            customElement={
              <ExternalIcon className="absolute w-5 h-5 top-3 right-3" />
            }
          />
        ))}
      </section>
    </div>
  )
}

export default RawGallerySection
