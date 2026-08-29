import { QuoteButton } from "@/components/conversion/CtaButtons";
import Link from "next/link";

export function ResidentialCommercial() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-paper-2 px-4 py-16 sm:px-8 lg:px-12">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-brand">For homeowners</p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
          Residential junk removal
        </h2>
        <p className="mt-4 max-w-lg text-lg text-ink-soft">
          You show us what needs to go. We do the lifting, loading, hauling and cleanup.
        </p>
        <ul className="mt-6 space-y-2 text-ink">
          <li>Garage getting out of control?</li>
          <li>Replacing old furniture?</li>
          <li>Cleaning out a house?</li>
          <li>Getting ready to move?</li>
          <li>Clearing years of accumulated junk?</li>
        </ul>
        <div className="mt-8">
          <QuoteButton href="/services/junk-removal">Residential Junk Removal</QuoteButton>
        </div>
      </div>
      <div className="bg-ink px-4 py-16 text-white sm:px-8 lg:px-12">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-brand-bright">
          For businesses
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
          Commercial junk removal
        </h2>
        <p className="mt-4 max-w-lg text-lg text-white/75">
          Property managers, realtors, contractors, landlords, and offices need volume gone on a clock. We quote it, load it, and get the space back in play.
        </p>
        <ul className="mt-6 space-y-2 text-white/90">
          <li>Fast turnaround and reliable scheduling</li>
          <li>Large-volume removal and property turnover</li>
          <li>Tenant move-outs and construction debris</li>
          <li>Repeat service and commercial accounts</li>
        </ul>
        <div className="mt-8">
          <QuoteButton href="/commercial" event="commercial_quote_click" variant="primary">
            Commercial Services
          </QuoteButton>
          <p className="mt-4">
            <Link href="/commercial" className="text-sm text-brand-bright hover:underline">
              See commercial junk removal
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
