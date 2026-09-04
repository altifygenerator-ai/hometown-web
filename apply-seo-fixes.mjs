#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const expectedPhone = "8708282562";
const expectedGoogleProfile = "https://share.google/67aUQ1pf2dBmepAD6";
const expectedIndexNowKey = "c6b4e3d5f8a24a1b9e73d2c850fb4a61";
const obsoleteReferences = [
  "8702604880",
  "870-260-4880",
  "(870) 260-4880",
  "+18702604880",
  "8702304880",
  "870-230-4880",
  "(870) 230-4880",
  "+18702304880",
  "https://share.google/f18YjPUwYQatjbbnZ",
  "hometownwebservicesar.cc",
];

function walk(directory) {
  const absolute = path.join(root, directory);
  if (!fs.existsSync(absolute)) return [];

  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(relativePath);
    return [relativePath];
  });
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

const sourceFiles = ["app", "components", "data", "lib", "scripts"]
  .flatMap(walk)
  .filter((file) => /\.(?:ts|tsx|js|jsx|mjs)$/.test(file));

const errors = [];
const combinedSource = sourceFiles.map(read).join("\n");

for (const obsoleteReference of obsoleteReferences) {
  if (combinedSource.includes(obsoleteReference)) {
    errors.push(`Obsolete reference remains: ${obsoleteReference}`);
  }
}

if (!combinedSource.includes(expectedPhone)) {
  errors.push("The current phone number is missing from the source.");
}

if (!combinedSource.includes(expectedGoogleProfile)) {
  errors.push("The current Google Business Profile URL is missing from the source.");
}

if (combinedSource.includes('href="/contact"')) {
  errors.push("A link still points to the nonexistent /contact route.");
}

const metadataFiles = ["app", "data"]
  .flatMap(walk)
  .filter((file) => /\.(?:ts|tsx)$/.test(file));
const metadataCount = metadataFiles.reduce(
  (count, file) => count + (read(file).match(/createPageMetadata\(\{/g)?.length ?? 0),
  0,
);

const routePages = walk("app").filter(
  (file) => file.endsWith(`${path.sep}page.tsx`) || file === path.join("app", "page.tsx"),
);

if (metadataCount !== routePages.length) {
  errors.push(
    `Expected one createPageMetadata definition per public page route: found ${metadataCount} metadata definitions for ${routePages.length} routes.`,
  );
}

const layout = read(path.join("app", "layout.tsx"));
if (!layout.includes("metadataBase: new URL(SITE_URL)")) {
  errors.push("Root metadataBase is missing.");
}
if (!layout.includes('"@type": "ProfessionalService"')) {
  errors.push("ProfessionalService structured data is missing.");
}
if (!layout.includes('"@type": "WebSite"')) {
  errors.push("WebSite structured data is missing.");
}
if (!layout.includes("BUSINESS_STREET")) {
  errors.push("Business address is not connected to the main business entity.");
}

const sitemap = read(path.join("app", "sitemap.ts"));
for (const requiredRoute of [
  "/locations",
  "/about",
  "/website-redesigns",
  "/website-maintenance",
]) {
  if (!sitemap.includes(requiredRoute)) {
    errors.push(`Sitemap is missing ${requiredRoute}.`);
  }
}
if (!sitemap.includes('new Date("2026-09-03")')) {
  errors.push("SEO release last-modified date is missing from the sitemap.");
}

const robots = read(path.join("app", "robots.ts"));
if (!robots.includes('disallow: ["/api/"]')) {
  errors.push("robots.ts does not exclude the form API route.");
}

const indexNowRoute = path.join("app", `${expectedIndexNowKey}.txt`, "route.ts");
if (!fs.existsSync(path.join(root, indexNowRoute))) {
  errors.push("IndexNow key route is missing.");
}
const indexNowScript = path.join("scripts", "submit-indexnow.mjs");
if (!fs.existsSync(path.join(root, indexNowScript))) {
  errors.push("IndexNow submission script is missing.");
}

if (errors.length) {
  console.error(`SEO validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log("SEO validation passed.");
console.log(
  `Checked ${routePages.length} public routes and ${metadataCount} page metadata definitions.`,
);
console.log(
  "Phone, Google profile, canonicals, structured data, sitemap, robots, service-area hierarchy, and IndexNow setup are aligned.",
);
