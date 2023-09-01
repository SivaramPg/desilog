import { AvatarImage } from './components/AvatarImage'

import { AVATARS_COUNT } from '@/constants'

export default function Home() {
  return (
    <main className="w-full min-h-screen py-20">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-sm">
        `Dynamic` Desi Avatars
      </h2>
      <section className="max-w-screen-sm mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-10 px-4">
        {new Array(AVATARS_COUNT - 1).fill(0).map((_, i) => (
          <a
            key={i}
            href={`https://desilog.sivaramp.com/i/avatars/${i + 1}/200`}
            target="_blank"
          >
            <AvatarImage
              className="shadow-xl drop-shadow-xl"
              url={`https://desilog.sivaramp.com/i/avatars/${i + 1}/200`}
              index={i}
            />
          </a>
        ))}
      </section>

      <div className="border-b border-gray-500 my-10" />

      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-sm">
        `Optimised` Desi Avatars
      </h2>
      <section className="max-w-screen-lg mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-10 px-4">
        {new Array(AVATARS_COUNT - 1).fill(0).map((_, i) => (
          <a
            key={i}
            href={`https://desilog.sivaramp.com/static/avatars/${i + 1}.jpg`}
            target="_blank"
          >
            <AvatarImage
              className="rounded shadow-xl drop-shadow-xl"
              url={`https://desilog.sivaramp.com/static/avatars/${i + 1}.jpg`}
              index={i}
            />
          </a>
        ))}
      </section>

      <div className="border-b border-gray-500 my-10" />

      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-sm">
        `Raw` Desi Avatars
      </h2>
      <section className="max-w-screen-2xl mx-auto grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4">
        {new Array(AVATARS_COUNT - 1).fill(0).map((_, i) => (
          <a
            key={i}
            href={`https://desilog.sivaramp.com/raw/avatars/${i + 1}.png`}
            target="_blank"
          >
            <AvatarImage
              className="rounded shadow-xl drop-shadow-xl"
              url={`https://desilog.sivaramp.com/raw/avatars/${i + 1}.png`}
              index={i}
            />
          </a>
        ))}
      </section>
    </main>
  )
}
