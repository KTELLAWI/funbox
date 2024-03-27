import type { Metadata } from 'next'
import type { Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Best Birthday Celebration & Birthday Party Places in Sharjah, UAE - احتفال عيد ميلاد في الشارقة - أماكن حفلات أعياد الميلاد في الشارقة',
  description: 'FunBox offers the Best Birthday Celebration & Birthday Party Places for childrens in Sharjah, UAE.',
  metadataBase: new URL('https://funboxuae.ae/'),
  alternates: {
    canonical: 'https://funboxuae.ae/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Best Birthday Celebration & Birthday Party Places in Sharjah, UAE - احتفال عيد ميلاد في الشارقة - أماكن حفلات أعياد الميلاد في الشارقة',
    description: 'FunBox offers the Best Birthday Celebration & Birthday Party Places for childrens in Sharjah, UAE.',
    url: 'https://funboxuae.ae/',
    siteName: 'FunBox',
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "FunBox Banner"
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: "summary_large_image",
    title: 'Best Birthday Celebration & Birthday Party Places in Sharjah, UAE - احتفال عيد ميلاد في الشارقة - أماكن حفلات أعياد الميلاد في الشارقة',
    description:
      "FunBox offers the Best Birthday Celebration & Birthday Party Places for childrens in Sharjah, UAE.",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "Funbox Banner"
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
}

export const viewport: Viewport = {
  themeColor: '#00ACB5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const PagesLayout = ({ children  }: { children: React.ReactNode }) => {
  return (
    <main className="relative overflow-hidden">
      {children}
    </main>
  )
}

export default PagesLayout