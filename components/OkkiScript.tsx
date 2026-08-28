'use client';

import { useEffect } from 'react';

export default function OkkiScript() {
  useEffect(() => {
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

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
