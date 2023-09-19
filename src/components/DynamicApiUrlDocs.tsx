/* eslint-disable react/no-unescaped-entities */
import { twMerge as cn } from 'tailwind-merge'

interface DynamicApiUrlDocsProps {
  className?: string
  docUrl?: string
  assetType: 'avatars' | 'characters' | 'characters-bw'
  maxAssetId: string
  maxAssetWidth: string
}

const DynamicApiUrlDocs = ({
  className,
  docUrl,
  assetType,
  maxAssetId,
  maxAssetWidth,
}: DynamicApiUrlDocsProps): JSX.Element => {
  return (
    <div className={cn('w-full max-w-screen-md mx-auto', className)}>
      <div className="flex flex-col px-6 py-4 mx-4 bg-gray-50 rounded-xl gap-4">
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
                {assetType}
              </h5>
            </li>
            <li className="ml-16 list-disc">
              <h5 className="font-mono font-medium break-all text-md">
                <span className="font-sans font-black">ASSET_ID</span>:<br />
                Integer between 1 & {maxAssetId}
              </h5>
            </li>
            <li className="ml-16 list-disc">
              <h5 className="font-mono font-medium break-words text-md">
                <span className="font-sans font-black">ASSET_WIDTH</span>:<br />{' '}
                Integer between 1 & {maxAssetWidth}
              </h5>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default DynamicApiUrlDocs
