import { CallButton, QuoteButton } from "@/components/conversion/CtaButtons";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PhotoQuoteCTA } from "@/components/home/PhotoQuoteCTA";
import { ServiceCard } from "@/components/home/ServicesGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocation, listedLocations, nearbyLocations } from "@/data/locations";
import { getService } from "@/data/services";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return listedLocations().map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/junk-removal/${location.slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/junk-removal" },
    { name: location.city, href: `/junk-removal/${location.slug}` },
  ];
  const popular = location.popularServiceSlugs
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => Boolean(service));
  const nearby = nearbyLocations(location.nearbySlugs);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: `Junk Removal in ${location.city}, ${location.state}`,
          description: location.metaDescription,
          path: `/junk-removal/${location.slug}`,
        })}
      />
      <JsonLd data={faqPageSchema(location.faqs)} />
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs items={crumbs} />
          <p className="font-display text-xs uppercase tracking-[0.22em] text-brand">
            {location.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-5xl uppercase leading-[0.92] sm:text-6xl">
            {location.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-xl">{location.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <QuoteButton>Get a Free Quote</QuoteButton>
            <CallButton variant="outline" />
          </div>
        </div>
      </section>
      <section className="bg-paper py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-4xl uppercase">Junk hauling in {location.city}</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-ink-soft">
            {location.localStory.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          {location.neighborhoods.length ? (
            <div className="mt-8">
              <h3 className="font-display text-xl uppercase">Areas we talk about in {location.city}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {location.neighborhoods.map((name) => (
                  <li key={name} className="rounded-full bg-white px-3 py-1 text-sm">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-4xl uppercase">Popular services in {location.city}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((service) =>
              service ? (
                <ServiceCard
                  key={service.slug}
                  slug={service.slug}
                  name={service.name}
                  cardDescription={service.cardDescription}
                  icon={service.icon}
                />
              ) : null,
            )}
          </div>
        </div>
      </section>
      <section className="grid lg:grid-cols-2">
        <div className="bg-paper-2 px-4 py-14 sm:px-8">
          <h2 className="font-display text-3xl uppercase">{location.residential.headline}</h2>
          <p className="mt-4 text-lg text-ink-soft">{location.residential.copy}</p>
          <ul className="mt-5 list-disc space-y-2 pl-5">
            {location.residential.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="bg-ink px-4 py-14 text-white sm:px-8">
          <h2 className="font-display text-3xl uppercase">{location.commercial.headline}</h2>
          <p className="mt-4 text-lg text-white/75">{location.commercial.copy}</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-white/90">
            {location.commercial.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <PhotoQuoteCTA />
      <HowItWorks />
      <FAQ items={location.faqs} />
      {nearby.length ? (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl uppercase">Nearby service areas</h2>
            <ul className="mt-4 flex flex-wrap gap-4">
              {nearby.map((item) => (
                <li key={item.slug}>
                  <Link href={`/junk-removal/${item.slug}`} className="text-brand hover:underline">
                    {item.city} junk removal
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      <FinalCTA />
    </>
  );
}
