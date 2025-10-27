import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Overlay Pro TT - Advanced Wplace Overlay System',
  description: 'Transform your wplace.live experience with the most advanced overlay system. Achieve pixel-perfect accuracy with intelligent color matching and intuitive controls.',
  keywords: ['wplace', 'overlay', 'userscript', 'violentmonkey', 'tampermonkey', 'wplace.live'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


