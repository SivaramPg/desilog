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
      <div className="mx-4 bg-gray-50 rounded-xl flex flex-col gap-4 px-6 py-4">
        <h4 className="text-xl font-black uppercase underline underline-offset-4">
          Usage:
        </h4>
        <ul>
          <li className="list-disc ml-5">
            <h5 className="text-md font-bold break-all font-mono mb-4">
              <span className="font-black font-sans">URL</span>:<br /> {docUrl}
            </h5>
          </li>
          <ul>
            <li className="list-disc ml-16">
              <h5 className="text-md font-medium break-all font-mono">
                <span className="font-black font-sans">ASSET_TYPE</span>:<br />
                {assetType}
              </h5>
            </li>
            <li className="list-disc ml-16">
              <h5 className="text-md font-medium break-all font-mono">
                <span className="font-black font-sans">ASSET_ID</span>:<br />
                Integer between 1 & {maxAssetId}
              </h5>
            </li>
            <li className="list-disc ml-16">
              <h5 className="text-md font-medium break-words font-mono">
                <span className="font-black font-sans">ASSET_WIDTH</span>:<br />{' '}
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
