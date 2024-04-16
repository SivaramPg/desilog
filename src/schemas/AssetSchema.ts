import { z } from "zod"

import {
	AVATARS_COUNT,
	CHARACTERS_BW_COUNT,
	MAX_AVATAR_WIDTH,
} from "@/constants"
import { type AssetType, AssetTypeSchema } from "./BaseSchemas"
import { BaseAssetId, BaseWidth } from "./BaseSchemas"

const assetSchemaRefinementMap: Record<
	AssetType,
	(assetId: number, width: number) => boolean
> = {
	avatars: (assetId: number, width: number) =>
		assetId <= AVATARS_COUNT && width <= MAX_AVATAR_WIDTH,
	characters: (assetId: number, width: number) => true,
	"characters-bw": (assetId: number, width: number) =>
		assetId <= CHARACTERS_BW_COUNT,
}

export const AssetSchema = z
	.object({
		assetType: AssetTypeSchema,
		assetId: BaseAssetId,
		width: BaseWidth,
	})
	.strict()
	.refine(({ assetType, assetId, width }) => {
		return assetSchemaRefinementMap[assetType](assetId, width)
	})
