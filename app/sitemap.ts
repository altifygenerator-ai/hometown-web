import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://hometownwebservicesar.cc";

const lastModified = new Date("2026-05-13");

const locationSlugs = [
  "arkadelphia-ar",
  "hot-springs-ar",
  "glenwood-ar",
  "benton-ar",
  "bryant-ar",
  "little-rock-ar",
  "maumelle-ar",
  "malvern-ar",
  "north-little-rock-ar",
  "caddo-valley-ar",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${siteUrl}/locations/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/contractor-websites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/local-seo-arkansas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePages,
    ...locationPages,
  ];
}