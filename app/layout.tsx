import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { ParticlesBackground } from './components/ParticlesBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Overlay Pro TT - Advanced Wplace Overlay System',
  description: 'Transform your wplace.live experience with the most advanced overlay system. Achieve pixel-perfect accuracy with intelligent color matching and intuitive controls.',
  keywords: ['wplace', 'overlay', 'userscript', 'violentmonkey', 'tampermonkey', 'wplace.live', 'pixel art', 'canvas overlay'],
  authors: [{ name: 'Overlay Pro TT Team' }],
  creator: 'Overlay Pro TT',
  publisher: 'Overlay Pro TT',
  metadataBase: new URL('https://wplace-overlay-pro.vercel.app'),
  openGraph: {
    title: 'Overlay Pro TT - Advanced Wplace Overlay System',
    description: 'Transform your wplace.live experience with the most advanced overlay system.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overlay Pro TT - Advanced Wplace Overlay System',
    description: 'Transform your wplace.live experience with the most advanced overlay system.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <ParticlesBackground />
          {children}
        </Providers>
      </body>
    </html>
  )
}


