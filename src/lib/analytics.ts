export type AnalyticsEvent =
  | "quote_form_started"
  | "quote_form_submitted"
  | "phone_click"
  | "text_click"
  | "photo_quote_click"
  | "service_page_view"
  | "commercial_quote_click";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: AnalyticsEvent, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, params);

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const quoteLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_QUOTE_CONVERSION_LABEL;
  if (event === "quote_form_submitted" && adsId && quoteLabel) {
    window.gtag?.("event", "conversion", {
      send_to: `${adsId}/${quoteLabel}`,
      ...params,
    });
  }

  const metaMap: Partial<Record<AnalyticsEvent, string>> = {
    quote_form_submitted: "Lead",
    phone_click: "Contact",
    text_click: "Contact",
    photo_quote_click: "Contact",
    commercial_quote_click: "Lead",
  };
  const metaEvent = metaMap[event];
  if (metaEvent) window.fbq?.("track", metaEvent, params);
  window.fbq?.("trackCustom", event, params);
}
