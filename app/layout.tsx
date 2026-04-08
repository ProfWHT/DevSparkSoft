import type { Metadata, Viewport } from 'next'
import { Hind_Siliguri } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const hindSiliguri = Hind_Siliguri({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["bengali", "latin"],
  variable: '--font-bengali'
});

export const metadata: Metadata = {
  title: 'প্রফুক নিউজ টেলিভিশন | মোড়েলগঞ্জের তাজা খবর',
  description: 'মোড়েলগঞ্জ ও বাগেরহাটের সত্য খবর, দ্রুত আপডেট। Breaking News, Live Update, Local Report - প্রফুক টিভি',
  keywords: ['প্রফুক টিভি', 'মোড়েলগঞ্জ', 'বাগেরহাট', 'বাংলা খবর', 'Breaking News', 'Local News'],
  authors: [{ name: 'Profuk TV' }],
  openGraph: {
    title: 'প্রফুক নিউজ টেলিভিশন',
    description: 'মোড়েলগঞ্জের তাজা খবর এখন আপনার হাতে',
    url: 'https://profuktv.site',
    siteName: 'Profuk TV',
    locale: 'bn_BD',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#c41e3a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
