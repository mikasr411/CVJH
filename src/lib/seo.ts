import { business, site } from "@/data/business";
import type { Metadata } from "next";

type BuildMetaInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized}`;
}

export function buildMetadata({
  title,
  description,
  path,
  noIndex,
}: BuildMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(business.name)
    ? title
    : `${title} | ${business.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: business.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
