import { business, site } from "@/data/business";
import { listedLocations } from "@/data/locations";
import type { Faq } from "@/data/faqs";
import { hasGoogleReviews, hasPhysicalAddress } from "@/lib/business";

type Breadcrumb = { name: string; path?: string; href?: string };

export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: site.url,
    areaServed: listedLocations().map((location) => ({
      "@type": "City",
      name: `${location.city}, ${location.state}`,
    })),
    priceRange: business.priceRange ?? undefined,
  };

  if (business.phone) schema.telephone = business.phone;
  if (business.email) schema.email = business.email;
  if (hasPhysicalAddress()) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: [business.addressLine1, business.addressLine2]
        .filter(Boolean)
        .join(", "),
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
      addressCountry: "US",
    };
  }
  if (business.googleMapsUrl) schema.hasMap = business.googleMapsUrl;
  if (hasGoogleReviews()) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: business.googleRating,
      reviewCount: business.googleReviewCount,
    };
  }

  const sameAs = Object.values(business.social).filter(Boolean);
  if (sameAs.length) schema.sameAs = sameAs;

  return schema;
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.name,
    description: input.description,
    url: `${site.url}${input.path}`,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phone ?? undefined,
    },
    areaServed: "Fresno and the Central Valley, CA",
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path ?? item.href ?? "/"}`,
    })),
  };
}
