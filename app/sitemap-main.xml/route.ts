const siteUrl = "https://hometownwebservicesar.cc";

const lastModified = "2026-05-13";

const urls = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: "1.0",
  },
  {
    path: "/portfolio",
    changeFrequency: "monthly",
    priority: "0.8",
  },
  {
    path: "/services",
    changeFrequency: "monthly",
    priority: "0.85",
  },
  {
    path: "/contractor-websites",
    changeFrequency: "monthly",
    priority: "0.9",
  },
  {
    path: "/local-seo-arkansas",
    changeFrequency: "monthly",
    priority: "0.9",
  },
  {
    path: "/locations/arkadelphia-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/locations/hot-springs-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/locations/glenwood-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/locations/benton-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/locations/bryant-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/locations/little-rock-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/locations/maumelle-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/locations/malvern-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/locations/north-little-rock-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
  {
    path: "/locations/caddo-valley-ar",
    changeFrequency: "monthly",
    priority: "0.7",
  },
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${siteUrl}${url.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}