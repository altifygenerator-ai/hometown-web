import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
const siteUrl = process.env.SITE_URL ?? 'https://hometownwebservicesar.cc'


  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}