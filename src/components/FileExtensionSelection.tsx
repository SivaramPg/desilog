'use client'

import { twMerge as cn } from 'tailwind-merge'

interface FileExtensionSelectionProps {
  className?: string
  extension: 'jpg' | 'png'
  setExtension: (extension: 'jpg' | 'png') => void
}

const FileExtensionSelection = ({
  className,
  extension,
  setExtension,
}: FileExtensionSelectionProps): JSX.Element => {
  return (
    <div
      className={cn('w-full flex items-center justify-center px-2', className)}
    >
      <button
        className={cn(
          'shadow-sm border border-gray-500 px-3 sm:px-4 lg:px-6 py-2 text-sm sm:text-md md:text-lg lg:text-xl font-semibold rounded-l-xl duration-200',
          extension === 'jpg'
            ? 'bg-fuchsia-500 border-fuchsia-500 text-white font-black'
            : 'bg-gray-100'
        )}
        onClick={() => setExtension('jpg')}
      >
        View As JPEGs
      </button>
      <button
        className={cn(
          'shadow-sm border border-gray-500 px-3 sm:px-4 md:px-6 py-2 text-sm sm:text-md md:text-lg lg:text-xl font-semibold rounded-r-xl duration-200',
          extension === 'png'
            ? 'bg-fuchsia-500 border-fuchsia-500 text-white font-black'
            : 'bg-gray-100'
        )}
        onClick={() => setExtension('png')}
      >
        View As PNGs
      </button>
    </div>
  )
}

export default FileExtensionSelection
