import { QuoteForm } from "@/components/forms/QuoteForm";
import { CallButton } from "@/components/conversion/CtaButtons";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { business } from "@/data/business";
import { formattedPhone, hasEmail, hasPhone, hasPublishedHours, mailtoHref } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { PhoneLink } from "@/components/conversion/CtaButtons";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Central Valley Junk & Hauling for junk removal in Fresno and the Central Valley. Request a quote or send photos of the job.",
  path: "/contact",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="bg-paper py-10 sm:py-14">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display text-5xl uppercase leading-[0.95]">Contact</h1>
          <p className="mt-4 text-lg text-ink-soft">
            The fastest way to get moving is a quote request with photos. Or call or text {formattedPhone()}.
          </p>
          <ul className="mt-6 space-y-2 text-ink">
            {hasPhone() ? (
              <li>
                Phone: <PhoneLink className="text-brand">{formattedPhone()}</PhoneLink>
              </li>
            ) : null}
            {hasEmail() ? (
              <li>
                Email:{" "}
                <a className="text-brand" href={mailtoHref()!}>
                  {business.email}
                </a>
              </li>
            ) : null}
            {hasPublishedHours()
              ? business.hours!.map((row) => (
                  <li key={row.days}>
                    {row.days}: {row.hours}
                  </li>
                ))
              : null}
          </ul>
          <div className="mt-6">
            <CallButton />
          </div>
        </div>
        <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-paper-2" />}>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  );
}
