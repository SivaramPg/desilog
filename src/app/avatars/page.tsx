import DynamicGallerySection from '@/components/DynamicGallerySection'
import OptimisedGallerySection from '@/components/OptimisedGallerySection'
import RawGallerySection from '@/components/RawGallerySection'

import { AVATARS_COUNT } from '@/constants'

export default function Home() {
  return (
    <main className="w-full min-h-screen py-20 bg-gradient-to-t from-blue-200 to-cyan-200">
      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="`Dynamic` Desi Avatars"
        galleryItemsCount={AVATARS_COUNT}
        galleryItemType="avatars"
        galleryImageDimension={200}
      />

      <div className="border-b border-gray-500 my-10" />

      <OptimisedGallerySection
        sectionId="optimised"
        sectionTitle="`Optimised` Desi Avatars"
        galleryItemsCount={AVATARS_COUNT}
        galleryItemType="avatars"
      />

      <div className="border-b border-gray-500 my-10" />

      <RawGallerySection
        sectionId="raw"
        sectionTitle="`Raw` Desi Avatars"
        galleryItemsCount={AVATARS_COUNT}
        galleryItemType="avatars"
      />
    </main>
  )
}
