export const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

export type Attribution = Record<(typeof ATTRIBUTION_KEYS)[number], string> & {
  landing_page: string;
  referrer: string;
};

const STORAGE_KEY = "cvjh-attribution";

export function emptyAttribution(): Attribution {
  return {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
    fbclid: "",
    landing_page: "",
    referrer: "",
  };
}

export function readAttribution(): Attribution {
  if (typeof window === "undefined") return emptyAttribution();
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyAttribution();
    return { ...emptyAttribution(), ...JSON.parse(raw) };
  } catch {
    return emptyAttribution();
  }
}

export function captureAttribution() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const existing = readAttribution();
  const next = { ...existing };

  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) next[key] = value;
  }

  if (!next.landing_page) next.landing_page = window.location.pathname + window.location.search;
  if (!next.referrer) next.referrer = document.referrer || "";

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}
