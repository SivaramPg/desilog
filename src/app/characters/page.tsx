import Link from 'next/link'

import DynamicGallerySection from '../components/DynamicGallerySection'
import { LinkImage } from '@/app/components/LinkImage'

import { CHARACTERS_COUNT } from '@/constants'

import { ExternalIcon } from '@/icons/ExternalIcon'
import OptimisedGallerySection from '../components/OptimisedGallerySection'
import RawGallerySection from '../components/RawGallerySection'

export default function Home() {
  return (
    <main className="w-full min-h-screen py-20">
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
