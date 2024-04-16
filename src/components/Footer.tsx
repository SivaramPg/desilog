import Image from "next/image"

import SpriteIcon, { Icons } from "./SpriteIcon"

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-around w-full h-48 py-4 border gap-4 bg-slate-200">
			<div className="container flex flex-wrap items-center justify-between h-auto px-4 mx-auto gap-6">
				<div className="">
					<p className="inline-flex items-center gap-1 whitespace-nowrap">
						Made with
						<SpriteIcon id={Icons.heart} width={20} height={20} />
						by
						<a
							href="http://sivaramp.com"
							className="hover:underline underline-offset-4"
						>
							<span className="font-bold">Sivaram P</span>
						</a>
						<span className="hidden ml-2 font-mono font-bold md:block">
							2023
						</span>
					</p>
				</div>
				<div className="flex items-center justify-center gap-8">
					<a href="https://sivaramp.com" target="_blank" rel="noreferrer">
						<div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
							<SpriteIcon id={Icons.website} width={24} height={24} />
						</div>
					</a>

					<a
						href="https://github.com/SivaramPg"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
							<SpriteIcon id={Icons.github} width={24} height={24} />
						</div>
					</a>

					<a
						href="https://sivarampg.medium.com/"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
							<SpriteIcon id={Icons.medium} width={24} height={24} />
						</div>
					</a>

					<a
						href="https://www.linkedin.com/in/sivaram-pandariganthan-b753a2145/"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
							<SpriteIcon id={Icons.linkedin} width={24} height={24} />
						</div>
					</a>

					<a
						href="https://codepen.io/kaizoku_95"
						target="_blank"
						rel="noreferrer"
					>
						<div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
							<SpriteIcon id={Icons.codepen} width={24} height={24} />
						</div>
					</a>
				</div>
			</div>
			<div className="container flex items-center justify-end px-4 mx-auto">
				<p className="flex flex-wrap items-center font-mono font-bold gap-2 sm:gap-4 text-normal whitespace-nowrap">
					Powered by{" "}
					<a href="https://nextjs.org/" target="_blank" rel="noreferrer">
						<Image
							priority
							src="/icons/nextjs.svg"
							alt="Nextjs"
							width={96}
							height={96}
							className="hover:drop-shadow-md"
						/>
					</a>
					on{" "}
					<a href="https://vercel.com" target="_blank" rel="noreferrer">
						<Image
							priority
							src="/icons/vercel.svg"
							alt="Vercel"
							width={25}
							height={25}
							className="hover:drop-shadow-md"
						/>
					</a>
					&{""}
					<a href="https://cloudflare.com" target="_blank" rel="noreferrer">
						<Image
							priority
							src="/icons/cloudflare.svg"
							alt="Cloudflare"
							width={50}
							height={50}
							className="hover:drop-shadow-md"
						/>
					</a>
				</p>
			</div>
		</footer>
	)
}
