'use client';

import { useEffect } from 'react';

export default function OkkiScript() {
  useEffect(() => {
    // Expose loader function - called by CookieConsent after consent,
    // or directly for non-EU visitors
    window.loadOkkiAnalytics = () => {
      // Prevent double loading
      if ((window as any).__okkiLoaded) return;
      (window as any).__okkiLoaded = true;

      (window as any).okkiConfigs = (window as any).okkiConfigs || [];
      (window as any).okkiAdd = function () {
        (window as any).okkiConfigs.push(arguments);
      };
      (window as any).okkiAdd('analytics', { siteId: '365757-33489', gId: '' });

      const script = document.createElement('script');
      script.src = '//tfile.xiaoman.cn/okki/analyze.js?id=365757-33489-';
      script.async = true;
      document.body.appendChild(script);
    };
  }, []);

  return null;
}
