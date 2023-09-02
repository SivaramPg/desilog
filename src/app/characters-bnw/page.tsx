import { AvatarImage } from '@/app/components/AvatarImage'

import { CHARACTERS_BW_COUNT } from '@/constants'

export default function Home() {
  return (
    <main className="w-full min-h-screen py-20">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4">
        `Dynamic` Desi B/W Characters
      </h2>
      <section className="max-w-screen-md mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-10 px-4">
        {new Array(CHARACTERS_BW_COUNT).fill(0).map((_, i) => (
          <a
            key={i}
            href={`https://desilog.sivaramp.com/i/characters-bw/${i + 1}/200`}
            target="_blank"
            className="relative"
          >
            <AvatarImage
              className="rounded 3xl shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
              url={`https://desilog.sivaramp.com/i/characters-bw/${i + 1}/200`}
              index={i}
            />
            <ExternalIcon className="absolute top-3 right-3 w-3 h-3" />
          </a>
        ))}
      </section>

      <div className="border-b border-gray-500 my-10" />

      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4">
        `Optimised` Desi B/W Characters
      </h2>
      <section className="max-w-screen-lg mx-auto grid grid-flow-row-dense grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-10 px-4">
        {new Array(CHARACTERS_BW_COUNT).fill(0).map((_, i) => (
          <a
            key={i}
            href={`https://desilog.sivaramp.com/static/characters/mono/${
              i + 1
            }.jpg`}
            target="_blank"
            className="relative"
          >
            <AvatarImage
              className="rounded-xl shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
              url={`https://desilog.sivaramp.com/static/characters/mono/${
                i + 1
              }.jpg`}
              index={i}
            />
            <ExternalIcon className="absolute top-3 right-3 w-5 h-5" />
          </a>
        ))}
      </section>

      <div className="border-b border-gray-500 my-10" />

      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center drop-shadow-lg mb-4">
        `Raw` Desi B/W Characters
      </h2>
      <section className="max-w-screen-2xl mx-auto grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4">
        {new Array(CHARACTERS_BW_COUNT).fill(0).map((_, i) => (
          <a
            key={i}
            href={`https://desilog.sivaramp.com/raw/characters/mono/${
              i + 1
            }.png`}
            target="_blank"
            className="relative"
          >
            <AvatarImage
              className="rounded object-contain shadow-xl border hover:shadow-2xl hover:border-2 duration-200"
              url={`https://desilog.sivaramp.com/raw/characters/mono/${
                i + 1
              }.png`}
              index={i}
            />
            <ExternalIcon className="absolute top-3 right-3 w-5 h-5" />
          </a>
        ))}
      </section>
    </main>
  )
}

const ExternalIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000000"
        d="M432 320h-32a16 16 0 0 0-16 16v112H64V128h144a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16ZM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 0 0 0 34L157.67 377a24 24 0 0 0 34 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24a24 24 0 0 0-24-24Z"
      />
    </svg>
  )
}
