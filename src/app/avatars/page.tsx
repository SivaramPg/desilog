import { Metadata } from 'next'

import DynamicGallerySection from '@/components/DynamicGallerySection'
import OptimisedGallerySection from '@/components/OptimisedGallerySection'
import RawGallerySection from '@/components/RawGallerySection'

import { AVATARS_COUNT } from '@/constants'

export const metadata: Metadata = {
  title: 'Avatars',
  openGraph: { title: 'Avatars' },
  twitter: { title: 'Avatars' },
}

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

      <div className="my-10 border-b border-gray-500" />

      <OptimisedGallerySection
        sectionId="optimised"
        sectionTitle="`Optimised` Desi Avatars"
        galleryItemsCount={AVATARS_COUNT}
        galleryItemType="avatars"
      />

      <div className="my-10 border-b border-gray-500" />

      <RawGallerySection
        sectionId="raw"
        sectionTitle="`Raw` Desi Avatars"
        galleryItemsCount={AVATARS_COUNT}
        galleryItemType="avatars"
      />
    </main>
  )
}
