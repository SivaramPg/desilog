import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '@/components/Navbar'
import QuickLinks from '@/components/QuickLinks'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anaek Desi Log',
  description:
    'Desi logon ke colourful avatar aur characters vibrant aur black & white dono bilkul India ki tarah :)Free dynamic, optimized or raw placeholder images in an Indian context!. Lorem Picsum but for images. All images & assets sourced from our beloved desilog.in',
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
