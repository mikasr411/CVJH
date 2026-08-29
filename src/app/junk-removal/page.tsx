import { listedLocations } from "@/data/locations";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { MapPin } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal Service Areas | Fresno & Central Valley",
  description:
    "Junk removal throughout Fresno and the Central Valley, including Clovis, Sanger, Selma, Kingsburg, Fowler, Reedley, Madera, and Visalia.",
  path: "/junk-removal",
});

export default function ServiceAreasPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/junk-removal" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
            Junk removal throughout the Central Valley
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Local hauling for Fresno and nearby cities. Open a city page for local details, then send the job address with your quote.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {listedLocations().map((location) => (
              <Link
                key={location.slug}
                href={`/junk-removal/${location.slug}`}
                className="rounded-lg border border-line p-5 hover:shadow-md"
              >
                <MapPin className="h-5 w-5 text-brand" aria-hidden="true" />
                <h2 className="mt-3 font-display text-2xl uppercase">
                  {location.city}, {location.state}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">{location.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
