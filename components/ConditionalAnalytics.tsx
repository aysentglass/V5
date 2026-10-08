'use client';

import { Analytics } from '@vercel/analytics/next';

export default function ConditionalAnalytics() {
  // Vercel Analytics loads by default; CookieConsent controls Okki
  return <Analytics />;
}
