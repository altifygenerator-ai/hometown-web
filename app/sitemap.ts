import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
const baseUrl = process.env.BASE_URL ?? 'https://hometownwebservicesar.cc'

return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}