import { QuoteForm } from "@/components/forms/QuoteForm";
import { CallButton } from "@/components/conversion/CtaButtons";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Junk Removal Quote",
  description:
    "Request a free junk removal quote from Central Valley Junk & Hauling. Send photos, describe the job, and we will follow up.",
  path: "/quote",
});

function FormFallback() {
  return <div className="h-96 animate-pulse rounded-lg bg-paper-2" />;
}

export default function QuotePage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Free Quote", href: "/quote" },
  ];
  return (
    <div className="bg-paper py-10 sm:py-14">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
            Get a free quote
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Name, phone, city, and a short description are enough. Photos help us quote faster.
          </p>
          <p className="mt-4 font-display text-2xl uppercase">You point. We haul.</p>
          <div className="mt-6">
            <CallButton variant="outline" />
          </div>
        </div>
        <Suspense fallback={<FormFallback />}>
          <QuoteForm />
        </Suspense>
      </div>
    </div>
  );
}
