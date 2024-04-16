import Link from "next/link"
import { twMerge as cn } from "tailwind-merge"

import { LinkImage } from "./LinkImage"

import { ExternalIcon } from "@/icons/ExternalIcon"

interface DynamicGallerySectionProps {
	className?: string
	sectionId: string
	sectionTitle: string
	galleryItemsCount: number
	galleryItemType: "avatars" | "characters" | "characters-bw"
	galleryImageDimension: number
}

const DynamicGallerySection = ({
	className,
	sectionId,
	sectionTitle,
	galleryItemsCount,
	galleryItemType,
	galleryImageDimension,
}: DynamicGallerySectionProps): JSX.Element => {
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
			<section
				className={cn(
					"mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 py-10 px-4",
					"max-w-screen-lg",
				)}
			>
				{new Array(galleryItemsCount).fill(0).map((_, i) => (
					<LinkImage
						key={i}
						className={cn(
							"rounded border hover:border-4 hover:border-fuchsia-500 duration-200",
						)}
						url={`https://desilog.sivaramp.com/i/${galleryItemType}/${
							i + 1
						}/${galleryImageDimension}`}
						index={i}
						customElement={
							<ExternalIcon
								className={cn(
									"absolute w-3 h-3",
									galleryItemType === "avatars"
										? "top-[8px] right-[8px]"
										: "top-3 right-3",
								)}
							/>
						}
					/>
				))}
			</section>
		</div>
	)
}

export default DynamicGallerySection
