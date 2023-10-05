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
    default: 'Anaek Desi Log - Free CC0 Indian Placeholder Images & APIs',
    template: '%s | Anaek Desi Log - Free CC0 Indian Placeholder Images & APIs',
  },
  description:
    'Free CC0 Desi / Indian placeholder image APIs for dynamically sized Avatars, Colourful as well as Black & White Characters!. Optimized & RAW high-quality assets also available via secure & fast CDN network. Lorem Picsum but for images. Desi logon ke colourful avatar aur characters vibrant aur black & white dono bilkul India ki tarah :)',
  metadataBase: new URL('https://desilog.sivaramp.com'),
  alternates: { canonical: 'https://desilog.sivaramp.com' },
  openGraph: {
    title: {
      default: 'Anaek Desi Log - Free CC0 Indian Placeholder Images & APIs',
      template:
        '%s | Anaek Desi Log - Free CC0 Indian Placeholder Images & APIs',
    },
    description:
      'Free CC0 Desi / Indian placeholder image APIs for dynamically sized Avatars, Colourful as well as Black & White Characters!. Optimized & RAW high-quality assets also available via secure & fast CDN network. Lorem Picsum but for images. Desi logon ke colourful avatar aur characters vibrant aur black & white dono bilkul India ki tarah :)',
    siteName: 'Anaek Desi Log - Free CC0 Indian Placeholder Images & APIs',
    url: 'https://desilog.sivaramp.com',
    images: [
      {
        type: 'image/jepg',
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anaek Desi Log - Free CC0 Indian Placeholder Images & APIs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: {
      default: 'Anaek Desi Log - Free CC0 Indian Placeholder Images & APIs',
      template:
        '%s | Anaek Desi Log - Free CC0 Indian Placeholder Images & APIs',
    },
    description:
      'Free CC0 Desi / Indian placeholder image APIs for dynamically sized Avatars, Colourful as well as Black & White Characters!. Optimized & RAW high-quality assets also available via secure & fast CDN network. Lorem Picsum but for images. Desi logon ke colourful avatar aur characters vibrant aur black & white dono bilkul India ki tarah :)',
    card: 'summary_large_image',
    images: [
      {
        type: 'image/jepg',
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anaek Desi Log - Free CC0 Indian Placeholder Images & APIs',
      },
    ],
    creator: '@SivaramPg',
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
