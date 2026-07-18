#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dryRun = process.argv.includes("--dry-run");
const SITE_URL = "https://www.hometownwebservicesar.com";
const PUBLIC_EMAIL = "hello@hometownwebservicesar.com";
const changedFiles = [];

function fullPath(relativePath) {
  return path.join(root, relativePath);
}

function requireFile(relativePath) {
  const filePath = fullPath(relativePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing expected file: ${relativePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function saveFile(relativePath, before, after) {
  if (before === after) return;
  changedFiles.push(relativePath);
  if (!dryRun) {
    fs.writeFileSync(fullPath(relativePath), after, "utf8");
  }
}

function replaceRequired(content, pattern, replacement, label) {
  const next = content.replace(pattern, replacement);
  if (next === content) {
    throw new Error(`Could not apply required change: ${label}`);
  }
  return next;
}

function walk(directory) {
  const directoryPath = fullPath(directory);
  if (!fs.existsSync(directoryPath)) return [];

  return fs.readdirSync(directoryPath, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(relativePath);
    return [relativePath];
  });
}

function normalizeSourceReferences() {
  const sourceFiles = ["app", "components", "data"]
    .flatMap(walk)
    .filter((file) => /\.(?:ts|tsx|js|jsx|json)$/.test(file));

  for (const relativePath of sourceFiles) {
    const before = requireFile(relativePath);
    let after = before
      .replaceAll("https://www.hometownwebservicesar.cc", SITE_URL)
      .replaceAll("https://hometownwebservicesar.cc", SITE_URL)
      .replaceAll("https://hometownwebservicesar.com", SITE_URL)
      .replaceAll("hello@hometownwebservicesar.cc", PUBLIC_EMAIL);

    // The root title template adds the business name once. Child metadata
    // should not include the same suffix or Google can receive duplicated titles.
    if (relativePath !== path.join("app", "layout.tsx")) {
      after = after.replace(
        /title:\s*"([^"]*?)\s*\|\s*Hometown Web Services"/g,
        'title: "$1"'
      );
    }

    saveFile(relativePath, before, after);
  }
}

function fixRootMetadataAndSchema() {
  const relativePath = path.join("app", "layout.tsx");
  const before = requireFile(relativePath);
  let after = before;

  // A homepage canonical in the root layout is inherited by routes that do
  // not declare their own canonical. The homepage gets its own canonical below.
  after = replaceRequired(
    after,
    /\s*alternates:\s*\{\s*canonical:\s*siteUrl,?\s*\},?/,
    "",
    "remove the universal homepage canonical from app/layout.tsx"
  );

  if (!after.includes('"@id": `${siteUrl}/#business`')) {
    after = replaceRequired(
      after,
      /("@type":\s*"ProfessionalService",\s*)name:\s*"Hometown Web Services",\s*url:\s*siteUrl,?/,
      '$1"@id": `${siteUrl}/#business`,\n    name: "Hometown Web Services",\n    url: siteUrl,\n    telephone: "+18702604880",\n    email: "hello@hometownwebservicesar.com",',
      "add one stable business schema ID"
    );
  }

  if (!after.includes('"@id": `${siteUrl}/#website`')) {
    after = replaceRequired(
      after,
      /("@type":\s*"WebSite",\s*)name:\s*"Hometown Web Services",\s*url:\s*siteUrl,?/,
      '$1"@id": `${siteUrl}/#website`,\n    name: "Hometown Web Services",\n    url: siteUrl,\n    publisher: { "@id": `${siteUrl}/#business` },',
      "connect WebSite schema to the business entity"
    );
  }

  saveFile(relativePath, before, after);
}

function fixHomepageMetadataAndSchema() {
  const relativePath = path.join("app", "page.tsx");
  const before = requireFile(relativePath);
  let after = before;

  if (!after.includes('import type { Metadata } from "next";')) {
    after = `import type { Metadata } from "next";\n${after}`;
  }

  if (!/export const metadata\s*:\s*Metadata/.test(after)) {
    after = replaceRequired(
      after,
      /(const siteUrl\s*=\s*"https:\/\/www\.hometownwebservicesar\.com";)/,
      `$1\n\nexport const metadata: Metadata = {\n  alternates: {\n    canonical: siteUrl,\n  },\n};`,
      "add the homepage self-referencing canonical"
    );
  }

  after = after.replace('email: "altifygenerator@gmail.com"', `email: "${PUBLIC_EMAIL}"`);

  saveFile(relativePath, before, after);
}

