/* eslint-disable react/no-unescaped-entities */
import { MAX_AVATAR_WIDTH, MAX_CHARACTERS_WIDTH } from '@/constants'
import { twMerge as cn } from 'tailwind-merge'

interface RandomApiUrlDocsProps {
  className?: string
  docUrl?: string
}

const RandomApiUrlDocs = ({
  className,
  docUrl,
}: RandomApiUrlDocsProps): JSX.Element => {
  return (
    <div className={cn('w-full max-w-screen-md mx-auto', className)}>
      <div className="flex flex-col px-8 py-4 mx-4 gap-4 bg-gray-50 rounded-xl">
        <h4 className="text-xl font-black underline uppercase underline-offset-4">
          Usage:
        </h4>

        <ul>
          <li className="ml-5 list-disc">
            <h5 className="mb-4 font-mono font-bold break-all text-md">
              <span className="font-sans font-black">URL</span>:<br /> {docUrl}
            </h5>
          </li>
          <ul>
            <li className="ml-16 list-disc">
              <h5 className="font-mono font-medium break-all text-md">
                <span className="font-sans font-black">ASSET_TYPE</span>:<br />
                'avatars' | 'characters' | 'characters-bw'
              </h5>
            </li>
            <li className="ml-16 list-disc">
              <h5 className="font-mono font-medium break-words text-md">
                <span className="font-sans font-black">ASSET_WIDTH</span>:<br />{' '}
                Min value 1. Max value ASSET_TYPE == 'avatars' ?{' '}
                {MAX_AVATAR_WIDTH} : {MAX_CHARACTERS_WIDTH}
              </h5>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default RandomApiUrlDocs
