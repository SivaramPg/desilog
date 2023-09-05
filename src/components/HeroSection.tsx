import clsx from 'clsx'
import Image from 'next/image'

import SpriteIcon, { Icons } from '@/components/SpriteIcon'
import { LinkImage } from './LinkImage'

interface HeroSectionProps {
  className?: string
}

const HeroSection = ({ className }: HeroSectionProps): JSX.Element => {
  return (
    <section
      className={clsx('w-full min-h-[calc(100vh-64px)] px-4', className)}
    >
      <div className="min-h-[calc(100vh-64px)] w-full max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black flex items-center justify-center gap-4 bg-gradient-to-l from-fuchsia-500 to-pink-500 bg-clip-text text-transparent flex-wrap">
          Anaek
          <Image
            src="/icons/logo.svg"
            height={50}
            width={400}
            alt="Anaek Desi Log"
            className="w-48 sm:w-72 md:w-96"
          />
        </h1>
        <h2 className="text-2xl lg:text-3xl opacity-80 font-bold text-center mt-2 md:mt-4 mb-2">
          Desi logon ke colourful avatar aur characters <br />
          vibrant aur black & white dono bilkul India ki tarah :)
        </h2>
        <h3 className="max-w-screen-sm mx-5 text-md sm:text-xl md:text-xl opacity-75 text-center mt-2 mb-6">
          Free dynamic, optimized or raw placeholder images in an Indian
          context!. Lorem Picsum but for images. All images & assets sourced
          from our beloved{' '}
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
        <div className="w-full max-w-screen-sm p-2 flex flex-wrap gap-4 items-center justify-center">
          {new Array(5).fill(0).map((_, i) => (
            <div key={i} className="w-24 shrink aspect-square relative">
              <LinkImage
                className="shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200"
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
            <div key={i} className="w-24 shrink aspect-square relative">
              <LinkImage
                className="shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200"
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
            <div key={i} className="w-24 shrink aspect-square relative">
              <LinkImage
                className="shadow-xl border hover:shadow-2xl hover:border-4 hover:border-fuchsia-500 duration-200"
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
      </div>
    </section>
  )
}

export default HeroSection
