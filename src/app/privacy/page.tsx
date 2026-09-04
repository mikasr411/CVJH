import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${business.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-5xl uppercase">Privacy Policy</h1>
      <p className="mt-4 text-ink-soft">Last updated: August 28, 2026</p>
      <div className="mt-8 space-y-4 text-ink-soft">
        <p>
          {business.name} uses this website to take junk-removal quote requests and to tell people how the service works.
        </p>
        <h2 className="font-display text-2xl uppercase text-ink">What we collect</h2>
        <p>
          If you submit the quote form, we collect the information you type in, such as name, phone, email, address, city, job details, photos, and how you heard about us. We also collect advertising attribution values when they are present, including UTM parameters, Google Click ID, Meta Click ID, landing page, and referrer.
        </p>
        <h2 className="font-display text-2xl uppercase text-ink">How we use it</h2>
        <p>
          We use that information to respond to your request, schedule work, and understand which ads or pages led you here. We do not sell your information.
        </p>
        <h2 className="font-display text-2xl uppercase text-ink">Analytics and ads</h2>
        <p>
          If analytics or ad pixels are configured, they may collect device and page-view information according to Google, Meta, and Vercel policies.
        </p>
        <h2 className="font-display text-2xl uppercase text-ink">Contact</h2>
        <p>
          Questions about this policy can be sent through the{" "}
          <Link href="/contact" className="text-brand underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
