import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const previousContentUpdate = new Date("2026-07-24");
const seoRelease = new Date("2026-09-03");

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
    lastModified: previousContentUpdate,
    changeFrequency: "monthly",
    priority: slug === "hot-springs-ar" ? 0.85 : 0.7,
  }));

  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: seoRelease,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: seoRelease,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: seoRelease,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: seoRelease,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/custom-business-systems`,
      lastModified: seoRelease,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${SITE_URL}/website-redesigns`,
      lastModified: seoRelease,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/website-maintenance`,
      lastModified: seoRelease,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/free-preview`,
      lastModified: previousContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contractor-websites`,
      lastModified: previousContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/vacation-rental-websites`,
      lastModified: previousContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/local-seo-arkansas`,
      lastModified: previousContentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/hot-springs-contractor-websites`,
      lastModified: previousContentUpdate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/hot-springs-vacation-rental-websites`,
      lastModified: previousContentUpdate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: previousContentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [...corePages, ...locationPages];
}
