import { enabledServices } from "@/data/services";
import { listedLocations } from "@/data/locations";
import { site } from "@/data/business";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/quote",
    "/contact",
    "/about",
    "/reviews",
    "/commercial",
    "/services",
    "/junk-removal",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...enabledServices().map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...listedLocations().map((location) => ({
      url: `${site.url}/junk-removal/${location.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: location.confirmed ? 0.9 : 0.6,
    })),
  ];
}
