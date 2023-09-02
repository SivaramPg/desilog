import Link from 'next/link'

import HeroSection from '@/components/HeroSection'
import DynamicGallerySection from '../components/DynamicGallerySection'
import SpriteIcon, { Icons } from '@/components/SpriteIcon'

export default function Home() {
  return (
    <main className="w-full min-h-screen pb-20 bg-gradient-to-t from-blue-200 to-cyan-200">
      <HeroSection />
      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="Kuch `Dynamic` Desi Avatars"
        galleryItemsCount={5}
        galleryItemType="avatars"
        galleryImageDimension={200}
      />
      <Link
        href="/avatars"
        className="w-fit font-bold text-lg sm:text-xl flex items-center gap-2 border p-3 bg-white rounded-lg hover:shadow-md mx-auto duration-100"
      >
        <SpriteIcon id={Icons['eye-open']} width={28} height={28} />
        View All Avatars
      </Link>

      <div className="border-b border-gray-500 my-10" />

      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="Kuch `Dynamic` Desi Characters"
        galleryItemsCount={5}
        galleryItemType="characters"
        galleryImageDimension={512}
      />
      <Link
        href="/avatars"
        className="w-fit font-bold text-lg sm:text-xl flex items-center gap-2 border p-3 bg-white rounded-lg hover:shadow-md mx-auto duration-100"
      >
        <SpriteIcon id={Icons['eye-open']} width={28} height={28} />
        View All Characters
      </Link>

      <div className="border-b border-gray-500 my-10" />

      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="Kuch `Dynamic` Desi B/W Characters"
        galleryItemsCount={5}
        galleryItemType="characters-bw"
        galleryImageDimension={512}
      />
      <Link
        href="/avatars"
        className="w-fit font-bold text-lg sm:text-xl flex items-center gap-2 border p-3 bg-white rounded-lg hover:shadow-md mx-auto duration-100"
      >
        <SpriteIcon id={Icons['eye-open']} width={28} height={28} />
        View All B/W Characters
      </Link>
    </main>
  )
}
