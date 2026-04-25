import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.SITE_URL ?? "https://hometownwebservicesar.cc";

  const locationPages = Object.keys(locations).map((slug) => ({
    url: `${siteUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    // main pages (add these if you have them)
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // 🔥 location pages
    ...locationPages,
  ];
}