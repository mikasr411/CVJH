import { homeServices } from "@/data/services";
import { serviceIcon } from "@/lib/icons";
import { ArrowRight } from "lucide-react";
import { createElement } from "react";
import Link from "next/link";

export function ServiceCard({
  slug,
  name,
  cardDescription,
  icon,
}: {
  slug: string;
  name: string;
  cardDescription: string;
  icon: Parameters<typeof serviceIcon>[0];
}) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex h-full flex-col rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-soft text-brand">
        {createElement(serviceIcon(icon), { className: "h-5 w-5", "aria-hidden": true })}
      </span>
      <h3 className="mt-4 font-display text-2xl uppercase leading-tight">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{cardDescription}</p>
      <span className="mt-4 inline-flex items-center gap-1 font-display text-xs uppercase tracking-[0.14em] text-brand">
        Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function ServicesGrid() {
  const services = homeServices();
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-brand">Services</p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
          What do you need gone?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          One couch or an entire property. Pick the job that matches, or just send photos and we will help you sort it out.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
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
    </section>
  );
}
