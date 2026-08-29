import { listedLocations } from "@/data/locations";
import { MapPin } from "lucide-react";
import Link from "next/link";

export function ServiceAreas() {
  const locations = listedLocations();
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
          Junk removal throughout the Central Valley
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Fresno is home base. Surrounding cities are listed so you can check coverage and request a quote with your address.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/junk-removal/${location.slug}`}
              className="rounded-lg border border-line p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <MapPin className="h-5 w-5 text-brand" aria-hidden="true" />
              <h3 className="mt-3 font-display text-2xl uppercase">
                {location.city}, {location.state}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{location.intro}</p>
              {!location.confirmed ? (
                <p className="mt-3 text-xs uppercase tracking-wider text-ink-soft">
                  Confirm address when you quote
                </p>
              ) : (
                <p className="mt-3 text-xs uppercase tracking-wider text-brand">Primary market</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
