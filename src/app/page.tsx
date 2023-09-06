import Link from 'next/link'

import HeroSection from '@/components/HeroSection'
import DynamicGallerySection from '../components/DynamicGallerySection'
import SpriteIcon, { Icons } from '@/components/SpriteIcon'
import ApiEndpointElement from '@/components/ApiEndpointElement'
import RandomGallerySection from '@/components/RandomGallerySection'
import DynamicApiUrlDocs from '@/components/DynamicApiUrlDocs'

export default function Home() {
  return (
    <main className="w-full min-h-screen pb-20 bg-gradient-to-t from-blue-200 to-cyan-200">
      <HeroSection />

      <div className="border-b border-gray-500 my-10" />

      <RandomGallerySection
        sectionId="random"
        sectionTitle="Kuch `Random Dynamic` Desi Log"
        galleryImageDimension={386}
      />

      <div className="border-b border-gray-500 my-10" />

      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="Kuch `Dynamic` Desi Avatars"
        galleryItemsCount={5}
        galleryItemType="avatars"
        galleryImageDimension={200}
      />
      <ApiEndpointElement
        className="mb-5"
        text={`https://desilog.sivaramp.com/i/avatars/1/256`}
      />
      <DynamicApiUrlDocs
        docUrl="https://<DOMAIN_NAME>/i/<ASSET_TYPE>/<ASSET_ID>/<ASSET_WIDTH>"
        assetType="avatars"
        maxAssetId="39"
        maxAssetWidth="1000"
        className="mb-10"
      />
      <Link
        href="/avatars"
        className="w-fit font-bold text-lg sm:text-xl flex items-center gap-2 border p-3 bg-fuchsia-600 text-white rounded-lg hover:shadow-md mx-auto duration-100 active:scale-95"
      >
        <SpriteIcon
          id={Icons['eye-open']}
          width={28}
          height={28}
          className="invert"
        />
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
      <ApiEndpointElement
        className="mb-5"
        text={`https://desilog.sivaramp.com/i/characters/1/512`}
      />
      <DynamicApiUrlDocs
        docUrl="https://<DOMAIN_NAME>/i/<ASSET_TYPE>/<ASSET_ID>/<ASSET_WIDTH>"
        assetType="characters"
        maxAssetId="72"
        maxAssetWidth="2000"
        className="mb-10"
      />
      <Link
        href="/avatars"
        className="w-fit font-bold text-lg sm:text-xl flex items-center gap-2 border p-3 bg-fuchsia-600 text-white rounded-lg hover:shadow-md mx-auto duration-100 active:scale-95"
      >
        <SpriteIcon
          id={Icons['eye-open']}
          width={28}
          height={28}
          className="invert"
        />
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
      <ApiEndpointElement
        className="mb-5"
        text={`https://desilog.sivaramp.com/i/characters-bw/1/512`}
      />
      <DynamicApiUrlDocs
        docUrl="https://<DOMAIN_NAME>/i/<ASSET_TYPE>/<ASSET_ID>/<ASSET_WIDTH>"
        assetType="characters-bw"
        maxAssetId="70"
        maxAssetWidth="2000"
        className="mb-10"
      />
      <Link
        href="/avatars"
        className="w-fit font-bold text-lg sm:text-xl flex items-center gap-2 border p-3 bg-fuchsia-600 text-white rounded-lg hover:shadow-md mx-auto duration-100 active:scale-95"
      >
        <SpriteIcon
          id={Icons['eye-open']}
          width={28}
          height={28}
          className="invert"
        />
        View All B/W Characters
      </Link>
    </main>
  )
}
