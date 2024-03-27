import type { Metadata } from 'next'
import type { Viewport } from 'next'
import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import './globals.css'
import Infobar from '@/components/infobar'
import FloatingWhatsapp from '@/components/floating-whatsapp'
import { ToastProvider } from '@/components/providers/toast-provider'
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Children’s Birthday Party Packages at Best Price in Sharjah, UAE - باقات حفلات أعياد الميلاد في الشارقة - العاب اطفال تفاعلية في الشارقة - العاب تفاعلية في الشارقة - حفلة عيد ميلاد الاطفال في الشارقة - العاب اطفال داخلية في الشارقة',
  description: 'FunBox offers the Best Birthday Party Packages & also provides indoor games for kids, & interactive games for kids in Sharjah, UAE.',
  metadataBase: new URL('https://funboxuae.ae/'),
  alternates: {
    canonical: 'https://funboxuae.ae/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Children’s Birthday Party Packages at Best Price in Sharjah, UAE - باقات حفلات أعياد الميلاد في الشارقة - العاب اطفال تفاعلية في الشارقة - العاب تفاعلية في الشارقة - حفلة عيد ميلاد الاطفال في الشارقة - العاب اطفال داخلية في الشارقة',
    description: 'FunBox offers the Best Birthday Party Packages & also provides indoor games for kids, & interactive games for kids in Sharjah, UAE.',
    url: 'https://funboxuae.ae/',
    siteName: 'FunBox',
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "FunBox Banner"
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Children’s Birthday Party Packages at Best Price in Sharjah, UAE - باقات حفلات أعياد الميلاد في الشارقة - العاب اطفال تفاعلية في الشارقة - العاب تفاعلية في الشارقة - حفلة عيد ميلاد الاطفال في الشارقة - العاب اطفال داخلية في الشارقة",
    description:
      "FunBox offers the Best Birthday Party Packages & also provides indoor games for kids, & interactive games for kids in Sharjah, UAE.",
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
// Can be imported from a shared config
const locales = ['en', 'ar'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
export const viewport: Viewport = {
  themeColor: '#00ACB5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout(
  { params: { locale },
    children,
  }:
    Props) {
      unstable_setRequestLocale(locale);

  let messages;
//const messages = getMessages()
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    //notFound();
  }
  
  // console.log('messagessssssssssssss',messages);
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <Head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </Head>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider
          timeZone="Asia/Dubai"
          locale={locale}
          messages={messages}
        >
          <Infobar locale={locale} />
          <Navbar />
          <main className='relative overflow-hidden'>
            <ToastProvider />
            <FloatingWhatsapp />
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
