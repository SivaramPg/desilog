import type { Metadata } from "next"
import { metadata as baseMetadata } from "../layout"

import DynamicGallerySection from "@/components/DynamicGallerySection"
import OptimisedGallerySection from "@/components/OptimisedGallerySection"
import RawGallerySection from "@/components/RawGallerySection"

import { AVATARS_COUNT } from "@/constants"

export const metadata: Metadata = {
	title: "Avatars",
	description:
		"Free CC0 Desi / Indian avatar images & dynamic size placeholder APIs. Lorem Picsum but for images. Desi logon ke colourful avatars bilkul India ki tarah :)",
	openGraph: {
		...baseMetadata.openGraph,
		title: "Avatars",
		description:
			"Free CC0 Desi / Indian avatar images & dynamic size placeholder APIs. Lorem Picsum but for images. Desi logon ke colourful avatars bilkul India ki tarah :)",
	},
	twitter: {
		...baseMetadata.twitter,
		title: "Avatars",
		description:
			"Free CC0 Desi / Indian avatar images & dynamic size placeholder APIs. Lorem Picsum but for images. Desi logon ke colourful avatars bilkul India ki tarah :)",
	},
}

export default function Home() {
	return (
		<main className="min-h-screen w-full bg-gradient-to-t from-blue-200 to-cyan-200 py-20">
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
