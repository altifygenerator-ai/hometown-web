import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { createPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Arkansas Web Design Service Areas",
  description:
    "Hometown Web Services builds small-business websites across Hot Springs, Arkadelphia, Glenwood, Malvern, Benton, Bryant, Little Rock, and nearby Arkansas communities.",
  path: "/locations",
});

const southwestLocations = [
  {
    city: "Hot Springs",
    href: "/locations/hot-springs-ar",
    area: "Garland County",
    text: "Web design for contractors, rentals, tourism businesses, restaurants, cleaners, shops, and local service companies.",
  },
  {
    city: "Arkadelphia",
    href: "/locations/arkadelphia-ar",
    area: "Clark County",
    text: "Sites for local businesses serving Arkadelphia, Caddo Valley, DeGray Lake traffic, and nearby communities.",
  },
  {
    city: "Glenwood",
    href: "/locations/glenwood-ar",
    area: "Pike County",
    text: "Small-business and tourism-focused websites for contractors, cabins, restaurants, shops, and local services.",
  },
  {
    city: "Malvern",
    href: "/locations/malvern-ar",
    area: "Hot Spring County",
    text: "Websites and local search structure for service companies, contractors, shops, restaurants, and local businesses.",
  },
  {
    city: "Caddo Valley",
    href: "/locations/caddo-valley-ar",
    area: "Clark County",
    text: "Web design for businesses serving the I-30, DeGray Lake, lodging, restaurant, service, and travel market.",
  },
];

const centralLocations = [
  {
    city: "Benton",
    href: "/locations/benton-ar",
    area: "Saline County",
    text: "Small-business websites for contractors, home services, shops, restaurants, and other businesses in a growing local market.",
  },
  {
    city: "Bryant",
    href: "/locations/bryant-ar",
    area: "Saline County",
    text: "Web design focused on trust, service clarity, mobile visitors, and local competition across Bryant and nearby communities.",
  },
  {
    city: "Little Rock",
    href: "/locations/little-rock-ar",
    area: "Pulaski County",
    text: "Websites for businesses competing in a larger market where stronger proof, structure, and search targeting matter more.",
  },
  {
    city: "North Little Rock",
    href: "/locations/north-little-rock-ar",
    area: "Pulaski County",
    text: "Website design for local service businesses, contractors, shops, restaurants, and companies serving the metro area.",
  },
  {
    city: "Maumelle",
    href: "/locations/maumelle-ar",
    area: "Pulaski County",
    text: "Clean small-business websites for professional services, contractors, home services, shops, and local companies.",
  },
];

const allLocations = [...southwestLocations, ...centralLocations];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/locations#webpage`,
    url: `${SITE_URL}/locations`,
    name: "Arkansas Web Design Service Areas",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allLocations.map((location, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${location.city}, Arkansas Web Design`,
        url: `${SITE_URL}${location.href}`,
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${SITE_URL}/locations`,
      },
    ],
  },
];

function LocationGrid({
  locations,
}: {
  locations: typeof southwestLocations;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {locations.map((location) => (
        <Link
          key={location.href}
          href={location.href}
          className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6 transition hover:shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl">{location.city}, AR</h3>
              <p className="mt-1 text-sm text-[var(--text-soft)]">{location.area}</p>
            </div>
            <span className="text-sm text-[var(--text-soft)]">View →</span>
          </div>
          <p className="mt-5 leading-7 text-[var(--text-soft)]">{location.text}</p>
        </Link>
      ))}
    </div>
  );
}

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative overflow-hidden px-6 py-24 md:py-28">
          <div className="pointer-events-none absolute right-[-160px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="section-kicker mb-5">Arkansas service areas</p>
            <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">
              Web design for Arkansas small businesses, from Southwest Arkansas to the Little Rock area.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
              Hometown Web Services is based in Amity and works with small
              businesses across Arkansas. The strongest local pages are built
              around real markets and real customer needs, not a giant list of
              copy-and-paste city pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/free-preview" className="btn btn-primary">
                Get a free preview
              </Link>
              <Link href="/services" className="btn btn-secondary">
                View website services
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="section-kicker mb-4">Southwest Arkansas & Hot Springs</p>
                <h2 className="text-3xl leading-tight md:text-5xl">
                  The core local markets Hometown knows best.
                </h2>
                <p className="mt-6 max-w-md leading-7 text-[var(--text-soft)]">
                  These pages focus on the actual mix of local businesses,
                  tourism, contractors, services, and customer traffic in each
                  market.
                </p>
              </div>
              <LocationGrid locations={southwestLocations} />
            </div>
          </div>
        </section>

        <section id="central-arkansas" className="scroll-mt-24 px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="section-kicker mb-4">Central Arkansas</p>
                <h2 className="text-3xl leading-tight md:text-5xl">
                  Website design for businesses competing in larger local markets.
                </h2>
                <p className="mt-6 max-w-md leading-7 text-[var(--text-soft)]">
                  Benton, Bryant, Little Rock, North Little Rock, and Maumelle
                  usually mean more competition. The website needs clearer proof,
                  better service structure, and stronger local search signals.
                </p>
              </div>
              <LocationGrid locations={centralLocations} />
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
