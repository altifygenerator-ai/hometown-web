import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://hometownwebservicesar.cc";

  const locationPages = Object.keys(locations).map((slug) => ({
    url: `${siteUrl}/locations/${slug}`,
    
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${siteUrl}/`,
      
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...locationPages,
  ];
}