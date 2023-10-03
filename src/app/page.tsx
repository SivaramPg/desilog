import Link from 'next/link'

import HeroSection from '@/components/HeroSection'
import DynamicGallerySection from '@/components/DynamicGallerySection'
import SpriteIcon, { Icons } from '@/components/SpriteIcon'
import ApiEndpointElement from '@/components/ApiEndpointElement'
import RandomGallerySection from '@/components/RandomGallerySection'
import DynamicApiUrlDocs from '@/components/DynamicApiUrlDocs'

import { MAX_AVATAR_WIDTH, MAX_CHARACTERS_WIDTH } from '@/constants'

export default function Home() {
  return (
    <main className="w-full min-h-screen pb-20 bg-gradient-to-t from-blue-200 to-cyan-200">
      <HeroSection />

      <div className="my-10 border-b border-gray-500" />

      <RandomGallerySection
        sectionId="random"
        sectionTitle="Kuch `Random Dynamic` Desi Log"
        galleryImageDimension={386}
      />

      <div className="my-10 border-b border-gray-500" />

      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="Kuch `Dynamic` Desi Avatars"
        galleryItemsCount={5}
        galleryItemType="avatars"
        galleryImageDimension={200}
      />
      <ApiEndpointElement
        className="mb-2"
        text={`https://desilog.sivaramp.com/i/avatars/1/256`}
      />
      <DynamicApiUrlDocs
        docUrl="https://<DOMAIN_NAME>/i/<ASSET_TYPE>/<ASSET_ID>/<ASSET_WIDTH>"
        assetType="avatars"
        maxAssetId="39"
        maxAssetWidth={MAX_AVATAR_WIDTH.toString()}
        className="mb-10"
      />
      <Link
        href="/avatars"
        className="flex items-center p-3 mx-auto text-lg font-bold text-white border rounded-lg w-fit sm:text-xl gap-2 bg-fuchsia-600 hover:shadow-md duration-100 active:scale-95"
      >
        <SpriteIcon
          id={Icons['eye-open']}
          width={28}
          height={28}
          className="invert"
        />
        View All Avatars
      </Link>

      <div className="my-10 border-b border-gray-500" />

      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="Kuch `Dynamic` Desi Characters"
        galleryItemsCount={5}
        galleryItemType="characters"
        galleryImageDimension={386}
      />
      <ApiEndpointElement
        className="mb-2"
        text={`https://desilog.sivaramp.com/i/characters/1/386`}
      />
      <DynamicApiUrlDocs
        docUrl="https://<DOMAIN_NAME>/i/<ASSET_TYPE>/<ASSET_ID>/<ASSET_WIDTH>"
        assetType="characters"
        maxAssetId="72"
        maxAssetWidth={MAX_CHARACTERS_WIDTH.toString()}
        className="mb-10"
      />
      <Link
        href="/characters"
        className="flex items-center p-3 mx-auto text-lg font-bold text-white border rounded-lg w-fit sm:text-xl gap-2 bg-fuchsia-600 hover:shadow-md duration-100 active:scale-95"
      >
        <SpriteIcon
          id={Icons['eye-open']}
          width={28}
          height={28}
          className="invert"
        />
        View All Characters
      </Link>

      <div className="my-10 border-b border-gray-500" />

      <DynamicGallerySection
        sectionId="dynamic"
        sectionTitle="Kuch `Dynamic` Desi B/W Characters"
        galleryItemsCount={5}
        galleryItemType="characters-bw"
        galleryImageDimension={386}
      />
      <ApiEndpointElement
        className="mb-2"
        text={`https://desilog.sivaramp.com/i/characters-bw/1/386`}
      />
      <DynamicApiUrlDocs
        docUrl="https://<DOMAIN_NAME>/i/<ASSET_TYPE>/<ASSET_ID>/<ASSET_WIDTH>"
        assetType="characters-bw"
        maxAssetId="70"
        maxAssetWidth={MAX_CHARACTERS_WIDTH.toString()}
        className="mb-10"
      />
      <Link
        href="/characters-bw"
        className="flex items-center p-3 mx-auto text-lg font-bold text-white border rounded-lg w-fit sm:text-xl gap-2 bg-fuchsia-600 hover:shadow-md duration-100 active:scale-95"
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
