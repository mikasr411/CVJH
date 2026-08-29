import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description: `Website terms for ${business.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-5xl uppercase">Terms</h1>
      <p className="mt-4 text-ink-soft">Last updated: August 28, 2026</p>
      <div className="mt-8 space-y-4 text-ink-soft">
        <p>
          This website is operated by {business.name}. Quotes submitted online are requests, not a booked job, until we confirm the work and you approve the price.
        </p>
        <p>
          Photos and descriptions help us estimate. Final pricing depends on the actual load, access, material, and disposal needs.
        </p>
        <p>
          You are responsible for making sure we are authorized to remove the items you point out.
        </p>
        <p>
          See the{" "}
          <Link href="/privacy" className="text-brand underline">
            privacy policy
          </Link>{" "}
          for how form data is handled.
        </p>
      </div>
    </article>
  );
}
