import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import Image from 'next/image'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import QuickLinks from '@/components/QuickLinks'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Anaek (~Anek, ~Aneeeek) Desi Log - CC0 Placeholders',
    template: '%s | Anaek (~Anek, ~Aneeeek) Desi Log - CC0 Placeholders',
  },
  description:
    'Desi logon ke colourful avatar aur characters vibrant aur black & white dono bilkul India ki tarah :)Free dynamic, optimized or raw placeholder images in an Indian context!. Lorem Picsum but for images. All images & assets sourced from our beloved desilog.in',
  metadataBase: new URL('https://desilog.sivaramp.com'),
  alternates: { canonical: 'https://desilog.sivaramp.com' },
  openGraph: {
    title: {
      default: 'Anaek (~Anek, ~Aneeeek) Desi Log - CC0 Placeholders',
      template: '%s | Anaek (~Anek, ~Aneeeek) Desi Log - CC0 Placeholders',
    },
    description:
      'Desi logon ke colourful avatar aur characters vibrant aur black & white dono bilkul India ki tarah :) Free dynamic, optimized or raw placeholder images & APIs in an Indian context!. Lorem Picsum but for images. All images & assets sourced from our beloved desilog.in',
    siteName: 'Anaek (~Anek, ~Aneeeek) Desi Log - CC0 Placeholders',
    url: 'https://desilog.sivaramp.com',
    images: [
      {
        type: 'image/jepg',
        url: '/opengraph-image.jpg',
        width: 2400,
        height: 1260,
        alt: 'Anaek (~Anek, ~Aneeeek) Desi Log - CC0 Placeholders',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: {
      default: 'Anaek (~Anek, ~Aneeeek) Desi Log - CC0 Placeholders',
      template: '%s | Anaek (~Anek, ~Aneeeek) Desi Log - CC0 Placeholders',
    },
    description:
      'Desi logon ke colourful avatar aur characters vibrant aur black & white dono bilkul India ki tarah :) Free dynamic, optimized or raw placeholder images & APIs in an Indian context!. Lorem Picsum but for images. All images & assets sourced from our beloved desilog.in',
    card: 'summary_large_image',
    images: [
      {
        type: 'image/jepg',
        url: '/opengraph-image.jpg',
        width: 2400,
        height: 1260,
        alt: 'Anaek (~Anek, ~Aneeeek) Desi Log - CC0 Placeholders',
      },
    ],
    creator: '@sivarampg95',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Image
          priority
          src={'/icons/sprite.svg'}
          width={0}
          height={0}
          alt="Prefetch SVG Sprites"
          className="hidden"
        />
        <Navbar />
        {children}
        <QuickLinks />
        <Footer />
      </body>
    </html>
  )
}
