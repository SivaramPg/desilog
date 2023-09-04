import DynamicGallerySection from '@/components/DynamicGallerySection'
import OptimisedGallerySection from '@/components/OptimisedGallerySection'
import RawGallerySection from '@/components/RawGallerySection'

import { CHARACTERS_BW_COUNT } from '@/constants'

export default function Home() {
  return (
    <main className="w-full min-h-screen py-20 bg-gradient-to-t from-indigo-400 to-cyan-400">
      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="`Dynamic` Desi B/W Characters"
        galleryItemsCount={CHARACTERS_BW_COUNT}
        galleryItemType="characters-bw"
        galleryImageDimension={512}
      />

      <div className="border-b border-gray-500 my-10" />

      <OptimisedGallerySection
        sectionId="optimised"
        sectionTitle="`Optimised` Desi B/W Characters"
        galleryItemsCount={CHARACTERS_BW_COUNT}
        galleryItemType="characters/mono"
      />

      <div className="border-b border-gray-500 my-10" />

      <RawGallerySection
        sectionId="raw"
        sectionTitle="`Raw` Desi B/W Characters"
        galleryItemsCount={CHARACTERS_BW_COUNT}
        galleryItemType="characters/mono"
      />
    </main>
  )
}
