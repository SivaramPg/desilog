/* eslint-disable react/no-unescaped-entities */
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
      <div className="mx-4 flex flex-col gap-4 bg-gray-50 rounded-xl px-8 py-4">
        <h4 className="text-xl font-black uppercase underline underline-offset-4">
          Usage:
        </h4>

        <ul>
          <li className="list-disc ml-5">
            <h5 className="text-lg font-semibold break-all font-mono mb-4">
              <span className="font-black font-sans">URL</span>:<br /> {docUrl}
            </h5>
          </li>
          <ul>
            <li className="list-disc ml-16">
              <h5 className="text-md font-medium break-all font-mono">
                <span className="font-black font-sans">ASSET_TYPE</span>:<br />
                'avatars' | 'characters' | 'characters-bw'
              </h5>
            </li>
            <li className="list-disc ml-16">
              <h5 className="text-md font-medium break-words font-mono">
                <span className="font-black font-sans">ASSET_WIDTH</span>:<br />{' '}
                Min value 1. Max value ASSET_TYPE == 'avatars' ? 1000 : 2000
              </h5>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default RandomApiUrlDocs
