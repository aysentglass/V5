'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';

export default function ConditionalAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Expose loader function
    window.loadVercelAnalytics = () => setShouldLoad(true);

    // Check if consent is not required (non-EU visitor)
    const requiresConsent = document.cookie
      .split('; ')
      .find(row => row.startsWith('requires_consent='))
      ?.split('=')[1] === 'true';

    if (!requiresConsent) {
      setShouldLoad(true);
    }
  }, []);

  if (!shouldLoad) return null;
  return <Analytics />;
}
