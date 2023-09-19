import { Metadata } from 'next'
import { metadata as baseMetadata } from '../layout'

import DynamicGallerySection from '@/components/DynamicGallerySection'
import OptimisedGallerySection from '@/components/OptimisedGallerySection'
import RawGallerySection from '@/components/RawGallerySection'

import { CHARACTERS_BW_COUNT } from '@/constants'

export const metadata: Metadata = {
  title: 'B/W Characters',
  openGraph: { ...baseMetadata.openGraph, title: 'B/W Characters' },
  twitter: { ...baseMetadata.twitter, title: 'B/W Characters' },
}

export default function Home() {
  return (
    <main className="w-full min-h-screen py-20 bg-gradient-to-t from-indigo-400 to-cyan-400">
      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="`Dynamic` Desi B/W Characters"
        galleryItemsCount={CHARACTERS_BW_COUNT}
        galleryItemType="characters-bw"
        galleryImageDimension={386}
      />

      <div className="my-10 border-b border-gray-500" />

      <OptimisedGallerySection
        sectionId="optimised"
        sectionTitle="`Optimised` Desi B/W Characters"
        galleryItemsCount={CHARACTERS_BW_COUNT}
        galleryItemType="characters/mono"
      />

      <div className="my-10 border-b border-gray-500" />

      <RawGallerySection
        sectionId="raw"
        sectionTitle="`Raw` Desi B/W Characters"
        galleryItemsCount={CHARACTERS_BW_COUNT}
        galleryItemType="characters/mono"
      />
    </main>
  )
}
