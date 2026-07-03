import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/sections/Header";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const siteUrl = "https://hometownwebservicesar.com";

export const metadata: Metadata = {
  title: "Contractor Website Design in Arkansas | Hometown Web Services",
  description:
    "Contractor website design for Arkansas roofers, remodelers, plumbers, electricians, landscapers, dirt work companies, and local service businesses that need more calls, trust, and local visibility.",
  keywords: [
    "contractor website design Arkansas",
    "websites for contractors Arkansas",
    "roofing website design Arkansas",
    "remodeling contractor websites Arkansas",
    "plumber website design Arkansas",
    "electrician website design Arkansas",
    "landscaping website design Arkansas",
    "construction website design Arkansas",
    "excavating website design Arkansas",
    "local SEO for contractors Arkansas",
    "contractor web designer Arkansas",
  ],
  alternates: {
    canonical: `${siteUrl}/contractor-websites`,
  },
  openGraph: {
    title: "Contractor Website Design in Arkansas",
    description:
      "Clean, fast, Google-ready websites for Arkansas contractors and local service businesses.",
    url: `${siteUrl}/contractor-websites`,
    siteName: "Hometown Web Services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contractor Website Design in Arkansas",
      },
    ],
  },
};

const contractorVideos = [
  {
    title: "Mayo’s Remodeling",
    label: "Remodeling Demo",
    text: "A modern remodeling website demo built around services, project photos, trust points, and quote requests.",
    src: "/videos/mayos.mp4",
  },
  {
    title: "TG Services & Excavating",
    label: "Excavating Demo",
    text: "A contractor-style demo built around dirt work, land clearing, drainage, fencing, and real work-photo sections.",
    src: "/videos/TGdemo.mp4",
  },
  {
    title: "Onyx Ridge",
    label: "Contractor Site",
    text: "A rugged contractor website built around service areas, calls, trust, and a stronger mobile experience.",
    src: "/videos/onyxridge.mp4",
  },
];

const contractorTypes = [
  "Roofing companies",
  "Remodeling contractors",
  "General contractors",
  "Plumbers",
  "Electricians",
  "HVAC companies",
  "Landscapers",
  "Concrete contractors",
  "Excavating companies",
  "Dirt work businesses",
  "Cleaning companies",
  "Handyman services",
];

const essentials = [
  {
    title: "Clear service sections",
    text: "People should know exactly what kind of work you do without digging through paragraphs or Facebook posts.",
  },
  {
    title: "Real work photos",
    text: "Finished projects, before-and-afters, equipment, crews, and jobsite photos build trust fast.",
  },
  {
    title: "Service areas",
    text: "Google and customers both need to understand what towns, counties, and areas you actually serve.",
  },
  {
    title: "Fast call and quote paths",
    text: "Mobile visitors should be able to call, text, or request a quote without hunting for the button.",
  },
  {
    title: "Reviews and trust signals",
    text: "Licensing, insurance, reviews, years in business, warranties, and local proof all help people feel safe reaching out.",
  },
  {
    title: "Google-ready structure",
    text: "Clean headings, metadata, local wording, service pages, and schema help search engines understand the business.",
  },
];

const problems = [
  "The site looks outdated compared to the quality of the work",
  "Services are not explained clearly",
  "There are not enough real photos or proof",
  "The phone number or quote button is hard to find",
  "Google cannot clearly understand the service areas",
  "Everything important is buried on Facebook",
];

const faqs = [
  {
    question: "Do contractors really need a website?",
    answer:
      "Yes. A contractor website gives customers one clear place to see your services, photos, reviews, service areas, and contact information before they call or request a quote.",
  },
  {
    question: "Can a contractor website help with Google?",
    answer:
      "A well-built contractor website can help Google better understand your services, location, service areas, and business details, especially when paired with a strong Google Business Profile.",
  },
  {
    question: "Can you use photos from Facebook?",
    answer:
      "Yes. A lot of contractors already have strong project photos on Facebook. Those can usually be used as a starting point for a cleaner website layout.",
  },
  {
    question: "Do I have to pay before seeing a preview?",
    answer:
      "No. I can put together a free preview first so you can see the direction before committing.",
  },
];

