'use client'

import { twMerge as cn } from 'tailwind-merge'
import { useClipboard } from 'use-clipboard-copy'

import SpriteIcon, { Icons } from './SpriteIcon'

interface ApiEndpointElementProps {
  className?: string
  text: string
  hideLabel?: boolean
}

const ApiEndpointElement = ({
  className,
  text,
  hideLabel = false,
}: ApiEndpointElementProps): JSX.Element => {
  const { copied, copy } = useClipboard({ copiedTimeout: 1_000 })

  return (
    <div className="flex flex-col w-full px-4 mx-auto max-w-screen-md gap-2">
      {!hideLabel && (
        <h4 className="text-lg font-bold md:text-xl opacity-70">
          Example API Endpoint:
        </h4>
      )}
      <div
        className={cn(
          'w-full min-h-14 flex rounded overflow-hidden',
          className
        )}
      >
        <div className="flex items-center w-full py-2 pl-4 font-bold break-all border border-r-0 resize-none bg-slate-50 rounded-l text-md md:text-lg">
          {text.replace('https://', '')}
        </div>
        <a
          href={text}
          target="_blank"
          className={cn(
            'w-20 flex items-center justify-center border border-l-0',
            'bg-slate-50'
          )}
        >
          <SpriteIcon
            id={Icons['tab-external']}
            width={32}
            height={32}
            className="w-6 md:w-8"
          />
        </a>
        <button
          type="button"
          className={cn(
            'w-32 text-white font-bold text-md md:text-lg',
            copied ? 'bg-green-600' : 'bg-blue-500'
          )}
          onClick={() => {
            if (copied) return

            copy(text)
          }}
          disabled={copied}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

export default ApiEndpointElement
