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

      <FileExtensionSelection
        className="mt-10"
        extension={extension}
        setExtension={setExtension}
      />

      <section className="max-w-screen-2xl mx-auto grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4">
        {new Array(galleryItemsCount).fill(0).map((_, i) => (
          <LinkImage
            key={i + '.' + extension}
            className="rounded object-contain shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200"
            url={`https://desilog.sivaramp.com/raw/${galleryItemType}/${
              i + 1
            }.${extension}`}
            index={i}
            customElement={
              <ExternalIcon className="absolute top-3 right-3 w-5 h-5" />
            }
          />
        ))}
      </section>
    </div>
  )
}

export default RawGallerySection
