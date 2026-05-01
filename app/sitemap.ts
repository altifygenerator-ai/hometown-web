import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://hometownwebservicesar.cc";

  const locationPages = Object.keys(locations).map((slug) => ({
    url: `${siteUrl}/locations/${slug}`,
    lastModified: "2026-05-01",
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${siteUrl}/`,
      lastModified: "2026-05-01",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: "2026-05-01",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...locationPages,
  ];
}