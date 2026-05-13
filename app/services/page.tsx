import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PricingSection from "@/components/sections/PricingSection";

export const metadata = {
  title: "Web Design & SEO Services in Arkansas",
  description:
    "Professional websites and SEO for Arkansas small businesses. Built to help you show up on Google and get more leads.",
};

const services = [
  {
    title: "Website Design",
    text: "Clean, modern websites built around your business, your services, and the actions you want customers to take.",
  },
  {
    title: "Local SEO Structure",
    text: "Pages, headings, content, metadata, and structure built so Google can better understand what you do and where you work.",
  },
  {
    title: "Google Business Profile Help",
    text: "Setup and optimization help for your Google listing so your business looks more complete in local searches and maps.",
  },
  {
    title: "Lead-Focused Layouts",
    text: "Clear calls, text links, quote buttons, service sections, and mobile-first layouts that make contacting you simple.",
  },
];

const resultPoints = [
  {
    title: "People understand what you offer",
    text: "Your services, pricing direction, photos, reviews, and contact options are organized in one clear place.",
  },
  {
    title: "Your business looks more trustworthy",
    text: "A better site gives people confidence before they call, especially when they are comparing you against other local businesses.",
  },
  {
    title: "Your site supports local search",
    text: "The structure is built around the actual searches people make when they need a business like yours.",
  },
];

const visibilityItems = [
  {
    title: "Basic SEO setup",
    text: "Your site is built so Google can understand it — pages, structure, keywords, metadata, and performance all handled the right way.",
  },
  {
    title: "Google Business Profile optimization",
    text: "I help set up or improve your Google listing so you show up better in local searches, maps, and service-related searches near you.",
  },
  {
    title: "Clear local presence",
    text: "Your website, Google profile, service information, and contact details work together so customers do not have to guess.",
  },
];

