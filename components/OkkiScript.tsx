'use client';

import { useEffect } from 'react';

export default function OkkiScript() {
  useEffect(() => {
    // Delay Okki analytics until browser is idle to avoid blocking first paint
    const loadOkki = () => {
      // Initialize okkiConfigs if not exists
      (window as any).okkiConfigs = (window as any).okkiConfigs || [];
      (window as any).okkiAdd = function () {
        (window as any).okkiConfigs.push(arguments);
      };
      (window as any).okkiAdd('analytics', { siteId: '365757-33489', gId: '' });

      // Load analyze.js
      const script = document.createElement('script');
      script.src = '//tfile.xiaoman.cn/okki/analyze.js?id=365757-33489-';
      script.async = true;
      document.body.appendChild(script);
    };

    // Use requestIdleCallback with setTimeout fallback (2s delay)
    if ('requestIdleCallback' in window) {
      const handle = (window as any).requestIdleCallback(loadOkki, { timeout: 3000 });
      return () => (window as any).cancelIdleCallback?.(handle);
    } else {
      const timer = setTimeout(loadOkki, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
