#!/usr/bin/env node

const siteUrl = "https://www.hometownwebservicesar.com";
const key = "c6b4e3d5f8a24a1b9e73d2c850fb4a61";
const keyLocation = `${siteUrl}/${key}.txt`;

async function main() {
  const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`, {
    headers: { "User-Agent": "HometownWebServices-IndexNow/1.0" },
  });

  if (!sitemapResponse.ok) {
    throw new Error(`Could not read live sitemap: ${sitemapResponse.status}`);
  }

  const sitemapXml = await sitemapResponse.text();
  const urlList = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1],
  );

  if (!urlList.length) {
    throw new Error("No URLs were found in the live sitemap.");
  }

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: "www.hometownwebservicesar.com",
      key,
      keyLocation,
      urlList,
    }),
  });

  if (!response.ok && response.status !== 202) {
    const body = await response.text();
    throw new Error(`IndexNow submission failed: ${response.status} ${body}`);
  }

  console.log(`Submitted ${urlList.length} live sitemap URLs to IndexNow.`);
  console.log(`Response status: ${response.status}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
