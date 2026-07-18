import type { MetadataRoute } from "next";

const siteUrl = "https://www.hometownwebservicesar.com";

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
    changeFrequency: "monthly",
    priority: slug === "hot-springs-ar" ? 0.85 : 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/services`,
    changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/free-preview`,
    changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contractor-websites`,
    changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/vacation-rental-websites`,
    changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/local-seo-arkansas`,
    changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hot-springs-contractor-websites`,
    changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/hot-springs-vacation-rental-websites`,
    changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  return [
    {
      url: `${siteUrl}/`,
    changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/portfolio`,
    changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePages,
    ...locationPages,
  ];
}