function fixServicesMetadata() {
  const relativePath = path.join("app", "services", "page.tsx");
  const before = requireFile(relativePath);
  let after = before;

  if (!after.includes('import type { Metadata } from "next";')) {
    after = `import type { Metadata } from "next";\n${after}`;
  }

  if (!/const siteUrl\s*=/.test(after)) {
    const lastImport = [...after.matchAll(/^import .*;\s*$/gm)].at(-1);
    if (!lastImport) throw new Error("Could not find imports in app/services/page.tsx");
    const insertAt = lastImport.index + lastImport[0].length;
    after = `${after.slice(0, insertAt)}\n\nconst siteUrl = "${SITE_URL}";${after.slice(insertAt)}`;
  }

  after = after.replace(/export const metadata\s*=\s*\{/, "export const metadata: Metadata = {");

  if (!/canonical:\s*`?\$?\{?siteUrl/.test(after)) {
    after = replaceRequired(
      after,
      /(export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?description:\s*"[^"]*",)(\s*\};)/,
      `$1\n  alternates: {\n    canonical: \`\${siteUrl}/services\`,\n  },\n  openGraph: {\n    title: "Web Design & SEO Services in Arkansas",\n    description:\n      "Professional websites, local SEO, and Google Business Profile help for Arkansas small businesses.",\n    url: \`\${siteUrl}/services\`,\n    siteName: "Hometown Web Services",\n    type: "website",\n    images: [\n      {\n        url: "/og-image.png",\n        width: 1200,\n        height: 630,\n        alt: "Arkansas web design and local SEO services",\n      },\n    ],\n  },$2`,
      "add a self-canonical and social URL to the services page"
    );
  }

  saveFile(relativePath, before, after);
}

function fixSitemapDates() {
  const relativePath = path.join("app", "sitemap.ts");
  const before = requireFile(relativePath);
  let after = before;

  after = after.replace(/\n?const lastModified\s*=\s*new Date\([^;]+\);\s*/g, "\n");
  after = after.replace(/\s*lastModified,\s*/g, "\n    ");

  saveFile(relativePath, before, after);
}

function validate() {
  const layout = requireFile(path.join("app", "layout.tsx"));
  const homepage = requireFile(path.join("app", "page.tsx"));
  const services = requireFile(path.join("app", "services", "page.tsx"));
  const sitemap = requireFile(path.join("app", "sitemap.ts"));

  const errors = [];

  if (/alternates:\s*\{\s*canonical:\s*siteUrl/.test(layout)) {
    errors.push("app/layout.tsx still has a universal canonical");
  }
  if (!/canonical:\s*siteUrl/.test(homepage)) {
    errors.push("app/page.tsx is missing the homepage canonical");
  }
  if (!/canonical:\s*`\$\{siteUrl\}\/services`/.test(services)) {
    errors.push("app/services/page.tsx is missing its self-canonical");
  }
  if (/2026-06-01|lastModified/.test(sitemap)) {
    errors.push("app/sitemap.ts still contains the stale blanket lastModified date");
  }

  const remainingOldReferences = ["app", "components", "data"]
    .flatMap(walk)
    .filter((file) => /\.(?:ts|tsx|js|jsx|json)$/.test(file))
    .flatMap((file) => {
      const content = requireFile(file);
      const issues = [];
      if (content.includes("hometownwebservicesar.cc")) issues.push(`${file}: old .cc reference`);
      if (content.includes("https://hometownwebservicesar.com")) issues.push(`${file}: non-www URL`);
      if (
        file !== path.join("app", "layout.tsx") &&
        /title:\s*"[^"]*\|\s*Hometown Web Services"/.test(content)
      ) {
        issues.push(`${file}: title still repeats the root brand suffix`);
      }
      return issues;
    });

  errors.push(...remainingOldReferences);

  if (errors.length) {
    throw new Error(`SEO validation failed:\n- ${errors.join("\n- ")}`);
  }
}

try {
  normalizeSourceReferences();
  fixRootMetadataAndSchema();
  fixHomepageMetadataAndSchema();
  fixServicesMetadata();
  fixSitemapDates();

  if (!dryRun) validate();

  console.log(dryRun ? "SEO dry run complete." : "SEO fixes applied successfully.");
  if (changedFiles.length) {
    console.log("Changed files:");
    for (const file of [...new Set(changedFiles)].sort()) console.log(`- ${file}`);
  } else {
    console.log("No files needed changes.");
  }
  console.log(`\nPublic email used in schema/footer: ${PUBLIC_EMAIL}`);
  console.log("Make sure that address forwards to an inbox before deploying.");
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
