import type { Metadata } from "next"
import { metadata as baseMetadata } from "../layout"

import DynamicGallerySection from "@/components/DynamicGallerySection"
import OptimisedGallerySection from "@/components/OptimisedGallerySection"
import RawGallerySection from "@/components/RawGallerySection"

import { CHARACTERS_COUNT } from "@/constants"

export const metadata: Metadata = {
	title: "Characters",
	description:
		"Free CC0 Desi / Indian character images & dynamic size placeholder APIs. Lorem Picsum but for images. Desi logon ke colourful characters bilkul India ki tarah :)",
	openGraph: {
		...baseMetadata.openGraph,
		title: "Characters",
		description:
			"Free CC0 Desi / Indian character images & dynamic size placeholder APIs. Lorem Picsum but for images. Desi logon ke colourful characters bilkul India ki tarah :)",
	},
	twitter: {
		...baseMetadata.twitter,
		title: "Characters",
		description:
			"Free CC0 Desi / Indian character images & dynamic size placeholder APIs. Lorem Picsum but for images. Desi logon ke colourful characters bilkul India ki tarah :)",
	},
}

export default function Home() {
	return (
		<main className="w-full min-h-screen py-20 bg-gradient-to-b from-violet-200 to-pink-200">
			<DynamicGallerySection
				sectionId="dynamic"
				sectionTitle="`Dynamic` Desi Characters"
				galleryItemsCount={CHARACTERS_COUNT}
				galleryItemType="characters"
				galleryImageDimension={386}
			/>

			<div className="my-10 border-b border-gray-500" />

			<OptimisedGallerySection
				sectionId="optimised"
				sectionTitle="`Optimised` Desi Characters"
				galleryItemsCount={CHARACTERS_COUNT}
				galleryItemType="characters/vibrant"
			/>

			<div className="my-10 border-b border-gray-500" />

			<RawGallerySection
				sectionId="raw"
				sectionTitle="`Raw` Desi Characters"
				galleryItemsCount={CHARACTERS_COUNT}
				galleryItemType="characters/vibrant"
			/>
		</main>
	)
}