export default function ContractorWebsitesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Contractor Website Design in Arkansas",
      provider: {
        "@type": "ProfessionalService",
        name: "Hometown Web Services",
        url: siteUrl,
        telephone: "+18702604880",
      },
      areaServed: {
        "@type": "State",
        name: "Arkansas",
      },
      serviceType: "Contractor Website Design",
      description:
        "Website design and local SEO services for Arkansas contractors, roofers, remodelers, plumbers, electricians, landscapers, excavating companies, dirt work businesses, and service businesses.",
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
                Contractor Website Design
              </p>

              <h1 className="text-balance max-w-4xl text-5xl leading-[0.95] tracking-[-0.05em] text-[var(--text-main)] md:text-7xl">
                Contractor websites built to bring in calls, quotes, and trust.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                I build clean, fast, Google-ready websites for Arkansas
                contractors and service businesses that need their online
                presence to match the quality of their work.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                Whether you do remodeling, roofing, plumbing, dirt work, lawn
                care, fencing, concrete, repairs, or property services, the goal
                is simple: make the business easier to find, easier to trust,
                and easier to contact.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/free-preview" className="btn btn-primary">
                  Get a free preview
                </Link>

                <Link href="/portfolio" className="btn btn-secondary">
                  View contractor work
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--accent)] opacity-[0.07] blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border-soft)] bg-black p-3 shadow-[var(--shadow-strong)]">
                <div className="overflow-hidden rounded-[1.75rem] bg-black">
                  <video
                    src="/videos/onyxridge.mp4"
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
                    Real work, clear services, fast contact, and stronger
                    mobile trust.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Calls and quote requests",
                text: "The layout is built around getting people from interest to action without confusion.",
              },
              {
                title: "Local SEO structure",
                text: "Service areas, headings, metadata, and content are shaped around what people search for.",
              },
              {
                title: "Proof-first design",
                text: "Photos, reviews, services, and trust points are placed where they help people decide.",
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

      {/* WHY IT MATTERS */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="section-kicker mb-4">Why it matters</p>

            <h2 className="text-balance text-4xl leading-tight md:text-6xl">
              Most contractor sites lose trust before the customer ever calls.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
            <p>
              A lot of contractors do great work, but online it does not always
              show. The site may be old, slow, thin, hard to use on a phone, or
              missing the simple information people check before reaching out.
            </p>

            <p>
              Customers want to know what you do, where you work, what the work
              looks like, whether you seem reliable, and how to contact you. If
              that takes too much effort, they usually keep scrolling.
            </p>

            <p>
              A good contractor website does not need to be complicated. It
              needs to be clear, visual, mobile-friendly, and built around the
              jobs you actually want.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="section-kicker mb-4">Common issues</p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                These are the things that quietly cost contractors leads.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              The business may be solid, but if the online presence feels
              unclear, outdated, or hard to trust, people hesitate before they
              ever ask for a quote.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem}
                className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm"
              >
                <p className="leading-7 text-[var(--text-soft)]">{problem}</p>
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
                Contractor website essentials
              </p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                A contractor site needs to answer the important questions fast.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              People are usually comparing options. The easier your site makes
              the decision, the better chance you have of getting the call.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {essentials.map((item) => (
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

      {/* DEMO WORK */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker mb-4">Contractor-style work</p>

              <h2 className="text-balance max-w-3xl text-4xl leading-tight md:text-6xl">
                A few builds and previews with contractor structure.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[var(--text-soft)]">
              These examples show the kind of layout I build for service
              businesses: clear services, strong visuals, mobile-friendly
              sections, and easy ways to call or request a quote.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {contractorVideos.map((video) => (
              <article
                key={video.title}
                className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-white shadow-sm"
              >
                <div className="relative overflow-hidden bg-black">
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-[260px] w-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-black">
                    {video.label}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl leading-tight">{video.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                    {video.text}
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

      {/* GOOD FIT */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker mb-4">Built for trades</p>

              <h2 className="text-balance max-w-3xl text-4xl leading-tight md:text-6xl">
                Good fit for contractors and local service businesses.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              The same structure works across a lot of trades because customers
              usually need the same things: proof, clarity, service area, and a
              fast way to reach out.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contractorTypes.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-[var(--border-soft)] bg-white p-5 shadow-sm"
              >
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW OFFER */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="surface mx-auto max-w-6xl p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="section-kicker mb-4">Free preview first</p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                See the contractor website direction before committing.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                Send your business name, Facebook page, current website if you
                have one, service list, service area, and a few work photos. I
                can put together a preview so you can see what a cleaner site
                could look like before paying.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-start">
              <Link href="/free-preview" className="btn btn-primary">
                Get a free preview
              </Link>

              <a
                href="sms:8702604880"
                className="text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
              >
                Text 870-260-4880 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker mb-4">Contractor website questions</p>

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

      <CTA />
      <Footer />
    </main>
  );
}