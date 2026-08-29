export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  source: "google" | "facebook" | "other";
  date?: string;
  published: boolean;
};

/**
 * PLACEHOLDER FILE — do not fabricate testimonials.
 *
 * Add real Google reviews here and set `published: true`.
 * The reviews UI hides unpublished entries and will not invent star counts.
 */
export const reviews: Review[] = [
  // Example shape only. Keep published: false until a real review is pasted in.
  // {
  //   author: "Name from Google",
  //   rating: 5,
  //   quote: "Paste the real review text.",
  //   source: "google",
  //   date: "2026-01-01",
  //   published: false,
  // },
];

export function publishedReviews() {
  return reviews.filter((review) => review.published && review.quote.trim());
}
