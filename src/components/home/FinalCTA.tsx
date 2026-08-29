import { CallButton, QuoteButton } from "@/components/conversion/CtaButtons";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
      <p className="pointer-events-none absolute -right-4 top-4 font-display text-[22vw] leading-none text-white/5">
        JUNK.
      </p>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-3xl font-display text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
          Ready to get your space back?
        </h2>
        <p className="mt-5 max-w-xl text-xl text-white/80">
          Get a fast, free junk removal quote today.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <QuoteButton size="xl">Get a Free Quote</QuoteButton>
          <CallButton size="xl" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
