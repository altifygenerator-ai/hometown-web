import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const lastModified = new Date("2026-07-24");

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
    url: `${SITE_URL}/locations/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: slug === "hot-springs-ar" ? 0.85 : 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/free-preview`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contractor-websites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/vacation-rental-websites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/local-seo-arkansas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/hot-springs-contractor-websites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/hot-springs-vacation-rental-websites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePages,
    ...locationPages,
  ];
}
