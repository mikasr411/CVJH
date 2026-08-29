import { QuoteButton } from "@/components/conversion/CtaButtons";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { images } from "@/data/images";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { FinalCTA } from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Central Valley Junk & Hauling is a local crew serving Fresno and the Central Valley. Show us what needs to go and we handle the hard part.",
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Breadcrumbs items={crumbs} />
            <p className="font-display text-xs uppercase tracking-[0.22em] text-brand">
              Local crew
            </p>
            <h1 className="mt-3 font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
              We show up and do the heavy lifting.
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              We&apos;re a Central Valley crew that believes junk removal should be simple. Show us what needs to go and we&apos;ll handle the hard part.
            </p>
            <p className="mt-4 text-ink-soft">
              No call-center script. No maze of upsells. You tell us what is leaving the property. We quote it. Then we lift, load, haul, and clean up the work area.
            </p>
            <p className="mt-4 text-ink-soft">
              Homes, rentals, offices, and job sites around Fresno all collect the same problem: stuff that is too heavy, too bulky, or too much for one weekend. That is the job.
            </p>
            <div className="mt-8">
              <QuoteButton>Get a Free Quote</QuoteButton>
            </div>
          </div>
          <PhotoPlaceholder
            label="Owner or crew on a job"
            todo={images.crew.todo}
            aspect="photo"
          />
        </div>
      </section>
      <section className="bg-paper py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-4xl uppercase">How we work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-display text-2xl uppercase">You point</h3>
              <p className="mt-2 text-ink-soft">Keepers stay. Everything else gets loaded.</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-display text-2xl uppercase">We haul</h3>
              <p className="mt-2 text-ink-soft">The crew does the lifting. You do not need a dump run.</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-display text-2xl uppercase">Space back</h3>
              <p className="mt-2 text-ink-soft">When the trailer leaves, the room, garage, or lot is yours again.</p>
            </article>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
