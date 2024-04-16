import Link from "next/link"

import SpriteIcon, { Icons } from "@/components/SpriteIcon"
import Image from "next/image"

export default function Navbar() {
	return (
		<header className="sticky top-0 left-0 right-0 z-50 w-full h-16 font-sans bg-white shadow-md">
			<nav className="container flex items-center justify-between h-full px-4 mx-auto gap-4">
				<Link
					href="/"
					className="inline-flex items-center justify-center gap-2 hover:drop-shadow-md duration-100"
				>
					<div className="text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-l from-fuchsia-500 to-pink-500 bg-clip-text">
						Anek
					</div>
					<Image
						src="/icons/logo.svg"
						height={50}
						width={140}
						alt="Anek Desi Log"
						className=""
					/>
				</Link>
				<div className="items-center justify-center hidden gap-2 md:gap-4 sm:flex">
					<CustomNavLink
						href="/avatars"
						icon={Icons.people}
						linkText="Avatars"
					/>
					<CustomNavLink
						href="/characters"
						icon={Icons.species}
						linkText="Characters"
					/>
					<CustomNavLink
						href="/characters-bw"
						icon={Icons.film}
						linkText="B/W Characters"
					/>
				</div>
			</nav>
		</header>
	)
}

const CustomNavLink = ({
	href,
	icon,
	linkText,
}: {
	href: string
	icon: Icons
	linkText: string
}) => {
	return (
		<Link
			href={href}
			className="px-3 py-1 opacity-80 hover:opacity-100 hover:drop-shadow-md"
		>
			<div className="flex items-center justify-center gap-1">
				<SpriteIcon
					id={icon}
					width={20}
					height={20}
					className="block md:hidden lg:block"
				/>
				<p className="hidden font-bold md:block">{linkText}</p>
			</div>
		</Link>
	)
}
