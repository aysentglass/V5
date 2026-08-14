import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'AYSENT SMART FILM | PDLC Smart Film Manufacturer',
  description:
    'AYSENT SMART FILM is a professional manufacturer of PDLC smart glass film, switchable privacy film and customized smart glass solutions for global projects.',
  keywords: [
    'smart film manufacturer',
    'PDLC smart glass film',
    'switchable privacy film',
    'smart film supplier',
    'switchable glass',
    'smart glass',
  ],
  openGraph: {
    title: 'AYSENT SMART FILM | Intelligent Privacy Glass Solutions',
    description:
      'Premium PDLC smart film manufacturer. Transform glass into intelligent privacy. Trusted by 500+ global projects.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
