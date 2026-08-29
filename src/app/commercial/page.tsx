import { QuoteButton } from "@/components/conversion/CtaButtons";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FinalCTA } from "@/components/home/FinalCTA";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Junk Removal Fresno",
  description:
    "Commercial junk removal in Fresno and the Central Valley for property managers, contractors, landlords, offices, and retail. Request a quote.",
  path: "/commercial",
});

export default function CommercialPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Commercial", href: "/commercial" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Commercial Junk Removal",
          description:
            "Junk removal for property managers, contractors, landlords, offices, and retail properties in Fresno and the Central Valley.",
          path: "/commercial",
        })}
      />
      <section className="bg-ink py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs items={crumbs} className="text-white/70 [&_span]:text-white" />
          <p className="font-display text-xs uppercase tracking-[0.22em] text-brand-bright">
            Commercial accounts
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl">
            Commercial junk removal that respects the schedule
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Property managers, realtors, contractors, landlords, offices, retail properties, apartment complexes, and investors do not need a weekend chore. They need volume gone and a unit or jobsite usable again.
          </p>
          <div className="mt-8">
            <QuoteButton event="commercial_quote_click" href="/quote">
              Get a Commercial Quote
            </QuoteButton>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl uppercase">Built for turnover, not Saturday projects</h2>
            <ul className="mt-6 space-y-3 text-lg text-ink-soft">
              <li>Fast turnaround when the unit has to be empty</li>
              <li>Reliable scheduling around access and tenants</li>
              <li>Large-volume removal from interiors and lots</li>
              <li>Property turnover and tenant move-outs</li>
              <li>Construction debris between phases</li>
              <li>Repeat service for portfolios that keep generating junk</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase">Request a commercial quote</h2>
            <p className="mt-2 text-ink-soft">Include the property address, access notes, and photos if you have them.</p>
            <div className="mt-6">
              <Suspense fallback={<div className="h-80 animate-pulse rounded-lg bg-paper" />}>
                <QuoteForm compact />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
