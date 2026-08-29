import { ServiceCard } from "@/components/home/ServicesGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { enabledServices, specialtyServices } from "@/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal Services in Fresno",
  description:
    "Junk removal, furniture haul-away, garage cleanouts, estate cleanouts, and commercial hauling in Fresno and the Central Valley.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];
  const core = enabledServices().filter((service) => service.category === "core");
  const specialty = specialtyServices();

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
            Junk removal services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Point to the junk. We handle the rest — from a single appliance to a full property cleanout.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {core.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                cardDescription={service.cardDescription}
                icon={service.icon}
              />
            ))}
          </div>
          {specialty.length ? (
            <div className="mt-14">
              <h2 className="font-display text-3xl uppercase">Specialty services</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {specialty.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    slug={service.slug}
                    name={service.name}
                    cardDescription={service.cardDescription}
                    icon={service.icon}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
