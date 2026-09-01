import { useCallback, useRef, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

const CHECK_INTERVAL_MS = 60 * 60 * 1000;

export type UpdateCheckResult = 'idle' | 'up-to-date' | 'updating' | 'unsupported';

export function usePWAUpdate() {
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);
  const [checking, setChecking] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [result, setResult] = useState<UpdateCheckResult>('idle');

  const { offlineReady: [offlineReady] } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      registrationRef.current = registration ?? null;
      if (registration) {
        window.setInterval(() => {
          registration.update().catch(() => {});
        }, CHECK_INTERVAL_MS);
      }
    },
  });

  const checkForUpdate = useCallback(async () => {
    const registration = registrationRef.current;
    if (!registration) {
      setResult('unsupported');
      return;
    }
    setChecking(true);
    try {
      await registration.update();
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setResult(registration.installing || registration.waiting ? 'updating' : 'up-to-date');
    } catch {
      setResult('unsupported');
    } finally {
      setChecking(false);
      setLastChecked(new Date());
    }
  }, []);

  return { checking, lastChecked, result, checkForUpdate, offlineReady };
}
