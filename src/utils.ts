import {
	AVATARS_COUNT,
	CHARACTERS_BW_COUNT,
	CHARACTERS_COUNT,
} from "./constants"
import type { AssetType } from "./schemas/BaseSchemas"

export function CDN_FRIENDLY_HEADERS(
	assetType: string,
	contentLength: string,
	id: number,
	width: number,
) {
	return {
		"Content-Type": "image/jpeg",
		"Content-Length": contentLength,
		"Content-Disposition": `inline; filename="${assetType}-${id}-${width}x${width}.jpg"`,
		"Cache-Control":
			"public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable",
	}
}

const assetTypeDirPathMap: Record<AssetType, string> = {
	avatars: "avatars",
	characters: "characters/vibrant",
	"characters-bw": "characters/mono",
}

export function getAssetTypePath(assetType: AssetType) {
	return assetTypeDirPathMap[assetType]
}

export function random(min: number, max: number) {
	return Math.round((max - min) * Math.random()) + min
}

const assetTypeRandomIdFuncMap: Record<AssetType, () => number> = {
	avatars: () => random(1, AVATARS_COUNT),
	characters: () => random(1, CHARACTERS_COUNT),
	"characters-bw": () => random(1, CHARACTERS_BW_COUNT),
}

export function getRandomAssetId(assetType: AssetType) {
	return assetTypeRandomIdFuncMap[assetType]()
}
