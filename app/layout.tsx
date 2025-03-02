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
      <meta name="google-site-verification" content="oZP28VzYXPWpCyripdH5Dxm-Jfr5cWTJAHlqIaM77JE" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

