import './globals.css'
import { Inter } from 'next/font/google'
import { defaultMetadata } from '../lib/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = defaultMetadata


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

