import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { createPageMetadata } from "@/lib/seo";
import {
  BUSINESS_CITY,
  BUSINESS_STATE,
  GOOGLE_PROFILE_URL,
  PHONE_CALL_URL,
  PHONE_DISPLAY,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About the Arkansas Web Designer Behind Hometown",
  description:
    "Meet the person behind Hometown Web Services, an Amity, Arkansas web design business building practical websites and local SEO foundations for small businesses.",
  path: "/about",
});

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: "About Hometown Web Services",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    mainEntity: {
      "@type": "Person",
      name: "Jake",
      worksFor: { "@id": `${SITE_URL}/#business` },
      homeLocation: {
        "@type": "City",
        name: BUSINESS_CITY,
        addressRegion: BUSINESS_STATE,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  },
];

const principles = [
  {
    title: "Show the work clearly",
    text: "A local business should not have to sound like a national company. The site should make the real services, photos, reviews, service areas, and contact options easy to understand.",
  },
  {
    title: "Build for the phone first",
    text: "Most local customers are searching, comparing, calling, and texting from a phone. The site needs to make that path simple instead of hiding the important stuff.",
  },
  {
    title: "Keep SEO grounded in the business",
    text: "Search structure should match the services and places the business really serves. I would rather build a smaller group of useful pages than a pile of thin pages made only to chase keywords.",
  },
  {
    title: "Stay useful after launch",
    text: "Businesses change. Photos, services, prices, crews, and offers change too. Being able to get a real update without a runaround is part of the service.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative overflow-hidden px-6 py-24 md:py-28">
          <div className="pointer-events-none absolute right-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="section-kicker mb-5">About Hometown Web Services</p>
                <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">
                  Small-business web design from someone who actually builds the site.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  I’m Jake, the person behind Hometown Web Services. I’m based in
                  Amity, Arkansas and build websites for contractors, service
                  businesses, rentals, restaurants, shops, and other small
                  businesses that need a cleaner, more useful online presence.
                </p>
              </div>

              <div className="premium-shell rounded-[2rem] p-7 md:p-8">
                <p className="text-sm font-medium text-[var(--text-main)]">
                  The basic idea
                </p>
                <p className="mt-4 text-xl leading-8 text-[var(--text-soft)]">
                  Good local businesses should not look harder to trust online
                  than they are in real life. I build the site around the work,
                  the customer, and the next action instead of making the process
                  more complicated than it needs to be.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/portfolio" className="btn btn-secondary">
                    See recent work
                  </Link>
                  <Link href="/free-preview" className="btn btn-primary">
                    Get a free preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="section-kicker mb-4">How I work</p>
                <h2 className="text-3xl leading-tight md:text-5xl">
                  Practical sites built around real local businesses.
                </h2>
                <p className="mt-6 max-w-md leading-7 text-[var(--text-soft)]">
                  I work directly with the business owner, use the information
                  and proof they already have, and shape the site around what a
                  customer needs to know before calling, texting, booking, or
                  requesting a quote.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6"
                  >
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[var(--text-soft)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2rem] border border-[var(--border-soft)] p-7 md:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <p className="section-kicker mb-4">Local and reachable</p>
                  <h2 className="text-3xl leading-tight md:text-5xl">
                    Based in Amity. Working with businesses across Arkansas.
                  </h2>
                  <p className="mt-6 max-w-xl leading-7 text-[var(--text-soft)]">
                    Hometown serves businesses in Hot Springs, Arkadelphia,
                    Glenwood, Malvern, Benton, Bryant, Little Rock, and nearby
                    Arkansas communities. Web work can travel farther, but the
                    business is built around small-business service and direct
                    communication.
                  </p>
                </div>

                <div className="grid gap-3">
                  <Link
                    href="/locations"
                    className="rounded-2xl border border-[var(--border-soft)] px-5 py-4 text-sm font-medium"
                  >
                    View Arkansas service areas →
                  </Link>
                  <a
                    href={GOOGLE_PROFILE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-[var(--border-soft)] px-5 py-4 text-sm font-medium"
                  >
                    View the Google Business Profile →
                  </a>
                  <a
                    href={PHONE_CALL_URL}
                    className="rounded-2xl border border-[var(--border-soft)] px-5 py-4 text-sm font-medium"
                  >
                    Call {PHONE_DISPLAY} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
