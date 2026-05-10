import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const siteUrl = "https://hometownwebservicesar.cc";

export const metadata: Metadata = {
  title: "Contractor Website Design in Arkansas | Hometown Web Services",
  description:
    "Custom contractor websites for Arkansas roofers, remodelers, plumbers, electricians, landscapers, and service businesses that need better local visibility and more calls.",
  keywords: [
    "contractor website design Arkansas",
    "websites for contractors Arkansas",
    "roofing website design Arkansas",
    "remodeling contractor websites Arkansas",
    "plumber website design Arkansas",
    "electrician website design Arkansas",
    "landscaping website design Arkansas",
    "construction website design Arkansas",
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
    title: "Mayos Home Remodeling",
    text: "A simple contractor website showcasing their work and services.",
    src: "/videos/mayos.mp4",
  },
  {
    title: "Ozark Pond Services",
    text: "A service-area style site built for a local pond company with multiple locations.",
    src: "/videos/ozarkpond.mp4",
  },
  {
    title: "Onyx Ridge Plumbing",
    text: "A strong service-area style site built for emergency calls, service pages, and mobile users.",
    src: "/videos/onyxridge.mp4",
  },
];

const services = [
  "Roofing companies",
  "Remodeling contractors",
  "General contractors",
  "Plumbers",
  "Electricians",
  "HVAC companies",
  "Landscapers",
  "Concrete contractors",
  "Cleaning companies",
  "Home repair businesses",
  "Flooring installers",
  "Painting companies",
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
      },
      areaServed: {
        "@type": "State",
        name: "Arkansas",
      },
      serviceType: "Contractor Website Design",
      description:
        "Website design and local SEO services for Arkansas contractors, roofers, remodelers, plumbers, electricians, landscapers, and service businesses.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do contractors need a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A contractor website helps customers see your services, service area, photos, reviews, and contact information before they call or request a quote.",
          },
        },
        {
          "@type": "Question",
          name: "Can a contractor website help with Google?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A well-built contractor website can help Google understand your services, location, and business details better, especially when paired with local SEO and a strong Google Business Profile.",
          },
        },
        {
          "@type": "Question",
          name: "What types of contractors does Hometown Web Services build websites for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hometown Web Services builds websites for Arkansas roofers, remodelers, plumbers, electricians, landscapers, HVAC companies, cleaning companies, and other local service businesses.",
          },
        },
      ],
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

      <section className="bg-depth relative overflow-hidden px-6 py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-6xl">
          <span className="badge">Contractor Website Design</span>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1 className="max-w-4xl text-5xl leading-[0.95] text-[var(--text-main)] md:text-7xl">
                Websites for contractors that need calls, not confusion.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                I build clean, fast, Google-ready websites for Arkansas
                contractors, roofers, remodelers, plumbers, electricians,
                landscapers, and local service businesses that need to look more
                professional and be easier to find.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Get a Free Preview
                </Link>

                <Link href="/portfolio" className="btn btn-secondary">
                  View Recent Work
                </Link>
              </div>
            </div>

            <div className="card-strong overflow-hidden p-3">
              <div className="overflow-hidden rounded-[1.5rem] bg-black">
                <video
                  src="/videos/ozarkroofdemo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-[360px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="badge">Why it matters</span>
            <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
              Most contractor sites lose the job before the customer ever calls.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
            <p>
              A lot of contractor websites are slow, outdated, hard to use on a
              phone, or they hide the basic stuff people are looking for. Your
              services, photos, phone number, quote form, reviews, and service
              areas should all be easy to find.
            </p>

            <p>
              The goal is simple: make your business look legit, make Google
              understand what you do, and make it easy for somebody to call,
              text, or request a quote without digging around.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-alt)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <span className="badge">Demo work</span>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">
              A few contractor-style builds and previews.
            </h2>

            <p className="max-w-md text-[var(--text-soft)]">
              Swap these video paths with your actual contractor site demos when
              you drop the MP4s into your public/videos folder.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contractorVideos.map((video) => (
              <article key={video.title} className="card overflow-hidden p-3">
                <div className="overflow-hidden rounded-[1.25rem] bg-black">
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-[260px] w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-xl">{video.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
                    {video.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <span className="badge">Built for trades</span>

          <h2 className="mt-5 max-w-3xl text-4xl leading-tight md:text-5xl">
            Good fit for contractors and local service businesses.
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-[var(--border-soft)] bg-white p-5">
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="surface mx-auto max-w-6xl p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Google-ready structure",
                text: "Clean metadata, service-focused copy, local wording, schema, and pages that make sense to search engines.",
              },
              {
                title: "Mobile-first layouts",
                text: "Most local leads are on phones, so the site needs to load fast and make calling or requesting a quote easy.",
              },
              {
                title: "Built around trust",
                text: "Your photos, services, reviews, service areas, and contact info are laid out so people feel comfortable reaching out.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--text-soft)]">
                  {item.text}
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