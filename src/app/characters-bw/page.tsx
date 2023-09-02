import { LinkImage } from '@/app/components/LinkImage'

import { CHARACTERS_BW_COUNT } from '@/constants'

import { ExternalIcon } from '@/icons/ExternalIcon'

export default function Home() {
  return (
    <main className="w-full min-h-screen py-20">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4">
        `Dynamic` Desi B/W Characters
      </h2>
      <section className="max-w-screen-md mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-10 px-4">
        {new Array(CHARACTERS_BW_COUNT).fill(0).map((_, i) => (
          <LinkImage
            key={i}
            className="rounded-3xl shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
            url={`https://desilog.sivaramp.com/i/characters-bw/${i + 1}/512`}
            index={i}
            customElement={
              <ExternalIcon className="absolute top-3 right-3 w-3 h-3" />
            }
          />
        ))}
      </section>

      <div className="border-b border-gray-500 my-10" />

      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4">
        `Optimised` Desi B/W Characters
      </h2>
      <section className="max-w-screen-lg mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-10 px-4">
        {new Array(CHARACTERS_BW_COUNT).fill(0).map((_, i) => (
          <LinkImage
            key={i}
            className="rounded-xl shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
            url={`https://desilog.sivaramp.com/static/characters/mono/${
              i + 1
            }.jpg`}
            index={i}
            customElement={
              <ExternalIcon className="absolute top-3 right-3 w-5 h-5" />
            }
          />
        ))}
      </section>

      <div className="border-b border-gray-500 my-10" />

      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4">
        `Raw` Desi B/W Characters
      </h2>
      <section className="max-w-screen-2xl mx-auto grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4">
        {new Array(CHARACTERS_BW_COUNT).fill(0).map((_, i) => (
          <LinkImage
            key={i}
            className="rounded object-contain shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
            url={`https://desilog.sivaramp.com/raw/characters/mono/${
              i + 1
            }.png`}
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
