"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Cookie consent bar of the source site (Airo's CookieBanner): same text, storage key and
// one-year expiry. The choice is announced with a "cookie-consent-changed" event, so an
// analytics script can wait for consent; window.revokeAnalyticsConsent() shows the bar again.

const CONSENT_KEY = "c2_analytics_consent";
const CONSENT_DAYS = 365;

declare global {
  interface Window {
    revokeAnalyticsConsent?: () => void;
  }
}

function hasValidConsent(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const { timestamp } = JSON.parse(raw) as { analytics: boolean; timestamp: number };
    if ((Date.now() - timestamp) / 86_400_000 <= CONSENT_DAYS) return true;
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {}
  }
  return false;
}

function announce(consented: boolean) {
  window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: { consented } }));
}

const buttonClass =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-3 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the stored choice is only readable after mount
    if (!hasValidConsent()) setOpen(true);
    window.revokeAnalyticsConsent = () => {
      try {
        localStorage.removeItem(CONSENT_KEY);
      } catch {}
      announce(false);
      setOpen(true);
    };
    return () => {
      delete window.revokeAnalyticsConsent;
    };
  }, []);

  function choose(analytics: boolean) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics, timestamp: Date.now() }));
    } catch {}
    announce(analytics);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      role="alertdialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
      aria-describedby="cookie-banner-description"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Cookie Consent</h3>
            <p id="cookie-banner-description" className="text-sm text-gray-600">
              We serve cookies. We use tools, such as cookies, to enable essential services and functionality on our
              site and to collect data on how visitors interact with our site, products and services. By clicking
              Accept, you agree to our use of these tools for advertising, analytics and support.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              className={cn(buttonClass, "bg-secondary text-secondary-foreground hover:bg-secondary/80")}
              onClick={() => choose(false)}
            >
              Decline
            </button>
            {/* the source focuses Accept when the bar opens */}
            <button
              type="button"
              className={cn(buttonClass, "bg-primary text-primary-foreground hover:bg-primary/90")}
              onClick={() => choose(true)}
              autoFocus
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
