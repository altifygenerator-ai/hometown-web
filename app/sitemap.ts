import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";

export const dynamic = "force-static";

const siteUrl = "https://hometownwebservicesar.cc";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages = Object.keys(locations).map((slug) => ({
    url: `${siteUrl}/locations/${slug}`,
    lastModified: "2026-05-01",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages = [
    {
      url: `${siteUrl}/services`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${siteUrl}/contractor-websites`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/local-seo-arkansas`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  return [
    {
      url: `${siteUrl}/`,
      lastModified: "2026-05-01",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...servicePages,
    ...locationPages,
  ];
}