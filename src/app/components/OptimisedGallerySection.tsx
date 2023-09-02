import Link from 'next/link'
import { twMerge as cn } from 'tailwind-merge'

import { LinkImage } from './LinkImage'

import { ExternalIcon } from '@/icons/ExternalIcon'

interface OptimisedGallerySectionProps {
  className?: string
  sectionId: string
  sectionTitle: string
  galleryItemsCount: number
  galleryItemType: 'avatars' | 'characters/vibrant' | 'characters/mono'
}

const OptimisedGallerySection = ({
  className,
  sectionId,
  sectionTitle,
  galleryItemsCount,
  galleryItemType,
}: OptimisedGallerySectionProps): JSX.Element => {
  return (
    <div className={cn(className)}>
      <h2
        id={sectionId}
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4"
      >
        <Link href={`#${sectionId}`}>
          <span className="font-medium text-black hover:text-blue-600 duration-100 text-3xl sm:text-6xl">
            #
          </span>
          &nbsp;
        </Link>
        {sectionTitle}
      </h2>
      <section className="max-w-screen-lg mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-10 px-4">
        {new Array(galleryItemsCount).fill(0).map((_, i) => (
          <LinkImage
            key={i}
            className="rounded-xl shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
            index={i}
            url={`https://desilog.sivaramp.com/static/${galleryItemType}/${
              i + 1
            }.jpg`}
            customElement={
              <ExternalIcon className="absolute top-3 right-3 w-5 h-5" />
            }
          />
        ))}
      </section>
    </div>
  )
}

export default OptimisedGallerySection
