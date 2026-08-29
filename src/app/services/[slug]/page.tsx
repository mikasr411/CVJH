import { CallButton, QuoteButton } from "@/components/conversion/CtaButtons";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PhotoQuoteCTA } from "@/components/home/PhotoQuoteCTA";
import { ServiceCard } from "@/components/home/ServicesGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServicePageView } from "@/components/analytics/ServicePageView";
import { JsonLd } from "@/components/seo/JsonLd";
import { enabledServices, getService, relatedServices } from "@/data/services";
import { listedLocations } from "@/data/locations";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return enabledServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
  ];
  const related = relatedServices(service.relatedSlugs);
  const areas = listedLocations().slice(0, 6);

  return (
    <>
      <ServicePageView slug={service.slug} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path: `/services/${service.slug}`,
        })}
      />
      {service.faqs.length ? <JsonLd data={faqPageSchema(service.faqs)} /> : null}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs items={crumbs} />
          <p className="font-display text-xs uppercase tracking-[0.22em] text-brand">
            {service.audience === "commercial" ? "Commercial" : service.audience === "residential" ? "Residential" : "Residential + Commercial"}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl">
            {service.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-ink">{service.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <QuoteButton event={service.audience === "commercial" ? "commercial_quote_click" : undefined} />
            <CallButton variant="outline" />
          </div>
        </div>
      </section>
      <section className="bg-paper py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            {service.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <aside className="h-fit rounded-lg bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl uppercase">What this job looks like</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-soft">
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-6">
              <QuoteButton className="w-full">Get a Free Quote</QuoteButton>
            </div>
          </aside>
        </div>
      </section>
      <PhotoQuoteCTA />
      <HowItWorks />
      {service.faqs.length ? <FAQ items={service.faqs} /> : null}
      {related.length ? (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl uppercase">Related services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ServiceCard
                  key={item.slug}
                  slug={item.slug}
                  name={item.name}
                  cardDescription={item.cardDescription}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section className="bg-paper py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl uppercase">We haul this in</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {areas.map((location) => (
              <li key={location.slug}>
                <Link href={`/junk-removal/${location.slug}`} className="text-brand hover:underline">
                  {location.city} junk removal
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
