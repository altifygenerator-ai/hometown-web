import type { Metadata } from "next";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FreePreviewForm from "@/components/FreePreviewForm";
import { createPageMetadata } from "@/lib/seo";
import { PHONE_CALL_URL, PHONE_DASHED, PHONE_TEXT_URL } from "@/lib/site";

const siteUrl = "https://www.hometownwebservicesar.com";

export const metadata: Metadata = createPageMetadata({
  title: "Free Website Preview in Arkansas",
  description:
    "Request a free working website preview for your Arkansas business. See the design direction, mobile layout, and contact flow before paying or committing.",
  path: "/free-preview",
});

const sendItems = [
  "Your business name",
  "Your Facebook page or current website",
  "What services you offer",
  "What towns or areas you serve",
  "A few photos if you have them",
  "What you want more of: calls, quote requests, bookings, messages, or trust",
];

const processSteps = [
  {
    title: "Send the basics",
    text: "You send your business info, current links, photos, and what you want the site to help with.",
  },
  {
    title: "I build a working preview",
    text: "I put together a real homepage or site direction so you can see how your business could look online.",
  },
  {
    title: "You look it over",
    text: "You can decide if the direction feels right before paying or committing to anything.",
  },
  {
    title: "Then we tighten and launch",
    text: "If you want to move forward, we adjust the copy, layout, photos, pages, and launch it properly.",
  },
];

const goodFits = [
  "Contractors and remodelers",
  "Cleaning companies",
  "Lawn care and property services",
  "Restaurants and food trucks",
  "Cabins and vacation rentals",
  "Daycares and education programs",
  "Local shops and service businesses",
  "Businesses mostly relying on Facebook right now",
];

const faqs = [
  {
    question: "Do I have to pay before seeing anything?",
    answer:
      "No. The point of the free preview is to let you see the direction first before committing.",
  },
  {
    question: "What if I do not have good photos yet?",
    answer:
      "That is okay. I can work from what you already have, use placeholders where needed, and show you where better photos would help.",
  },
  {
    question: "Can you use my Facebook page for info?",
    answer:
      "Yes. A lot of local businesses already have photos, services, reviews, and updates on Facebook. I can use that as a starting point.",
  },
  {
    question: "Is this only for Arkansas businesses?",
    answer:
      "Arkansas small businesses are the main focus, but the same process can work for other local businesses too.",
  },
];

export default function FreePreviewPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/free-preview#service`,
      name: "Free Website Preview",
      url: `${siteUrl}/free-preview`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
        telephone: "+18708282562",
      },
      areaServed: {
        "@type": "State",
        name: "Arkansas",
      },
      serviceType: "Website Design Preview",
      description:
        "A free website preview for small businesses that want to see a working website direction before committing.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${siteUrl}/free-preview#faq`,
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
    <>
      <Header />

      <main className="overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <section className="relative overflow-hidden bg-depth px-6 pb-20 pt-32 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[var(--accent)] opacity-[0.08] blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[420px] w-[420px] rounded-full bg-black opacity-[0.04] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <p className="section-kicker mb-5">Free website preview</p>

                <h1 className="text-balance max-w-4xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
                  See what your business could look like online before paying.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  Fill out the preview form and it will send the details straight
                  to me. I can look over your business, current links, services,
                  photos, and goals, then put together a working direction before
                  you commit.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="#preview-form" className="btn btn-primary">
                    Fill out the preview form
                  </a>

                  <a href={PHONE_CALL_URL} className="btn btn-secondary">
                    Call {PHONE_DASHED}
                  </a>

                  <a
                    href={PHONE_TEXT_URL}
                    className="text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
                  >
                    Text instead →
                  </a>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-soft)]">
                  No upfront payment. No pressure. Just a real preview you can
                  look at and decide from.
                </p>
              </div>

              <div className="premium-shell rounded-[2rem] p-6 md:p-8">
                <p className="text-sm font-medium text-[var(--text-main)]">
                  What to send me
                </p>

                <div className="mt-5 grid gap-3">
                  {sendItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[var(--border-soft)] bg-white/70 px-4 py-3 text-sm text-[var(--text-soft)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="section-kicker mb-4">Why I do it this way</p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                A preview makes the whole process less awkward.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
              <p>
                A lot of small businesses do not want to pay for a website based
                on a vague promise. That makes sense. The preview gives you
                something real to react to before any commitment.
              </p>

              <p>
                It also helps me see what your business actually needs. Some
                businesses need a simple one-page site. Some need service pages,
                local SEO structure, better photos, a quote flow, or a cleaner
                way to show proof.
              </p>

              <p>
                The goal is to build something that fits your business, not force
                you into a generic agency package.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="section-kicker mb-4">How it works</p>

                <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                  Simple from the first message.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                You do not need to have everything perfectly organized. Send
                what you have, and I can shape it into a cleaner direction.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 grid h-10 w-10 place-items-center rounded-full bg-[var(--text-main)] text-sm text-white">
                    {index + 1}
                  </div>

                  <h3 className="text-2xl leading-tight">{step.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="section-kicker mb-4">Good fit for</p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                Local businesses that need to look easier to trust and contact.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-soft)]">
                The preview works best when your business already does good work,
                but the online presence does not fully show it yet.
              </p>
            </div>

            <div className="premium-shell rounded-[2rem] p-6 md:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {goodFits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--border-soft)] bg-white/70 px-4 py-4 text-sm text-[var(--text-soft)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-[var(--text-main)] p-6 text-white">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/55">
                  Best case
                </p>

                <h3 className="mt-4 text-3xl leading-tight">
                  You already have real work, real photos, or a Facebook page
                  with enough info to build from.
                </h3>

                <p className="mt-4 leading-7 text-white/68">
                  That is usually enough to start shaping a better homepage and
                  clearer customer path.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="preview-form">
          <FreePreviewForm />
        </div>

        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker mb-4">Questions</p>

              <h2 className="text-balance max-w-md text-4xl leading-tight md:text-6xl">
                Straight answers before anything starts.
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

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--text-main)] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
              <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-[100px]" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="mb-5 text-sm text-white/60">
                    Ready when you are
                  </p>

                  <h2 className="text-balance max-w-2xl text-4xl leading-tight md:text-6xl">
                    Send the basics and I’ll take a look.
                  </h2>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                    Start simple. Send the business name, Facebook page or
                    current site, and what you want the website to help with.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-start">
                  <a
                    href="#preview-form"
                    className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    Fill out the form
                  </a>

                  <a
                    href={PHONE_CALL_URL}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    Call {PHONE_DASHED} →
                  </a>

                  <a
                    href={PHONE_TEXT_URL}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    Text {PHONE_DASHED} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}