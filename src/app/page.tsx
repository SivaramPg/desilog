import Link from 'next/link'

import { LinkImage } from '@/app/components/LinkImage'

import { AVATARS_COUNT } from '@/constants'

import { ExternalIcon } from '@/icons/ExternalIcon'

export default function Home() {
  return (
    <main className="w-full min-h-screen py-20">
      <h2
        id="dynamic"
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4"
      >
        <Link href={'#dynamic'}>
          <span className="font-medium text-black hover:text-blue-600 duration-100 text-3xl sm:text-6xl">
            #
          </span>
          &nbsp;
        </Link>
        `Dynamic` Desi Avatars
      </h2>
      <section className="max-w-screen-sm mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-10 px-4">
        {new Array(AVATARS_COUNT).fill(0).map((_, i) => (
          <LinkImage
            key={i}
            className="shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
            url={`https://desilog.sivaramp.com/i/avatars/${i + 1}/200`}
            index={i}
            customElement={
              <ExternalIcon className="absolute top-[2px] right-[2px] w-3 h-3" />
            }
          />
        ))}
      </section>

      <div className="border-b border-gray-500 my-10" />

      <h2
        id="optimised"
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4"
      >
        <Link href={'#optimised'}>
          <span className="font-medium text-black hover:text-blue-600 duration-100 text-3xl sm:text-6xl">
            #
          </span>
          &nbsp;
        </Link>
        `Optimised` Desi Avatars
      </h2>
      <section className="max-w-screen-lg mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-10 px-4">
        {new Array(AVATARS_COUNT).fill(0).map((_, i) => (
          <LinkImage
            key={i}
            className="rounded-3xl shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
            url={`https://desilog.sivaramp.com/static/avatars/${i + 1}.jpg`}
            index={i}
            customElement={
              <ExternalIcon className="absolute top-3 right-3 w-5 h-5" />
            }
          />
        ))}
      </section>

      <div className="border-b border-gray-500 my-10" />

      <h2
        id="raw"
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4"
      >
        <Link href={'#raw'}>
          <span className="font-medium text-black hover:text-blue-600 duration-100 text-3xl sm:text-6xl">
            #
          </span>
          &nbsp;
        </Link>
        `Raw` Desi Avatars
      </h2>
      <section className="max-w-screen-2xl mx-auto grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4">
        {new Array(AVATARS_COUNT).fill(0).map((_, i) => (
          <LinkImage
            key={i}
            className="rounded shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
            url={`https://desilog.sivaramp.com/raw/avatars/${i + 1}.png`}
            index={i}
            customElement={
              <ExternalIcon className="absolute top-3 right-3 w-5 h-5" />
            }
          />
        ))}
      </section>
    </main>
  )
}
