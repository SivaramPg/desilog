import { Metadata } from 'next'

import DynamicGallerySection from '@/components/DynamicGallerySection'
import OptimisedGallerySection from '@/components/OptimisedGallerySection'
import RawGallerySection from '@/components/RawGallerySection'

import { CHARACTERS_COUNT } from '@/constants'

export const metadata: Metadata = {
  title: 'Characters',
}

export default function Home() {
  return (
    <main className="w-full min-h-screen py-20 bg-gradient-to-b from-violet-200 to-pink-200">
      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="`Dynamic` Desi Characters"
        galleryItemsCount={CHARACTERS_COUNT}
        galleryItemType="characters"
        galleryImageDimension={512}
      />

      <div className="border-b border-gray-500 my-10" />

      <OptimisedGallerySection
        sectionId="optimised"
        sectionTitle="`Optimised` Desi Characters"
        galleryItemsCount={CHARACTERS_COUNT}
        galleryItemType="characters/vibrant"
      />

      <div className="border-b border-gray-500 my-10" />

      <RawGallerySection
        sectionId="raw"
        sectionTitle="`Raw` Desi Characters"
        galleryItemsCount={CHARACTERS_COUNT}
        galleryItemType="characters/vibrant"
      />
    </main>
  )
}
