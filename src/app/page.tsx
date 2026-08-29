import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ItemsWeTake } from "@/components/home/ItemsWeTake";
import { PhotoQuoteCTA } from "@/components/home/PhotoQuoteCTA";
import { PricingExplainer } from "@/components/home/PricingExplainer";
import { ResidentialCommercial } from "@/components/home/ResidentialCommercial";
import { Reviews } from "@/components/home/Reviews";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/faqs";
import { site } from "@/data/business";
import { faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: site.defaultTitle,
  description: site.defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqs)} />
      <Hero />
      <TrustBar />
      <BeforeAfterSection />
      <ServicesGrid />
      <ResidentialCommercial />
      <PhotoQuoteCTA />
      <HowItWorks />
      <PricingExplainer />
      <WhyChooseUs />
      <Reviews />
      <ItemsWeTake />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
    </>
  );
}
