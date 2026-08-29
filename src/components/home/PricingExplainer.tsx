import { QuoteButton } from "@/components/conversion/CtaButtons";

const loads = [
  { id: "min", label: "Minimum Load", fill: 14 },
  { id: "quarter", label: "1/4 Load", fill: 28 },
  { id: "half", label: "1/2 Load", fill: 52 },
  { id: "three", label: "3/4 Load", fill: 76 },
  { id: "full", label: "Full Load", fill: 100 },
];

function Trailer({ fill }: { fill: number }) {
  return (
    <svg viewBox="0 0 220 110" className="w-full" role="img" aria-hidden="true">
      <rect x="8" y="28" width="170" height="52" rx="4" fill="#1a1f24" />
      <rect x="12" y="32" width="162" height="44" fill="#2a323a" />
      <rect
        x="12"
        y={32 + (44 * (100 - fill)) / 100}
        width="162"
        height={(44 * fill) / 100}
        fill="#22c55e"
      />
      <rect x="178" y="42" width="28" height="18" fill="#1a1f24" />
      <circle cx="42" cy="88" r="12" fill="#111418" />
      <circle cx="42" cy="88" r="6" fill="#9aa3ad" />
      <circle cx="148" cy="88" r="12" fill="#111418" />
      <circle cx="148" cy="88" r="6" fill="#9aa3ad" />
    </svg>
  );
}

export function PricingExplainer() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.22em] text-brand">Pricing</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
              Simple, upfront pricing
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Junk removal pricing depends on how much space your items take up, the type of material being removed, labor required, accessibility, and disposal costs.
            </p>
            <p className="mt-6 font-display text-2xl uppercase text-ink">
              You approve the price before we start.
            </p>
            <div className="mt-8">
              <QuoteButton>Get My Quote</QuoteButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {loads.map((load) => (
              <div key={load.id} className="rounded-lg bg-white p-3 shadow-sm">
                <Trailer fill={load.fill} />
                <p className="mt-2 text-center font-display text-xs uppercase tracking-wider">
                  {load.label}
                </p>
                <p className="mt-1 text-center text-[11px] text-ink-soft">Price TBD</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
