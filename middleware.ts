import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { geolocation } from '@vercel/edge';

// EU/EEA/UK country codes that require cookie consent
const EU_COUNTRIES = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'CH', 'NO',
  'IS', 'LI',
]);

export function middleware(request: NextRequest) {
  const country = geolocation(request)?.country || '';
  const requiresConsent = EU_COUNTRIES.has(country.toUpperCase());

  const response = NextResponse.next();

  // Set cookies so client-side JS can read them
  response.cookies.set('requires_consent', requiresConsent ? 'true' : 'false', {
    path: '/',
    maxAge: 86400, // 1 day
    sameSite: 'lax',
  });
  response.cookies.set('visitor_country', country, {
    path: '/',
    maxAge: 86400,
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/|videos/|robots.txt|sitemap.xml|api/).*)',
  ],
};
