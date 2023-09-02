// import ApiEndpointElement from '@/components/ApiEndpointElement'
import SpriteIcon, { Icons } from '@/components/SpriteIcon'
import clsx from 'clsx'
import Image from 'next/image'
import ApiEndpointElement from './ApiEndpointElement'

interface HeroSectionProps {
  className?: string
}

const HeroSection = ({ className }: HeroSectionProps): JSX.Element => {
  return (
    <section className={clsx('w-full min-h-[calc(60vh)]', className)}>
      <div className="min-h-[calc(60vh)] w-full max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black inline-flex items-center gap-4 bg-gradient-to-l from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
          Anaek
          <Image
            src="/icons/logo.svg"
            height={100}
            width={400}
            alt="Anaek Desi Log"
            className=""
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
        <div className="w-full max-w-screen-lg px-2">
          <ApiEndpointElement
            className="mb-4"
            hideLabel
            text={`https://desilog.sivaramp.com/i/avatars/1/786`}
          />
          <ApiEndpointElement
            className="mb-4"
            hideLabel
            text={`https://desilog.sivaramp.com/i/characters/1/786`}
          />
          <ApiEndpointElement
            className="mb-4"
            hideLabel
            text={`https://desilog.sivaramp.com/i/characters-bw/1/786`}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
