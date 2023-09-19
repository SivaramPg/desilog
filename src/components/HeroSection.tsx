import { twMerge as cn } from 'tailwind-merge'
import Image from 'next/image'

import SpriteIcon, { Icons } from '@/components/SpriteIcon'
import { LinkImage } from './LinkImage'

interface HeroSectionProps {
  className?: string
}

const HeroSection = ({ className }: HeroSectionProps): JSX.Element => {
  return (
    <section className={cn('w-full min-h-[calc(100vh-64px)] px-4', className)}>
      <div className="min-h-[calc(100vh-64px)] w-full max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="flex flex-wrap items-center justify-center text-5xl font-black text-transparent sm:text-6xl md:text-7xl lg:text-8xl gap-4 bg-gradient-to-l from-fuchsia-500 to-pink-500 bg-clip-text">
          Anaek
          <Image
            src="/icons/logo.svg"
            height={50}
            width={400}
            alt="Anaek Desi Log"
            className="w-48 sm:w-72 md:w-96"
          />
        </h1>
        <h2 className="mt-2 mb-2 text-2xl font-bold text-center lg:text-3xl opacity-80 md:mt-4">
          Desi logon ke colourful avatar aur characters <br />
          vibrant aur black & white dono bilkul India ki tarah :)
        </h2>
        <h3 className="mx-5 mt-2 mb-6 text-center opacity-75 max-w-screen-sm text-md sm:text-xl md:text-xl">
          Free CC0 Desi/Indian placeholder APIs for dynamically sized Avatars,
          Colourful as well as Black & White Characters!. All images & assets
          sourced from our beloved{' '}
          <a
            href="https://desilog.in"
            target="_blank"
            className="font-bold underline underline-offset-2"
          >
            desilog.in
          </a>{' '}
          &nbsp;
          <SpriteIcon
            id={Icons['heart']}
            width={20}
            height={20}
            className="inline-block"
          />
        </h3>
        <div className="flex flex-wrap items-center justify-center w-full p-2 max-w-screen-sm gap-4">
          {new Array(5).fill(0).map((_, i) => (
            <div key={i} className="relative w-24 shrink aspect-square">
              <LinkImage
                className="border shadow-xl hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200"
                index={i + 1}
                url={`https://desilog.sivaramp.com/i/avatars/${
                  (i + 1) * 3
                }/128`}
                fetchPriority="high"
                loading="eager"
              />
            </div>
          ))}
          {new Array(5).fill(0).map((_, i) => (
            <div key={i} className="relative w-24 shrink aspect-square">
              <LinkImage
                className="border shadow-xl hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200"
                index={i + 1}
                url={`https://desilog.sivaramp.com/i/characters/${
                  (i + 1) * 3
                }/128`}
                fetchPriority="high"
                loading="eager"
              />
            </div>
          ))}
          {new Array(5).fill(0).map((_, i) => (
            <div key={i} className="relative w-24 shrink aspect-square">
              <LinkImage
                className="border shadow-xl hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200"
                index={i + 1}
                url={`https://desilog.sivaramp.com/i/characters-bw/${
                  (i + 1) * 3
                }/128`}
                fetchPriority="high"
                loading="eager"
              />
            </div>
          ))}
        </div>
        <a
          href="https://www.producthunt.com/posts/anaek-desi-log?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-anaek&#0045;desi&#0045;log"
          target="_blank"
        >
          <Image
            unoptimized
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=413527&theme=light"
            alt="Anaek&#0032;Desi&#0032;Log - Free&#0032;CC0&#0032;placeholder&#0032;images&#0032;&#0038;&#0032;APIs&#0032;but&#0032;in&#0032;an&#0032;Indian&#0032;Context&#0033; | Product Hunt"
            style={{ width: 250, height: 54 }}
            width="250"
            height="54"
          />
        </a>
      </div>
    </section>
  )
}

export default HeroSection
