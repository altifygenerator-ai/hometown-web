import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const siteUrl = "https://www.hometownwebservicesar.com";

export const metadata: Metadata = {
  title:
    "Hot Springs Contractor Website Design | Websites for Local Contractors",
  description:
    "Website design for Hot Springs, Arkansas contractors, remodelers, roofers, plumbers, landscapers, dirt work companies, and service businesses that need more calls and quote requests.",
  alternates: {
    canonical: `${siteUrl}/hot-springs-contractor-websites`,
  },
  openGraph: {
    title: "Hot Springs Contractor Website Design",
    description:
      "Clean, mobile-friendly contractor websites built for calls, quote requests, local trust, and Google visibility in Hot Springs, Arkansas.",
    url: `${siteUrl}/hot-springs-contractor-websites`,
    siteName: "Hometown Web Services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hot Springs Contractor Website Design",
      },
    ],
  },
};

const contractorTypes = [
  "Remodelers",
  "Roofers",
  "Plumbers",
  "Electricians",
  "HVAC companies",
  "Dirt work companies",
  "Excavating companies",
  "Landscapers",
  "Concrete contractors",
  "Fence companies",
  "Cleaning companies",
  "Handyman services",
];

const websiteNeeds = [
  {
    title: "Real work photos",
    text: "Project photos, before-and-afters, equipment, crews, and jobsite images help people trust the business faster.",
  },
  {
    title: "Clear service sections",
    text: "Customers should know exactly what kind of work you do without digging through Facebook or guessing from a few photos.",
  },
  {
    title: "Fast call and quote buttons",
    text: "Most people are on their phone. Calling, texting, or requesting a quote should be obvious.",
  },
  {
    title: "Service-area wording",
    text: "Hot Springs, Lake Hamilton, Garland County, Hot Springs Village, Royal, and nearby areas should be worked into the structure naturally.",
  },
  {
    title: "Reviews and trust points",
    text: "Insured, locally owned, free estimates, years in business, warranties, and reviews should be easy to see.",
  },
  {
    title: "Google-ready layout",
    text: "The page structure, headings, metadata, and internal links should help Google understand the business.",
  },
];

const demoProjects = [
  {
    title: "Mayo’s Remodeling",
    label: "Remodeling Demo",
    text: "A modern contractor demo built around project photos, service clarity, trust points, and quote requests.",
    src: "/videos/mayos.mp4",
  },
  {
    title: "TG Services & Excavating",
    label: "Excavating Demo",
    text: "A dirt work and excavating demo built around real work photos, service areas, and clear contact paths.",
    src: "/videos/TGdemo.mp4",
  },
  {
    title: "Onyx Ridge",
    label: "Contractor Site",
    text: "A rugged contractor website built around mobile calls, service sections, and stronger local trust.",
    src: "/videos/onyxridge.mp4",
  },
];

const faqs = [
  {
    question: "Do you build contractor websites in Hot Springs?",
    answer:
      "Yes. I build websites for Hot Springs contractors, remodelers, roofers, plumbers, electricians, landscapers, excavating companies, dirt work businesses, cleaners, and other local service companies.",
  },
  {
    question: "Can you use photos from my Facebook page?",
    answer:
      "Yes. If your Facebook page already has work photos, service info, reviews, or project posts, I can use that as a starting point for the preview.",
  },
  {
    question: "Can this help with Google?",
    answer:
      "A properly built website can help Google better understand your services, service areas, and business details. It works best alongside a strong Google Business Profile.",
  },
  {
    question: "Do I have to pay before seeing anything?",
    answer:
      "No. I can put together a free preview first so you can see the direction before committing.",
  },
];

export default function HotSpringsContractorWebsitesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Hot Springs Contractor Website Design",
      url: `${siteUrl}/hot-springs-contractor-websites`,
      provider: {
        "@type": "ProfessionalService",
        name: "Hometown Web Services",
        url: siteUrl,
        telephone: "+18702604880",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Hot Springs",
          addressRegion: "AR",
        },
        {
          "@type": "AdministrativeArea",
          name: "Garland County",
        },
      ],
      serviceType: "Contractor Website Design",
      description:
        "Website design and local SEO structure for Hot Springs contractors and service businesses.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
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
      <section className="bg-depth relative overflow-hidden px-6 pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[var(--accent)] opacity-[0.08] blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[420px] w-[420px] rounded-full bg-black opacity-[0.04] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-kicker mb-5">
                Hot Springs Contractor Websites
              </p>

              <h1 className="text-balance max-w-4xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Websites for Hot Springs contractors that need more calls and
                quote requests.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                I build clean, mobile-friendly websites for Hot Springs
                contractors and service businesses that need to look more
                professional, show real work, and make it easier for customers to
                call, text, or request a quote.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/free-preview" className="btn btn-primary">
                  Get a free preview
                </Link>

                <Link href="/portfolio" className="btn btn-secondary">
                  View work
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--accent)] opacity-[0.07] blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border-soft)] bg-black p-3 shadow-[var(--shadow-strong)]">
                <div className="overflow-hidden rounded-[1.75rem] bg-black">
                  <video
                    src="/videos/mayos.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/og-image.png"
                    className="h-[360px] w-full object-cover md:h-[520px]"
                  />
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/15 bg-black/65 p-5 text-white backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    Built for local leads
                  </p>

                  <h2 className="mt-3 text-2xl leading-tight">
                    Clear services, real proof, quote buttons, and mobile-first
                    contact.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Built around calls",
                text: "The site should make calling, texting, or requesting a quote easy from every important section.",
              },
              {
                title: "Built around proof",
                text: "Photos, reviews, service areas, and trust points should do the selling before the customer reaches out.",
              },
              {
                title: "Built around Hot Springs",
                text: "Service-area wording and local structure help connect the business to Hot Springs and nearby searches.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="premium-shell rounded-[1.5rem] p-6"
              >
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="section-kicker mb-4">Why it matters</p>

            <h2 className="text-balance text-4xl leading-tight md:text-6xl">
              Homeowners compare contractors before they ever call.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
            <p>
              A lot of contractors in Hot Springs already do solid work. The
              problem is the website, Google listing, or Facebook page does not
              always show that clearly enough.
            </p>

            <p>
              Customers want to see what you do, where you work, examples of
              past jobs, whether you look reliable, and how fast they can reach
              you. If that takes too much effort, they usually move on.
            </p>

            <p>
              A contractor website does not need to be complicated. It needs to
              be clear, visual, fast on mobile, and built around the services and
              areas you actually want more calls from.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker mb-4">Good fit for</p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                Contractor and service business websites in Hot Springs.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              The same structure works across most trades because customers need
              the same things: proof, clarity, location, services, and a fast
              way to reach out.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contractorTypes.map((type) => (
              <div
                key={type}
                className="rounded-2xl border border-[var(--border-soft)] bg-white p-5 shadow-sm"
              >
                <p className="font-medium">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESSENTIALS */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="section-kicker mb-4">
                What the site needs
              </p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                The basics have to be easy to find.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              Most contractor sites do not fail because they are missing fancy
              features. They fail because customers cannot quickly find the
              simple stuff that makes them trust the business.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {websiteNeeds.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl leading-tight">{item.title}</h3>

                <p className="mt-4 leading-7 text-[var(--text-soft)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker mb-4">Contractor-style examples</p>

              <h2 className="text-balance max-w-3xl text-4xl leading-tight md:text-6xl">
                Examples of the kind of direction I build toward.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[var(--text-soft)]">
              These examples show service-focused layouts, work-photo sections,
              mobile contact paths, and quote-focused structure.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {demoProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-white shadow-sm"
              >
                <div className="relative overflow-hidden bg-black">
                  <video
                    src={project.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-[260px] w-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-black">
                    {project.label}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl leading-tight">{project.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                    {project.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm text-[var(--text-soft)] transition hover:bg-white hover:text-[var(--text-main)]"
            >
              View full portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="px-6 py-24 md:py-28">
        <div className="surface mx-auto max-w-6xl p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="section-kicker mb-4">Hot Springs web design</p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                Part of a stronger Hot Springs website plan.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                This contractor page supports the main Hot Springs web design
                page and the broader contractor website service page.
              </p>
            </div>

            <div className="grid gap-3">
              <Link
                href="/locations/hot-springs-ar"
                className="rounded-2xl border border-[var(--border-soft)] bg-white px-5 py-4 text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
              >
                Web Design in Hot Springs, AR →
              </Link>

              <Link
                href="/contractor-websites"
                className="rounded-2xl border border-[var(--border-soft)] bg-white px-5 py-4 text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
              >
                Contractor Website Design in Arkansas →
              </Link>

              <Link
                href="/hot-springs-vacation-rental-websites"
                className="rounded-2xl border border-[var(--border-soft)] bg-white px-5 py-4 text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
              >
                Hot Springs Vacation Rental Websites →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker mb-4">Questions</p>

            <h2 className="text-balance max-w-md text-4xl leading-tight md:text-6xl">
              Straight answers before building anything.
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[var(--border-soft)] pb-6"
              >
                <h3 className="text-2xl leading-tight">{faq.question}</h3>

                <p className="mt-3 leading-7 text-[var(--text-soft)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[var(--bg-alt)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--text-main)] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-[100px]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm text-white/60">
                  Free preview first
                </p>

                <h2 className="text-balance max-w-2xl text-4xl leading-tight md:text-6xl">
                  Want to see what your contractor site could look like?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  Send your business name, Facebook page, current site if you
                  have one, service area, and a few work photos. I can put
                  together a preview before you commit.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-start">
                <Link
                  href="/free-preview"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get a free preview
                </Link>

                <a
                  href="sms:8702604880"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Text 870-260-4880 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}