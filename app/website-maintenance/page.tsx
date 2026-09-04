import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { createPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Website Maintenance & Updates in Arkansas",
  description:
    "Website maintenance and ongoing updates for Arkansas small businesses, including content changes, new photos, service updates, fixes, SEO checks, and launch support.",
  path: "/website-maintenance",
});

const maintenanceItems = [
  "Service, price, and business-information updates",
  "New photos, galleries, projects, and review updates",
  "Page edits and new sections when the business changes",
  "Broken-link, form, mobile, and layout fixes",
  "Basic technical SEO and indexing checks after meaningful changes",
  "Help keeping the website and Google Business Profile information consistent",
];

const faqs = [
  {
    question: "Do you maintain websites after you build them?",
    answer:
      "Yes. Ongoing support can cover normal content changes, new photos, service updates, small layout changes, troubleshooting, and keeping the site current after launch.",
  },
  {
    question: "Can you update a website you did not originally build?",
    answer:
      "Often, yes. It depends on the platform, access, and condition of the existing site. I can take a look first and tell you whether updating it makes sense or whether a rebuild would be cleaner.",
  },
  {
    question: "Does website maintenance include SEO?",
    answer:
      "Basic maintenance can include checking metadata, internal links, indexing, sitemap changes, business information, and search structure when pages change. Larger SEO work is handled as a separate scope when needed.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/website-maintenance#service`,
    name: "Website Maintenance and Updates in Arkansas",
    url: `${SITE_URL}/website-maintenance`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "State", name: "Arkansas" },
    serviceType: "Website Maintenance",
    description:
      "Ongoing website maintenance, updates, fixes, content changes, SEO checks, and small-business web support in Arkansas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function WebsiteMaintenancePage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative overflow-hidden px-6 py-24 md:py-28">
          <div className="pointer-events-none absolute right-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="section-kicker mb-5">Website maintenance</p>
                <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">
                  Website updates and support for Arkansas small businesses.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  Websites are not finished forever the day they launch. I help
                  small businesses keep services, photos, reviews, contact info,
                  pages, and the technical basics current without turning every
                  small update into a project.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/free-preview" className="btn btn-primary">
                    Ask about website support
                  </Link>
                  <Link href="/website-redesigns" className="btn btn-secondary">
                    Need a full redesign?
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[var(--text-main)] p-7 text-white md:p-8">
                <p className="text-sm uppercase tracking-[0.16em] text-white/55">After launch</p>
                <h2 className="mt-4 text-3xl leading-tight">Keep the site as current as the business.</h2>
                <p className="mt-5 leading-7 text-white/70">
                  New work, new services, new photos, new reviews, and even a new
                  phone number should make it onto the site quickly. Keeping those
                  details aligned also helps customers and search engines get a
                  consistent picture of the business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-kicker mb-4">Ongoing support</p>
                <h2 className="text-3xl leading-tight md:text-5xl">
                  The normal changes a working small-business site actually needs.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {maintenanceItems.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-5 leading-7 text-[var(--text-soft)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-kicker mb-4">Questions</p>
                <h2 className="text-3xl leading-tight md:text-5xl">Website support without the runaround.</h2>
              </div>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-[var(--border-soft)] pb-6">
                    <h3 className="text-xl">{faq.question}</h3>
                    <p className="mt-3 leading-7 text-[var(--text-soft)]">{faq.answer}</p>
                  </div>
                ))}
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
