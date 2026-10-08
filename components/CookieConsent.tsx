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

async function logConsent(action: string, category: string) {
  try {
    await fetch('/api/consent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action,
        category,
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

    async function init() {
      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3/dist/cookieconsent.min.css';
      document.head.appendChild(link);

      // Load JS dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3/dist/cookieconsent.umd.js';
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

          onConsent: () => {
            const consent = window.cc?.validConsent?.();
            if (consent?.categories?.includes('analytics')) {
              window.loadOkkiAnalytics?.();
              window.loadVercelAnalytics?.();
              logConsent('accepted', 'analytics');
            } else {
              logConsent('rejected', 'analytics');
            }
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
