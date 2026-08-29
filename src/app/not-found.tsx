import { QuoteButton } from "@/components/conversion/CtaButtons";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="font-display text-xs uppercase tracking-[0.22em] text-brand">404</p>
      <h1 className="mt-3 font-display text-5xl uppercase">That page is gone.</h1>
      <p className="mt-4 text-lg text-ink-soft">
        The junk might still be on your property, though. Request a quote or head back home.
      </p>
      <div className="mt-8 flex gap-3">
        <QuoteButton />
        <QuoteButton href="/" variant="outline">
          Home
        </QuoteButton>
      </div>
    </section>
  );
}
