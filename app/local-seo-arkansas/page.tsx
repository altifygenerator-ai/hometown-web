import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/ui/RevealV2";

const siteUrl = "https://hometownwebservicesar.cc";

export const metadata: Metadata = {
  title: "Local SEO Services Arkansas | Hometown Web Services",
  description:
    "Local SEO services for Arkansas contractors and small businesses. Google Business Profile optimization, service pages, website structure, and local visibility improvements.",
  keywords: [
    "local SEO Arkansas",
    "Google Business Profile help Arkansas",
    "contractor SEO Arkansas",
    "small business SEO Arkansas",
    "Google Maps SEO Arkansas",
    "website SEO Arkansas",
    "local search optimization Arkansas",
    "roofing SEO Arkansas",
    "plumber SEO Arkansas",
    "Arkansas SEO services",
  ],
  alternates: {
    canonical: `${siteUrl}/local-seo-arkansas`,
  },
  openGraph: {
    title: "Local SEO Services Arkansas",
    description:
      "Helping Arkansas businesses improve local visibility, Google rankings, and online trust.",
    url: `${siteUrl}/local-seo-arkansas`,
    siteName: "Hometown Web Services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Local SEO Services Arkansas",
      },
    ],
  },
};

const seoCards = [
  {
    title: "Google-ready structure",
    text: "Clean page structure, metadata, headings, local wording, and crawlable content built to help Google better understand your business.",
  },
  {
    title: "Service area targeting",
    text: "Location pages and service pages help connect your business to the areas and searches you actually want to rank for.",
  },
  {
    title: "Google Business Profile help",
    text: "Optimization for categories, descriptions, photos, services, and overall local trust signals.",
  },
  {
    title: "Fast mobile performance",
    text: "Most local searches happen on phones, so speed and usability matter heavily for rankings and conversions.",
  },
  {
    title: "Real local positioning",
    text: "Local businesses perform better when the website actually sounds local and reflects the areas it serves.",
  },
  {
    title: "SEO-focused layouts",
    text: "Clear calls-to-action, strong service structure, and layouts designed around how people actually search.",
  },
];

const faq = [
  {
    question: "What is local SEO?",
    answer:
      "Local SEO helps businesses appear better in Google search and Maps results for nearby customers looking for services in their area.",
  },
  {
    question: "Can local SEO help contractors?",
    answer:
      "Yes. Contractors rely heavily on local searches, Google Maps visibility, service pages, and mobile traffic to generate calls and quote requests.",
  },
  {
    question: "Do I need a Google Business Profile?",
    answer:
      "A properly optimized Google Business Profile is one of the most important parts of local visibility for service businesses.",
  },
];

export default function LocalSEOPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Local SEO Services Arkansas",
      provider: {
        "@type": "ProfessionalService",
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "State",
        name: "Arkansas",
      },
      serviceType: "Local SEO",
      description:
        "Local SEO and Google visibility services for Arkansas contractors and small businesses.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Header />

      {/* HERO */}
      <section className="bg-depth relative overflow-hidden px-6 py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div>
                <span className="badge">Local SEO Arkansas</span>

                <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] text-[var(--text-main)] md:text-7xl">
                  Helping Arkansas businesses show up better on Google.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  A lot of small businesses already do good work. The problem
                  is people cannot always find them easily online. I help
                  Arkansas contractors and local businesses improve visibility
                  through stronger website structure, local SEO, and cleaner
                  Google-ready design.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn btn-primary">
                    Get SEO Help
                  </Link>

                  <Link
                    href="/contractor-websites"
                    className="btn btn-secondary"
                  >
                    Contractor Websites
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card-strong overflow-hidden p-3">
                <div className="overflow-hidden rounded-[1.5rem] bg-black">
                  <video
                    src="/videos/demoglenwood.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-[380px] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <span className="badge">Why it matters</span>

              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                Most customers search before they ever call.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
              <p>
                Whether someone needs a roofer, cleaner, remodeling contractor,
                plumber, electrician, restaurant, or another local service,
                they are usually checking Google first. If your website is
                outdated, confusing, slow, or missing important local signals,
                your business becomes harder to trust and harder to find.
              </p>

              <p>
                Good local SEO is not just stuffing keywords onto a page. It is
                about structure, trust, speed, service depth, local relevance,
                mobile usability, and helping Google clearly understand what
                your business does and where you work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GBP SECTION */}
      <section className="bg-[var(--bg-alt)] px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="card overflow-hidden p-3">
              <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)]">
                <Image
                  src="/images/mayosGBP.png"
                  alt="Google Business Profile optimization example"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <span className="badge">Google Business Profiles</span>

              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                Your Google presence matters as much as your website.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[var(--text-soft)]">
                Google Business Profiles are one of the biggest local ranking
                factors for service businesses. Categories, service areas,
                descriptions, photos, reviews, and consistency all help build
                trust and visibility.
              </p>

              <p className="mt-5 text-lg leading-8 text-[var(--text-soft)]">
                A good website and a strong Google profile work together. One
                supports the other.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-3xl">
              <span className="badge">What actually helps</span>

              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                Local SEO built around real Arkansas businesses.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {seoCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} y={20}>
                <div className="card h-full p-7">
                  <h3 className="text-2xl">{item.title}</h3>

                  <p className="mt-4 leading-7 text-[var(--text-soft)]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="bg-[var(--bg-alt)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="badge">Website improvements</span>

                <h2 className="mt-5 max-w-3xl text-4xl leading-tight md:text-5xl">
                  Better structure creates better trust.
                </h2>
              </div>

              <p className="max-w-md text-[var(--text-soft)]">
                Before and after style comparisons help show businesses how much
                clearer, cleaner, and more trustworthy a modern site feels.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card overflow-hidden p-3">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/bad.png"
                    alt="Outdated contractor website"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm uppercase tracking-[0.15em] text-[var(--text-soft)]">
                    Before
                  </p>

                  <h3 className="mt-2 text-2xl">
                    Outdated, cluttered, difficult to trust
                  </h3>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card overflow-hidden p-3">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/good.png"
                    alt="Modern contractor website redesign"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm uppercase tracking-[0.15em] text-[var(--text-soft)]">
                    After
                  </p>

                  <h3 className="mt-2 text-2xl">
                    Modern, clearer, mobile-friendly, easier to contact
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
  

      {/* FAQ */}
      <section className="bg-[var(--bg-alt)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="text-center">
              <span className="badge">FAQ</span>

              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                Local SEO questions
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 space-y-5">
            {faq.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.05}>
                <div className="card p-7">
                  <h3 className="text-2xl">{item.question}</h3>

                  <p className="mt-4 leading-7 text-[var(--text-soft)]">
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20">
        <Reveal>
          <div className="surface mx-auto max-w-6xl p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
              <div>
                <span className="badge">Arkansas-focused</span>

                <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                  Better visibility starts with a stronger foundation.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  Most local businesses do not need a giant agency or confusing
                  marketing system. They need a clean website, better local
                  structure, clearer trust signals, and an easier way for
                  customers to find and contact them.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <Link href="/contact" className="btn btn-primary text-center">
                  Request a Free Preview
                </Link>

                <Link
                  href="/contractor-websites"
                  className="btn btn-secondary text-center"
                >
                  Explore Contractor Websites
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}