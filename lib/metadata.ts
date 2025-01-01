import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Sultan General Trading',
    template: '%s | Sultan General Trading',
  },
  description: 'Premium Ethiopian exports including coffee, honey, textiles, and livestock. Your trusted partner in international trade.',
  keywords: ['Ethiopian exports', 'coffee', 'honey', 'textiles', 'livestock', 'international trade'],
  authors: [{ name: 'Sultan General Trading' }],
  creator: 'Sultan General Trading',
  publisher: 'Sultan General Trading',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sultangeneraltrading.com',
    siteName: 'Sultan General Trading',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'Sultan General Trading - Premium Ethiopian Exports',
      },
    ],
  },
}

