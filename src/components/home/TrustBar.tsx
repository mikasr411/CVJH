import { hasGoogleReviews } from "@/lib/business";
import { business } from "@/data/business";

const items = [
  "Locally Owned",
  "Upfront Quotes",
  "Fast Scheduling",
  "We Do All the Lifting",
  "Residential + Commercial",
];

export function TrustBar() {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
        {hasGoogleReviews() ? (
          <p className="font-display text-sm uppercase tracking-[0.14em]">
            ★★★★★ {business.googleReviewCount} Google reviews
          </p>
        ) : null}
        {items.map((item) => (
          <p key={item} className="font-display text-sm uppercase tracking-[0.14em]">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