const auditItems = [
  "What your current site is missing",
  "Why people may not be contacting you",
  "Where your Google presence can improve",
  "What changes would actually matter",
];

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most small business websites can be put together in a few days depending on size, photos, content, and how many changes are needed.",
  },
  {
    question: "Will my business show up on Google?",
    answer:
      "Your site will be built with proper structure and local SEO basics so it can be found. Rankings still depend on competition, your Google Business Profile, reviews, content, and other local signals.",
  },
  {
    question: "Do I need a Google Business Profile?",
    answer:
      "It helps a lot for local businesses. Your website and Google Business Profile work best when they support each other.",
  },
  {
    question: "Do I have to pay before seeing anything?",
    answer:
      "No. I can put together a free preview first so you can see the direction before committing.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Web Design and Local SEO Services",
              provider: {
                "@type": "ProfessionalService",
                name: "Hometown Web Services",
                url: "https://hometownwebservicesar.cc",
              },
              areaServed: {
                "@type": "State",
                name: "Arkansas",
              },
              serviceType: [
                "Web Design",
                "Local SEO",
                "Small Business Websites",
                "Google Business Profile Optimization",
                "Website Redesigns",
              ],
              description:
                "Web design and local SEO services for Arkansas small businesses, contractors, service companies, restaurants, and local shops.",
            }),
          }}
        />

        {/* HERO */}
        <section className="relative overflow-hidden py-24 md:py-28">
          <div className="pointer-events-none absolute right-[-160px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm text-[var(--text-soft)]">
                  Web design & local SEO services
                </p>

                <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">
                  Simple websites that actually help small businesses get found.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
                  Most small businesses rely on Facebook, word of mouth, or an
                  old site that does not explain much. I build clean, modern
                  websites that make your business easier to find, easier to
                  trust, and easier to contact.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a href="sms:8702604880" className="btn btn-primary">
                    Get a free preview
                  </a>

                  <a
                    href="#pricing"
                    className="text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
                  >
                    View pricing →
                  </a>
                </div>
              </div>

              <div className="border-l border-[var(--border-soft)] pl-6">
                <p className="leading-relaxed text-[var(--text-soft)]">
                  Built for contractors, cleaning companies, restaurants,
                  tourism businesses, shops, service companies, and local
                  Arkansas businesses that need a clearer online presence.
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    "Free preview before you pay",
                    "Mobile-first structure",
                    "Local SEO basics included",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border-t border-[var(--border-soft)] pt-3 text-sm text-[var(--text-soft)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="bg-[var(--bg-alt)] py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-4 text-sm text-[var(--text-soft)]">
                  What you get
                </p>

                <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
                  Everything your business needs online, without making it
                  complicated.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
                Your site should explain what you do, show why people should
                trust you, and make the next step obvious. That means clear
                service sections, strong mobile layout, contact options, local
                search structure, and a design that actually fits your business.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-6 transition duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl">{service.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-4 text-sm text-[var(--text-soft)]">
                  Built for real results
                </p>

                <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
                  A better site should do more than sit there.
                </h2>

                <p className="mt-6 max-w-md leading-relaxed text-[var(--text-soft)]">
                  The goal is not to make something flashy for no reason. The
                  goal is to give customers a better path from finding you to
                  contacting you.
                </p>
              </div>

              <div className="space-y-8">
                {resultPoints.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid gap-4 border-b border-[var(--border-soft)] pb-8 sm:grid-cols-[auto_1fr]"
                  >
                    <div className="text-sm text-[var(--text-soft)]">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="text-2xl leading-tight">{item.title}</h3>
                      <p className="mt-3 max-w-2xl leading-relaxed text-[var(--text-soft)]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VISIBILITY */}
        <section className="relative overflow-hidden bg-[var(--bg-alt)] py-24 md:py-28">
          <div className="pointer-events-none absolute left-[-120px] top-[120px] h-[360px] w-[360px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <p className="mb-4 text-sm text-[var(--text-soft)]">
                  Visibility
                </p>

                <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
                  It’s not just about having a site. People need to actually
                  find you.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-soft)]">
                  A lot of businesses already do good work, but online they are
                  hard to find or hard to understand. Between Facebook, scattered
                  info, and weak Google presence, people often move on to someone
                  easier to reach.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-card)]/70 p-6 md:p-8">
                <div className="space-y-7">
                  {visibilityItems.map((item) => (
                    <div
                      key={item.title}
                      className="border-b border-[var(--border-soft)] pb-7 last:border-b-0 last:pb-0"
                    >
                      <h3 className="text-xl">{item.title}</h3>

                      <p className="mt-3 leading-relaxed text-[var(--text-soft)]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <div id="pricing">
          <PricingSection />
        </div>

        {/* AUDIT OFFER */}
        <section className="py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm text-[var(--text-soft)]">
                  Free audit
                </p>

                <h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">
                  I’ll show you what’s holding your business back online.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
                  If you are not sure what you need, I can take a look at your
                  current setup and point out what is missing — your website,
                  Google listing, mobile layout, service structure, or anything
                  that might be costing you calls.
                </p>
              </div>

              <div className="border-l border-[var(--border-soft)] pl-6">
                <p className="leading-relaxed text-[var(--text-soft)]">
                  I’ll break it down in simple terms: what is working, what is
                  not, and what would actually make a difference.
                </p>

                <div className="mt-8 space-y-3">
                  {auditItems.map((item) => (
                    <div
                      key={item}
                      className="border-t border-[var(--border-soft)] pt-3 text-sm text-[var(--text-soft)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="sms:8702604880"
                  className="mt-8 inline-block text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
                >
                  Request a free audit →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[var(--bg-alt)] py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-4 text-sm text-[var(--text-soft)]">
                  Common questions
                </p>

                <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
                  Straight answers before we build anything.
                </h2>
              </div>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="border-b border-[var(--border-soft)] pb-6"
                  >
                    <h3 className="text-xl">{faq.question}</h3>

                    <p className="mt-3 leading-relaxed text-[var(--text-soft)]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--text-main)] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
              <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-[100px]" />
              <div className="pointer-events-none absolute bottom-[-160px] left-[20%] h-[320px] w-[320px] rounded-full bg-white/5 blur-[120px]" />

              <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="mb-5 text-sm text-white/60">
                    Ready when you are
                  </p>

                  <h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">
                    Want to see what your site could look like?
                  </h2>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                    I’ll put together a full preview based on your business so
                    you can see exactly how it would look and work before
                    committing.
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <a
                      href="sms:8702604880"
                      className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      Get a free preview
                    </a>

                    <a
                      href="https://share.google/f18YjPUwYQatjbbnZ"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      View Google profile →
                    </a>
                  </div>
                </div>

                <div className="lg:pl-8">
                  <p className="max-w-md leading-relaxed text-white/70">
                    No upfront payment, no pressure, and no guessing. You get to
                    look at something real first and decide if it feels right for
                    your business.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {[
                      "Free preview first",
                      "Free revisions",
                      "Mobile-first build",
                      "Local SEO structure",
                    ].map((item) => (
                      <div
                        key={item}
                        className="border-t border-white/15 pt-3 text-sm text-white/65"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
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