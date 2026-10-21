'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    cc?: any;
    CookieConsent?: any;
    cookieconsent?: any;
    loadOkkiAnalytics?: () => void;
    loadVercelAnalytics?: () => void;
  }
}

async function logConsent(action: string, category: string, country: string) {
  try {
    await fetch('/api/consent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action,
        category,
        country,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch {
    // Silent fail
  }
}

export default function CookieConsent() {
  useEffect(() => {
    let cancelled = false;
    let visitorCountry = '';

    async function init() {
      // Geo detection: show banner for ALL countries except China (CN)
      try {
        const res = await fetch('/api/geo');
        const data = await res.json();
        visitorCountry = (data.country || '').toUpperCase();

        if (visitorCountry === 'CN') {
          // China visitor: no banner, load analytics directly
          window.loadOkkiAnalytics?.();
          window.loadVercelAnalytics?.();
          return;
        }
        // All other countries: show cookie consent banner
      } catch {
        // If geo check fails, default to showing banner (safe side)
      }

      // Load CSS from local (CSP blocks CDN)
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/cookieconsent.min.css';
      document.head.appendChild(link);

      // Load JS from local
      const script = document.createElement('script');
      script.src = '/cookieconsent.umd.js';
      script.async = true;
      script.onload = () => {
        if (cancelled) return;
        const CC = window.CookieConsent || window.cookieconsent;
        if (!CC) return;

        CC.run({
          root: 'body',
          autoShow: true,
          hideFromBots: true,

          cookie: {
            name: 'cc_cookie',
            expiresAfterDays: 182,
            domain: location.hostname,
            path: '/',
            sameSite: 'Lax',
          },

          guiOptions: {
            consentModal: {
              layout: 'box',
              position: 'bottom left',
              equalWeightButtons: true,
            },
          },

          categories: {
            necessary: { enabled: true, readOnly: true },
            analytics: {
              autoClear: {
                cookies: [
                  { name: /^_ga/ },
                  { name: /^_gid/ },
                  { name: /^_gat/ },
                  { name: /^okki_/ },
                ],
              },
            },
          },

          // Fires on every page load when a valid consent exists (including restored).
          // Use only to apply the saved choice; do NOT log here.
          onConsent: ({ cookie }: any) => {
            if (cookie?.categories?.includes('analytics')) {
              window.loadOkkiAnalytics?.();
              window.loadVercelAnalytics?.();
            }
          },

          // Fires ONLY the first time the user makes a choice
          onFirstConsent: ({ cookie }: any) => {
            const accepted = cookie?.categories?.includes('analytics');
            if (accepted) {
              window.loadOkkiAnalytics?.();
              window.loadVercelAnalytics?.();
            }
            logConsent(accepted ? 'accepted' : 'rejected', 'analytics', visitorCountry);
          },

          // Fires when the user updates preferences later
          onChange: ({ cookie }: any) => {
            const accepted = cookie?.categories?.includes('analytics');
            if (accepted) {
              window.loadOkkiAnalytics?.();
              window.loadVercelAnalytics?.();
            }
            logConsent(accepted ? 'accepted' : 'rejected', 'analytics', visitorCountry);
          },

          language: {
            default: 'en',
            autoDetect: 'document',
            translations: {
              en: {
                consentModal: {
                  title: 'We value your privacy',
                  description:
                    'We use cookies to enhance your browsing experience and analyze our traffic. You can choose which cookies to accept. Necessary cookies are required for this website to function.',
                  acceptAllBtn: 'Accept all',
                  acceptNecessaryBtn: 'Reject all',
                  showPreferencesBtn: 'Manage preferences',
                  footer:
                    '<a href="/privacy-policy">Privacy Policy</a> · <a href="/cookie-policy">Cookie Policy</a>',
                },
                preferencesModal: {
                  title: 'Cookie preferences',
                  acceptAllBtn: 'Accept all',
                  acceptNecessaryBtn: 'Reject all',
                  savePreferencesBtn: 'Save preferences',
                  closeIconLabel: 'Close',
                  sections: [
                    {
                      title: 'Necessary cookies',
                      description:
                        'These cookies are essential for the website to function properly and cannot be disabled.',
                      linkedCategory: 'necessary',
                    },
                    {
                      title: 'Analytics cookies',
                      description:
                        'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
                      linkedCategory: 'analytics',
                    },
                    {
                      title: 'More information',
                      description:
                        'For any queries in relation to our cookie policy and your choices, please <a href="/#contact">contact us</a>.',
                    },
                  ],
                },
              },
            },
          },
        });
      };
      document.head.appendChild(script);
    }

    init();
    return () => { cancelled = true; };
  }, []);

  return null;
}
