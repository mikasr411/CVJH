import { QuoteButton } from "@/components/conversion/CtaButtons";
import { business } from "@/data/business";
import { publishedReviews } from "@/data/reviews";
import { hasGoogleReviews } from "@/lib/business";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = publishedReviews();

  return (
    <section className="bg-white py-16 sm:py-20" id="reviews">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
          Your neighbors have a lot to say
        </h2>
        {reviews.length ? (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={`${review.author}-${review.quote.slice(0, 24)}`} className="rounded-lg border border-line p-6 shadow-sm">
                <p className="flex gap-1 text-brand" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </p>
                <p className="mt-4 text-ink">&ldquo;{review.quote}&rdquo;</p>
                <footer className="mt-4 text-sm text-ink-soft">{review.author}</footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="mt-8 max-w-2xl rounded-lg border border-dashed border-line p-6">
            <p className="text-lg text-ink-soft">
              Real customer reviews will show here once they are added from Google. We do not publish made-up testimonials.
            </p>
          </div>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {hasGoogleReviews() ? (
            <a
              href={business.googleReviewUrl!}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 font-display text-sm uppercase tracking-[0.08em] text-white"
            >
              Read Our Google Reviews
            </a>
          ) : null}
          <QuoteButton variant="outline">Get a Free Quote</QuoteButton>
        </div>
      </div>
    </section>
  );
}
