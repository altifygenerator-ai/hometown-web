# Hometown Web Services SEO / Search Update — 2026-09-03

This release keeps the existing design and indexed URLs intact while tightening page targeting, local business identity, internal linking, search-engine discovery, and service-area structure.

## Core SEO changes

- Homepage now clearly owns the broad `Arkansas web design` / `Arkansas web design for small businesses` intent instead of sharing the exact same title target with `/services`.
- `/services` now targets small-business website services in Arkansas and links directly to the more specific commercial service pages.
- Added `/locations` as the parent hub for Arkansas service areas. Existing city URLs remain unchanged.
- Added breadcrumbs in structured data for all existing city pages: Home → Arkansas Service Areas → City.
- Added `/about` to establish the owner-operated, Amity-based business entity and strengthen first-hand trust / business identity.
- Added `/website-redesigns` for redesign/rebuild intent.
- Added `/website-maintenance` for ongoing website support/update intent.
- Kept the current Hot Springs contractor and vacation-rental specialty pages because they target genuinely different customer needs.
- Did not add mass city × industry pages and did not delete existing indexed city pages.

## Google Business Profile / entity consistency

- Updated every site reference to the supplied Google Business Profile URL:
  `https://share.google/67aUQ1pf2dBmepAD6`
- Kept the confirmed current phone number everywhere:
  `(870) 828-2562`
- Main `ProfessionalService` schema now includes the GBP-listed Amity address, the current phone/email, the Google profile, founder/owner relationship, primary Arkansas service areas, and the expanded service list.
- Added `hasMap` and consistent `sameAs` linkage to the supplied Google profile.
- CTA and footer Google-profile links now use the central site constant so they cannot quietly drift apart again.

## Reviews

The Google short-share page did not expose a complete review feed through the available web tools. Three review texts were independently verifiable from the already-indexed Hometown site and were preserved exactly in `data/reviews.ts`:

- Rebecca Turner / Onward & Upward Services
- Isaiah ‘N Kat
- Jake Shockley

The review UI no longer uses stale relative labels such as “6 weeks ago.” It links directly to the supplied Google Business Profile for the current review list.

No aggregate review/rating schema was added because the complete current Google review count could not be verified reliably.

## Bing / DuckDuckGo discovery

- Added IndexNow ownership at:
  `/c6b4e3d5f8a24a1b9e73d2c850fb4a61.txt`
- Added `npm run seo:indexnow` to submit the URLs from the live sitemap after deployment.
- Existing `robots.txt` continues to allow normal search crawlers while excluding the form API route.

Run IndexNow only after this release is live so the ownership key can be verified from the production domain.

## Sitemap

- Reworked sitemap dates so the new SEO release pages use the real 2026-09-03 update date instead of forcing the whole site to report the old 2026-07-24 date.
- Added `/locations`, `/about`, `/website-redesigns`, and `/website-maintenance`.
- Kept older content dates on pages whose primary content was not rewritten.

## Navigation / UI

- Kept the existing visual style.
- Cleaned the desktop service and location menus so the hierarchy is easier to understand.
- Added About, Website Redesigns, Website Maintenance, and All Service Areas to the appropriate navigation/footer groups.
- Kept all existing indexed city paths unchanged.

## Validation

- `node apply-seo-fixes.mjs` passes.
- The validator now checks the current phone, current Google profile, obsolete phone/profile/domain references, route/metadata alignment, structured data, sitemap additions, robots, and IndexNow files.
- A TypeScript syntactic transpile check passed for every `.ts` / `.tsx` source file in this package.
- A full Next.js production build was not run in this stripped package because `node_modules` and the large `public` folder were not included in the supplied ZIP.

## Post-deploy

1. Deploy this source with the existing production `public` folder.
2. Confirm the Google profile button opens the supplied GBP and the current phone is correct on the live site.
3. In Google Search Console, resubmit `sitemap.xml`.
4. Request indexing for `/`, `/services`, `/locations`, `/about`, `/website-redesigns`, and `/website-maintenance`.
5. If the old `.cc` → `.com` Change of Address has not been completed in Search Console, handle that separately before any future URL consolidation.
6. Import the `.com` property into Bing Webmaster Tools if it is not already there.
7. Run `npm run seo:indexnow` once after production deployment.
8. Give Search Console time to recrawl before making another large architecture change. Use query/page performance to decide whether any lower-value Central Arkansas city pages should eventually be consolidated.
