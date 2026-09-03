import { MobileFunnel } from "@/components/funnel/MobileFunnel";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Get 10% Off Junk Removal",
  description:
    "Upload a photo of your junk for a quote from Central Valley Junk & Hauling. Text us or request 10% off your hauling job in Fresno and the Central Valley.",
  path: "/go",
});

export default function GoPage() {
  return <MobileFunnel />;
}
