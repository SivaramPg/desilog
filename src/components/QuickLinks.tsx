"use client"

import Link from "next/link"
import { useState } from "react"
import { twMerge as cn } from "tailwind-merge"

import SpriteIcon, { Icons } from "./SpriteIcon"

interface QuickLinksProps {
	className?: string
}

const QuickLinks = ({ className }: QuickLinksProps): JSX.Element => {
	const [show, setShow] = useState(false)

	const wrapperRef = useRef<HTMLDivElement>(null)
	useOutsideAlerter(wrapperRef, () => setShow(false))

	return (
		<div
			ref={wrapperRef}
			className={cn(
				"fixed z-50 bottom-[50px] right-[30px] rounded-3xl flex flex-col items-end justify-between gap-4 w-auto mx-auto sm:hidden p-3 flex-grow",
				"bg-gradient-to-t from-cyan-500 to-blue-500",
				"shadow-lg shadow-gray-500",
				className,
			)}
		>
			{show && (
				<>
					<Link
						href="/"
						className="flex items-center justify-center flex-grow gap-4"
					>
						<span className="font-bold text-white drop-shadow-md">Home</span>
						<SpriteIcon
							id={Icons.home}
							width={28}
							height={28}
							className="invert drop-shadow-md"
						/>
					</Link>
					<Link
						href="/avatars"
						className="flex items-center justify-center flex-grow gap-4"
					>
						<span className="font-bold text-white drop-shadow-md">Avatars</span>
						<SpriteIcon
							id={Icons.people}
							width={28}
							height={28}
							className="invert drop-shadow-md"
						/>
					</Link>
					<Link
						href="/characters"
						className="flex items-center justify-center flex-grow gap-4"
					>
						<span className="font-bold text-white drop-shadow-md">
							Characters
						</span>
						<SpriteIcon
							id={Icons.species}
							width={28}
							height={28}
							className="invert drop-shadow-md"
						/>
					</Link>
					<Link
						href="/characters-bw"
						className="flex items-center justify-center flex-grow gap-4"
					>
						<span className="font-bold text-white drop-shadow-md">
							B/W Characters
						</span>
						<SpriteIcon
							id={Icons.film}
							width={28}
							height={28}
							className="invert drop-shadow-md"
						/>
					</Link>
				</>
			)}
			{show ? (
				<SpriteIcon
					id={Icons["eye-close"]}
					width={28}
					height={28}
					className="invert drop-shadow-md"
					onClick={() => setShow((prevState) => !prevState)}
				/>
			) : (
				<SpriteIcon
					id={Icons["eye-open"]}
					width={28}
					height={28}
					className="invert drop-shadow-md"
					onClick={() => setShow((prevState) => !prevState)}
				/>
			)}
		</div>
	)
}

export default QuickLinks

import type React from "react"
import { useEffect, useRef } from "react"

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(
	ref: React.RefObject<HTMLDivElement>,
	cb: () => void,
) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.currentTarget as Node)) {
				cb()
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [ref, cb])
}
