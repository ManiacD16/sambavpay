'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function RouteAnnouncer() {
  const pathname = usePathname();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMessage(`Navigated to ${document.title.replace(' | Sambhav Pay', '')}`);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <p className="sr-only" aria-live="polite" aria-atomic="true">
      {message}
    </p>
  );
}
