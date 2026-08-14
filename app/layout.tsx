import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'AYSENT SMART FILM | Smart Film Manufacturer',
  description: 'AYSENT SMART FILM is a professional manufacturer of PDLC smart glass film, switchable privacy film and customized smart glass solutions.',
  keywords: [
    'smart film manufacturer',
    'PDLC smart glass film',
    'switchable privacy film',
    'smart film supplier',
  ],
  openGraph: {
    title: 'AYSENT SMART FILM',
    description: 'Smart privacy glass solutions for global projects',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
