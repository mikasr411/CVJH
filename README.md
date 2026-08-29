# Central Valley Junk & Hauling

Production website for a Fresno / Central Valley junk removal company.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · Lucide icons

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables

See `.env.example`.

- `SITE_URL` — canonical site URL (`https://centralvalleyjunk.com` in production; server-only)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4
- `NEXT_PUBLIC_GOOGLE_ADS_ID` — Google Ads
- `NEXT_PUBLIC_GOOGLE_ADS_QUOTE_CONVERSION_LABEL` — quote conversion label
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel
- `QUOTE_WEBHOOK_URL` — quote form delivery (Zapier, Make, Formspree, custom)
- `RESEND_API_KEY` + `QUOTE_NOTIFY_EMAIL` — optional email delivery

In development, quote submissions log to the server if no delivery method is configured. Production returns an error until a webhook or email is connected.

## Business content

Edit `src/data/business.ts` for phone, email, address, hours, Google URLs, and claims. Leave values `null` until they are confirmed. The site hides CTAs and badges that would otherwise invent information.

Services: `src/data/services.ts` (set `enabled: true` on specialty services to publish them).
Locations: `src/data/locations.ts` (`needsOwnerConfirmation` flags cities that still need a coverage check).
Reviews: `src/data/reviews.ts` (do not fabricate quotes).
Restricted items: `src/data/items.ts`.
Photos: `src/data/images.ts` plus files under `public/images/`.
