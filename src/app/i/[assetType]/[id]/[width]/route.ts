import { join } from "node:path"
import { NextResponse } from "next/server"
import sharp from "sharp"

import { AssetSchema } from "@/schemas/AssetSchema"
import { CDN_FRIENDLY_HEADERS, getAssetTypePath } from "@/utils"

type Params = {
	assetType: string
	id: string
	width: string
}

export async function GET(_: Request, { params }: { params: Params }) {
	try {
		const result = AssetSchema.safeParse({
			assetType: params.assetType,
			assetId: params.id,
			width: params.width,
		})

		if (!result.success) {
			return new NextResponse("invalid params", { status: 400 })
		}

		const { assetType, assetId, width } = result.data

		const imgBuffer = await sharp(
			join(
				process.cwd(),
				`src/assets/static/${getAssetTypePath(assetType)}/${assetId}.jpg`,
			),
		)
			.resize(width)
			.jpeg({ quality: 75 })
			.toBuffer()

		return new NextResponse(imgBuffer, {
			headers: CDN_FRIENDLY_HEADERS(
				assetType,
				`${imgBuffer.length}`,
				assetId,
				width,
			),
		})
	} catch (error) {
		return new NextResponse("request failed", { status: 500 })
	}
}
