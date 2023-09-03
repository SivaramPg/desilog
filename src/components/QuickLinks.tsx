'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

import SpriteIcon, { Icons } from './SpriteIcon'

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
      className={clsx(
        'fixed z-50 bottom-[50px] right-[30px] rounded-3xl flex flex-col items-end justify-between gap-4 w-auto mx-auto sm:hidden p-3 flex-grow',
        'bg-gradient-to-t from-cyan-500 to-blue-500',
        'shadow-lg shadow-gray-500',
        className
      )}
    >
      {show && (
        <>
          <Link
            href="/"
            className="flex flex-grow items-center justify-center gap-4"
          >
            <span className="text-white font-bold drop-shadow-md">Home</span>
            <SpriteIcon
              id={Icons.home}
              width={28}
              height={28}
              className="invert drop-shadow-md"
            />
          </Link>
          <Link
            href="/avatars"
            className="flex flex-grow items-center justify-center gap-4"
          >
            <span className="text-white font-bold drop-shadow-md">Avatars</span>
            <SpriteIcon
              id={Icons.people}
              width={28}
              height={28}
              className="invert drop-shadow-md"
            />
          </Link>
          <Link
            href="/characters"
            className="flex flex-grow items-center justify-center gap-4"
          >
            <span className="text-white font-bold drop-shadow-md">
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
            className="flex flex-grow items-center justify-center gap-4"
          >
            <span className="text-white font-bold drop-shadow-md">
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
          id={Icons['eye-close']}
          width={28}
          height={28}
          className="invert drop-shadow-md"
          onClick={() => setShow((prevState) => !prevState)}
        />
      ) : (
        <SpriteIcon
          id={Icons['eye-open']}
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

import React, { useRef, useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: any, cb: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, cb])
}
