import Link from 'next/link'
import { twMerge as cn } from 'tailwind-merge'

import { LinkImage } from './LinkImage'

import { ExternalIcon } from '@/icons/ExternalIcon'

interface DynamicGallerySectionProps {
  className?: string
  sectionId: string
  sectionTitle: string
  galleryItemsCount: number
  galleryItemType: 'avatars' | 'characters' | 'characters-bw'
  galleryImageDimension: number
}

const DynamicGallerySection = ({
  className,
  sectionId,
  sectionTitle,
  galleryItemsCount,
  galleryItemType,
  galleryImageDimension,
}: DynamicGallerySectionProps): JSX.Element => {
  return (
    <div className={cn(className)}>
      <h2
        id={sectionId}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-center drop-shadow-lg mb-4"
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
          ' mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-10 px-4',
          galleryItemType === 'avatars' ? 'max-w-screen-sm' : 'max-w-screen-md'
        )}
      >
        {new Array(galleryItemsCount).fill(0).map((_, i) => (
          <LinkImage
            key={i}
            className={cn(
              'shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200',
              galleryItemType === 'avatars' ? '' : 'rounded-3xl'
            )}
            url={`https://desilog.sivaramp.com/i/${galleryItemType}/${
              i + 1
            }/${galleryImageDimension}`}
            index={i}
            customElement={
              <ExternalIcon
                className={cn(
                  'absolute w-3 h-3',
                  galleryItemType === 'avatars'
                    ? 'top-[2px] right-[2px]'
                    : 'top-3 right-3'
                )}
              />
            }
          />
        ))}
      </section>
    </div>
  )
}

export default DynamicGallerySection
