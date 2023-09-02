import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import Image from 'next/image'
import Footer from './components/Footer'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anaek Desi Log',
  description: 'Anaek Desi Log',
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
        {children}
        <Footer />
      </body>
    </html>
  )
}
