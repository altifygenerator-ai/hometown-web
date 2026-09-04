import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import { createPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Website Redesign Services in Arkansas",
  description:
    "Website redesigns for Arkansas small businesses with outdated, hard-to-use, or weak mobile sites. Improve trust, service structure, SEO foundations, and lead flow.",
  path: "/website-redesigns",
});

const improvements = [
  {
    title: "Clearer service structure",
    text: "Make the main services, service areas, prices or starting points, and contact options easier for customers and search engines to understand.",
  },
  {
    title: "Better mobile experience",
    text: "Rebuild around the phone: cleaner sections, readable text, faster contact paths, and less hunting for the information that matters.",
  },
  {
    title: "Stronger trust",
    text: "Use real project photos, reviews, credentials, business details, and proof in places where customers actually make decisions.",
  },
  {
    title: "Cleaner SEO foundation",
    text: "Fix headings, metadata, canonicals, internal links, service pages, local targeting, schema, sitemap structure, and other crawlable signals where needed.",
  },
];

const faqs = [
  {
    question: "Can you redesign my current website without changing the domain?",
    answer:
      "Usually, yes. A redesign can keep the existing domain while replacing or rebuilding the site behind it. The exact launch plan depends on the current platform and URL structure.",
  },
  {
    question: "Will a redesign hurt my Google rankings?",
    answer:
      "It does not have to. Existing URLs, content, redirects, canonicals, and pages that already earn traffic should be reviewed before launch so useful search history is protected instead of being thrown away.",
  },
  {
    question: "Can you use my current photos and reviews?",
    answer:
      "Yes. Real business photos, project work, reviews, services, and existing customer proof are usually the best material to build the redesign around.",
  },
  {
    question: "Do I have to pay before seeing a direction?",
    answer:
      "No. I can build a free working preview first so you can see the direction before committing to a full redesign.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/website-redesigns#service`,
    name: "Website Redesign Services in Arkansas",
    url: `${SITE_URL}/website-redesigns`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "State", name: "Arkansas" },
    serviceType: "Website Redesign",
    description:
      "Website redesign services for Arkansas small businesses that need better mobile usability, clearer services, stronger trust, and a cleaner SEO foundation.",
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

export default function WebsiteRedesignsPage() {
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
                <p className="section-kicker mb-5">Website redesigns</p>
                <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">
                  Arkansas website redesigns for businesses that have outgrown the old site.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  If the site looks dated, is hard to use on a phone, hides the
                  services, or no longer matches the business, I can rebuild it
                  without tossing out the useful parts that already exist.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/free-preview" className="btn btn-primary">
                    See a redesign preview
                  </Link>
                  <Link href="/portfolio" className="btn btn-secondary">
                    View recent work
                  </Link>
                </div>
              </div>

              <div className="premium-shell rounded-[2rem] p-7 md:p-8">
                <p className="text-sm font-medium">A redesign is not just a new coat of paint.</p>
                <p className="mt-4 text-xl leading-8 text-[var(--text-soft)]">
                  The goal is to make the business easier to understand, easier
                  to trust, easier to find, and easier to contact while protecting
                  URLs and search signals that are already doing useful work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-kicker mb-4">What gets better</p>
                <h2 className="text-3xl leading-tight md:text-5xl">
                  Fix the parts that cost trust, calls, and search visibility.
                </h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {improvements.map((item) => (
                  <div key={item.title} className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6">
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[var(--text-soft)]">{item.text}</p>
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
                <h2 className="text-3xl leading-tight md:text-5xl">Straight answers before a rebuild.</h2>
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
