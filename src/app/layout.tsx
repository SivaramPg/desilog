import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'

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
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
