import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import FloatingContact from '@/components/FloatingContact';
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
    default: 'AYSENT | PDLC Smart Film Manufacturer & Switchable Glass Supplier',
    template: '%s | AYSENT Smart Film',
  },
  description:
    'AYSENT is a leading PDLC smart film manufacturer and switchable glass supplier in China. Factory-direct pricing, custom sizing, FCC certified. Serving 50+ countries with smart glass solutions for offices, hotels, retail and residential projects.',
  keywords: [
    'PDLC smart film manufacturer',
    'switchable glass supplier',
    'smart film factory',
    'PDLC film wholesale',
    'smart glass',
    'custom smart film',
    'AYSENT glass',
    'self adhesive smart film',
    'switchable privacy glass',
    'PDLC smart glass China',
  ],
  metadataBase: new URL('https://www.aysentsmartfilm.com'),
  openGraph: {
    title: 'AYSENT | PDLC Smart Film Manufacturer & Switchable Glass Supplier',
    description:
      'Premium PDLC smart film factory in China. Custom sizes, FCC certified, global shipping. Get free samples within 3-5 days.',
    type: 'website',
    locale: 'en_US',
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
        {/* Preload LCP hero animation */}
        <link rel="preload" as="image" href="/videos/hero-bg.webp" fetchPriority="high" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://api.qrserver.com" />
        <link rel="dns-prefetch" href="https://formspree.io" />
      </head>
      <body>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
