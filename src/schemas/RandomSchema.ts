import { z } from "zod"

import { MAX_AVATAR_WIDTH } from "@/constants"
import { type AssetType, AssetTypeSchema, BaseWidth } from "./BaseSchemas"

const randomSchemaRefinementMap: Record<AssetType, (width: number) => boolean> =
	{
		avatars: (width: number) => width <= MAX_AVATAR_WIDTH,
		characters: (width?: number) => true,
		"characters-bw": (width?: number) => true,
	}

export const RandomSchema = z
	.object({
		assetType: AssetTypeSchema,
		width: BaseWidth,
	})
	.strict()
	.refine(({ assetType, width }) => {
		return randomSchemaRefinementMap[assetType](width)
	})
