import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import FloatingContact from '@/components/FloatingContact';
import OkkiScript from '@/components/OkkiScript';
import {
  OrganizationSchema,
  LocalBusinessSchema,
} from '@/components/StructuredData';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#0B1F3A',
};

export const metadata: Metadata = {
  title: {
    default: 'AYSENT | PDLC Smart Film & Switchable Glass Factory',
    template: '%s | AYSENT',
  },
  description:
    'AYSENT: PDLC smart film manufacturer and switchable glass supplier in China. Factory-direct pricing, custom sizes, FCC certified, 50+ countries.',
  metadataBase: new URL('https://www.aysentsmartfilm.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'AYSENT | PDLC Smart Film & Switchable Glass Factory',
    description:
      'Premium PDLC smart film factory in China. Custom sizes, FCC certified, global shipping. Get free samples within 3-5 days.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aysentsmartfilm.com',
    siteName: 'AYSENT Smart Film',
    images: [
      {
        url: '/images/product-film.jpg',
        width: 2048,
        height: 1152,
        alt: 'AYSENT PDLC Smart Film',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AYSENT | PDLC Smart Film & Switchable Glass Factory',
    description: 'Premium PDLC smart film factory in China. FCC certified, global shipping.',
    images: ['/images/product-film.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload LCP hero animation (mobile version for faster FCP/LCP on phones) */}
        <link rel="preload" as="image" href="/videos/hero-bg-mobile.webp" fetchPriority="high" />
        {/* DNS prefetch for third-party services (lighter than preconnect) */}
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="dns-prefetch" href="https://tfile.xiaoman.cn" />
        {/* Bing Webmaster Tools verification */}
        <meta name="msvalidate.01" content="7AC5C9C3D1213DE0706EE11F08535690" />
        {/* Yandex Webmaster verification */}
        <meta name="yandex-verification" content="cff41fd903227f39" />
      </head>
      <body>
        {/* JSON-LD Structured Data - site-wide only (Organization + LocalBusiness) */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        {children}
        <FloatingContact />
        {/* Okki Analytics & Chat - Xiaoman CRM (client-side injection) */}
        <OkkiScript />
      </body>
    </html>
  );
}
