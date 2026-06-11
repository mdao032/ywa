import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Navbar }       from '@/components/layout/Navbar'
import { Footer }       from '@/components/layout/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import '../globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ywaconsulting.com'
const locales  = ['fr', 'en']

export const metadata: Metadata = {
  title: {
    template: '%s | YWA Consulting',
    default:  'YWA Consulting — Experts en Transformation Numérique',
  },
  description:
    'YWA Consulting accompagne votre entreprise dans sa transformation numérique avec des stratégies claires, des solutions d\'optimisation et un soutien expert.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName:  'YWA Consulting',
    type:      'website',
    locale:    'fr_FR',
    images: [
      {
        url:    `${SITE_URL}/images/og-default.png`,
        width:  1200,
        height: 630,
        alt:    'YWA Consulting',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    site:        '@ywaconsulting',
    creator:     '@ywaconsulting',
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    languages: {
      'fr': `${SITE_URL}/fr`,
      'en': `${SITE_URL}/en`,
    },
  },
  verification: {
    // google: 'your-google-site-verification-code',
  },
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  // Vérifie que la locale est valide
  if (!locales.includes(locale)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Preconnect Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-surface-900 text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <ScrollReveal />
          <Navbar />
          <main className="pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
