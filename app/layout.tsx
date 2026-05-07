import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uncounted People — System Card',
  description: 'A safe, private space for plural systems to organise and share their information.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-amaryllis-bg text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
