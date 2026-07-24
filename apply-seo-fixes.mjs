#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const expectedPhone = "8708282562";
const oldPhoneParts = ["870", "260", "4880"];
const oldPhonePatterns = [
  oldPhoneParts.join(""),
  oldPhoneParts.join("-"),
  `(${oldPhoneParts[0]}) ${oldPhoneParts[1]}-${oldPhoneParts[2]}`,
  `+1${oldPhoneParts.join("")}`,
];

function walk(directory) {
  return fs.readdirSync(path.join(root, directory), { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(relativePath);
    return [relativePath];
  });
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

const sourceFiles = ["app", "components", "data", "lib"]
  .flatMap(walk)
  .filter((file) => /\.(?:ts|tsx|js|jsx|mjs)$/.test(file));

const errors = [];
const combinedSource = sourceFiles.map(read).join("\n");

for (const oldPhone of oldPhonePatterns) {
  if (combinedSource.includes(oldPhone)) {
    errors.push(`Old phone reference remains: ${oldPhone}`);
  }
}

if (!combinedSource.includes(expectedPhone)) {
  errors.push("The current phone number is missing from the source.");
}

if (combinedSource.includes('href="/contact"')) {
  errors.push("A link still points to the nonexistent /contact route.");
}

const metadataFiles = ["app", "data"].flatMap(walk).filter((file) => /\.(?:ts|tsx)$/.test(file));
const metadataCount = metadataFiles.reduce(
  (count, file) => count + (read(file).match(/createPageMetadata\(\{/g)?.length ?? 0),
  0
);

if (metadataCount !== 19) {
  errors.push(`Expected metadata for 19 public routes, found ${metadataCount}.`);
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

const sitemap = read(path.join("app", "sitemap.ts"));
const routePages = walk("app").filter((file) => file.endsWith(`${path.sep}page.tsx`) || file === path.join("app", "page.tsx"));
if (routePages.length !== 19) {
  errors.push(`Expected 19 public page routes, found ${routePages.length}.`);
}
if (!sitemap.includes('new Date("2026-07-24")')) {
  errors.push("Sitemap last-modified date is missing or outdated.");
}

const robots = read(path.join("app", "robots.ts"));
if (!robots.includes('disallow: ["/api/"]')) {
  errors.push("robots.ts does not exclude the form API route.");
}

if (errors.length) {
  console.error(`SEO validation failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log("SEO validation passed.");
console.log(`Checked ${routePages.length} public routes and ${metadataCount} page metadata definitions.`);
console.log("Phone, canonicals, structured data, sitemap, robots, and internal contact routes are aligned.");
