import { Analytics } from "@/components/analytics/Analytics";
import { AttributionCapture } from "@/components/analytics/AttributionCapture";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { business, site } from "@/data/business";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const display = localFont({
  src: [
    { path: "../fonts/oswald-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/oswald-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "../fonts/source-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/source-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.defaultTitle,
    template: `%s | ${business.name}`,
  },
  description: site.defaultDescription,
  applicationName: business.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: business.name,
    title: site.defaultTitle,
    description: site.defaultDescription,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.defaultDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Analytics />
        <AttributionCapture />
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main id="main" className="pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
