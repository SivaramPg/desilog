'use client'

import clsx from 'clsx'
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
    <div className="w-full max-w-screen-md flex flex-col gap-2 mx-auto px-4">
      {!hideLabel && (
        <h4 className="font-bold text-lg md:text-xl opacity-70">
          Example API Endpoint:
        </h4>
      )}
      <div
        className={clsx(
          'w-full min-h-14 flex rounded-md overflow-hidden',
          className
        )}
      >
        <div className="w-full bg-slate-50 rounded-l-md border border-r-0 pl-4 py-2 font-bold text-md md:text-lg resize-none flex items-center break-all">
          {text.replace('https://', '')}
        </div>
        <a
          href={text}
          target="_blank"
          className={clsx(
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
          className={clsx(
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
