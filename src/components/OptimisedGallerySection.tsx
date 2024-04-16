"use client"

import Link from "next/link"
import { useState } from "react"
import { twMerge as cn } from "tailwind-merge"

import { LinkImage } from "./LinkImage"

import { ExternalIcon } from "@/icons/ExternalIcon"
import FileExtensionSelection from "./FileExtensionSelection"

interface OptimisedGallerySectionProps {
	className?: string
	sectionId: string
	sectionTitle: string
	galleryItemsCount: number
	galleryItemType: "avatars" | "characters/vibrant" | "characters/mono"
}

const OptimisedGallerySection = ({
	className,
	sectionId,
	sectionTitle,
	galleryItemsCount,
	galleryItemType,
}: OptimisedGallerySectionProps): JSX.Element => {
	const [extension, setExtension] = useState<"jpg" | "png">("jpg")

	return (
		<div className={cn(className)}>
			<h2
				id={sectionId}
				className="px-4 mb-4 text-4xl font-black text-center sm:text-5xl lg:text-6xl drop-shadow-lg"
			>
				<Link href={`#${sectionId}`}>
					<span className="text-3xl font-medium text-black hover:text-blue-600 duration-100 sm:text-6xl">
						#
					</span>
					&nbsp;
				</Link>
				{sectionTitle}
			</h2>

			<FileExtensionSelection
				className="mt-10"
				extension={extension}
				setExtension={setExtension}
			/>

			<section className="px-4 py-10 mx-auto max-w-screen-xl grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
				{new Array(galleryItemsCount).fill(0).map((_, i) => (
					<LinkImage
						key={`${i}.${extension}`}
						className="border rounded hover:border-4 hover:border-fuchsia-500 duration-200"
						index={i}
						url={`https://desilog.sivaramp.com/static/${galleryItemType}/${
							i + 1
						}.${extension}`}
						customElement={
							<ExternalIcon className="absolute w-5 h-5 top-3 right-3" />
						}
					/>
				))}
			</section>
		</div>
	)
}

export default OptimisedGallerySection
