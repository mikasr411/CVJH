import { Reviews } from "@/components/home/Reviews";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Reviews",
  description:
    "Customer reviews for Central Valley Junk & Hauling in Fresno and the Central Valley. See what neighbors say, then request a quote.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Reviews", href: "/reviews" },
  ];
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <JsonLd data={breadcrumbSchema(crumbs)} />
        <Breadcrumbs items={crumbs} />
      </div>
      <Reviews />
      <FinalCTA />
    </>
  );
}
