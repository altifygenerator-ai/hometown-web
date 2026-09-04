import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { createPageMetadata } from "@/lib/seo";
import { PHONE_CALL_URL, PHONE_DASHED, PHONE_TEXT_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Business Systems & Web Apps in Arkansas",
  description:
    "Custom business software, admin dashboards, application flows, portals, booking systems, and web apps built for Arkansas businesses that need more than a basic website.",
  path: "/custom-business-systems",
});

const systemTypes = [
  {
    title: "Application flows",
    text: "Online applications, intake forms, review steps, approval workflows, and organized submission handling.",
  },
  {
    title: "Admin dashboards",
    text: "A single place to manage leads, applications, customers, listings, bookings, or other business activity.",
  },
  {
    title: "Customer and staff portals",
    text: "Logins, user roles, protected areas, account views, and simple tools for customers, staff, or partners.",
  },
  {
    title: "Booking and management systems",
    text: "Availability, reservations, property or service management, calendars, and payment-connected workflows.",
  },
  {
    title: "Internal tools",
    text: "Systems that replace spreadsheet chaos, scattered texts, or messy manual processes with one cleaner workflow.",
  },
  {
    title: "SaaS-style web apps",
    text: "Interactive software products with accounts, saved data, subscriptions, notifications, and repeat use.",
  },
];

const processSteps = [
  {
    title: "Start with the workflow",
    text: "We map how you are doing it now, where it breaks down, and what needs to happen instead.",
  },
  {
    title: "Plan the useful version first",
    text: "The first version should solve the main problem cleanly. It does not have to be bloated to be valuable.",
  },
  {
    title: "Build around the real use case",
    text: "Forms, dashboards, roles, statuses, and automations are built around how your business actually works.",
  },
  {
    title: "Improve from there",
    text: "Once the core system works, we can expand it in practical stages instead of guessing up front.",
  },
];

const faqs = [
  {
    question: "What counts as a custom business system?",
    answer:
      "Anything that goes beyond a normal brochure website. That can mean online applications, admin dashboards, portals, booking systems, lead tracking, workflow tools, subscriptions, or an actual web app with user accounts and saved data.",
  },
  {
    question: "Do I need to know exactly what to ask for?",
    answer:
      "No. Most people do not know the technical name for what they need. If you can explain how you are doing it now and what you wish would happen instead, that is enough to start from.",
  },
  {
    question: "Can this tie into payments, forms, or email updates?",
    answer:
      "Yes. Depending on the project, systems can include payments, subscriptions, role-based access, automated emails, saved records, search, status tracking, dashboards, and more.",
  },
  {
    question: "Is this only for big companies?",
    answer:
      "Not at all. A lot of small businesses reach a point where the work itself is fine, but the process around it is clunky. A smaller custom system can fix that without needing a huge enterprise build.",
  },
];

const ctsScreens = [
  {
    src: "/custom-business-systems/cts/website-hero.png",
    alt: "Clark Transportation Services recruiting website homepage with truck hero section and quick apply button.",
    title: "Public recruiting website",
    text: "A polished front-end recruiting site built to bring drivers in and guide them into the application process.",
    large: true,
  },
  {
    src: "/custom-business-systems/cts/quick-apply.png",
    alt: "Clark Transportation Services quick apply form with fields for driver information and experience.",
    title: "Quick apply flow",
    text: "A focused intake flow that captures the basics fast and makes it easy for the company to follow up.",
  },
  {
    src: "/custom-business-systems/cts/admin-login.png",
    alt: "Clark Transportation Services private office access login page for staff and admin users.",
    title: "Staff login",
    text: "Protected office access for authorized users who need to manage applications and website content.",
  },
  {
    src: "/custom-business-systems/cts/admin-dashboard.png",
    alt: "Clark Transportation Services admin dashboard showing quick apply counts, submitted applications, and recent applicants.",
    title: "Admin dashboard",
    text: "A central dashboard for recruiting activity, review status, and day-to-day management.",
  },
  {
    src: "/custom-business-systems/cts/website-management.png",
    alt: "Clark Transportation Services admin website management screen with content blocks for recruiting content, leadership, media, and testimonials.",
    title: "Website content controls",
    text: "An admin area for managing the public site without digging around in code every time something changes.",
  },
];

const webvidenceScreens = [
  {
    src: "/custom-business-systems/webvidence/public-home.png",
    alt: "Webvidence public homepage showing prospecting routine and example opportunity file.",
    title: "Public product page",
    text: "A public-facing product page that explains the app clearly and sells the value of the workflow.",
    large: true,
  },
  {
    src: "/custom-business-systems/webvidence/today-dashboard.png",
    alt: "Webvidence dashboard showing today's prospecting session in progress with session stats.",
    title: "Today dashboard",
    text: "An app dashboard built around repeat use, active sessions, and practical next actions.",
  },
  {
    src: "/custom-business-systems/webvidence/saved-prospects.png",
    alt: "Webvidence saved prospects pipeline with statuses, filters, due dates, and open buttons.",
    title: "Pipeline and tracking",
    text: "Saved prospect management with filters, statuses, due dates, and follow-up visibility.",
  },
  {
    src: "/custom-business-systems/webvidence/find-market.png",
    alt: "Webvidence find market page for searching prospects by business type and location.",
    title: "Prospect search workflow",
    text: "A search interface designed to help users build a focused prospecting session around one market.",
  },
  {
    src: "/custom-business-systems/webvidence/outreach-settings.png",
    alt: "Webvidence outreach settings screen with profile details, project range, customer type, and contact preferences.",
    title: "User settings and profile logic",
    text: "Profile and outreach settings that shape how the product behaves for each user.",
  },
];

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/custom-business-systems#service`,
    name: "Custom Business Systems and Web App Development in Arkansas",
    url: `${SITE_URL}/custom-business-systems`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Hometown Web Services",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "State",
      name: "Arkansas",
    },
    serviceType: [
      "Custom Business Systems",
      "Web App Development",
      "Admin Dashboard Development",
      "Application Flow Development",
      "Customer Portal Development",
      "Booking System Development",
    ],
    description:
      "Custom business software, admin systems, application flows, dashboards, portals, booking systems, and SaaS-style web apps built for Arkansas businesses.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/custom-business-systems#faq`,
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

function ScreenshotCard({
  src,
  alt,
  title,
  text,
  large = false,
}: {
  src: string;
  alt: string;
  title: string;
  text: string;
  large?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-white shadow-[var(--shadow-soft)] ${
        large ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] w-full bg-[var(--bg-alt)]">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      <div className="p-5 md:p-6">
        <p className="text-lg leading-tight">{title}</p>
        <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{text}</p>
      </div>
    </div>
  );
}

function ProofGallery({
  items,
}: {
  items: { src: string; alt: string; title: string; text: string; large?: boolean }[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <ScreenshotCard key={item.src} {...item} />
      ))}
    </div>
  );
}

export default function CustomBusinessSystemsPage() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageSchema),
          }}
        />

        <section className="relative overflow-hidden py-24 md:py-28">
          <div className="pointer-events-none absolute left-[-140px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[var(--accent)] opacity-[0.06] blur-[110px]" />
          <div className="pointer-events-none absolute right-[-120px] top-[70px] h-[300px] w-[300px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[110px]" />

          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm text-[var(--text-soft)]">Custom business systems and web apps</p>

                <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">
                  When a normal website is not enough, I can build the system behind it too.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  Some businesses need more than pages and contact forms. They need applications,
                  dashboards, booking logic, customer portals, internal tools, or an app that helps
                  the business actually run better. That is the kind of work this is for.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/free-preview" className="btn btn-primary">
                    Talk about your system
                  </Link>

                  <Link href="#proof" className="btn btn-secondary">
                    See the proof
                  </Link>
                </div>
              </div>

              <div className="premium-shell rounded-[2rem] p-6">
                <p className="text-sm font-medium text-[var(--text-main)]">Good fit for this kind of project</p>

                <div className="mt-5 grid gap-3">
                  {[
                    "You are managing too much through texts, email, or spreadsheets.",
                    "Customers or applicants need to submit something online and you need a clean place to manage it.",
                    "You need a portal, dashboard, or workflow built around how your business actually works.",
                    "You have an app idea or internal tool idea and want a practical first version built.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[var(--border-soft)] bg-white/75 px-4 py-3 text-sm text-[var(--text-soft)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-alt)] py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="section-kicker mb-4">What this covers</p>
                <h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">
                  Built for the parts of the business that need real workflow, not just better wording.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                This can be customer-facing, internal, or both. The point is to make the process easier to use,
                easier to manage, and easier to grow without duct-taping ten tools together.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {systemTypes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6 shadow-[var(--shadow-soft)]"
                >
                  <p className="text-xl">{item.title}</p>
                  <p className="mt-4 leading-7 text-[var(--text-soft)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="py-24 md:py-28 scroll-mt-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="section-kicker mb-4">Proof</p>
                <h2 className="max-w-3xl text-3xl leading-tight md:text-5xl">Real screenshots from the kind of systems I mean.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                One example is a real business operations build. The other is a product-style app. Together they show public-facing pages,
                intake flows, admin tools, user settings, and ongoing workflow management.
              </p>
            </div>

            <div className="grid gap-14">
              <div className="rounded-[2.5rem] border border-[var(--border-soft)] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
                <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                  <div>
                    <p className="mb-4 text-sm text-[var(--text-soft)]">Clark Transportation Services</p>
                    <h3 className="text-3xl leading-tight md:text-5xl">Driver recruiting website, application flow, and protected admin system.</h3>
                    <p className="mt-6 leading-8 text-[var(--text-soft)]">
                      This project goes beyond a normal recruiting site. It combines a public-facing website with driver intake,
                      quick apply and full application paths, a protected staff login, and an admin side that helps the company review applications
                      and manage public website content in one place.
                    </p>

                    <div className="mt-7 grid gap-3">
                      {[
                        "Public recruiting site tied directly into hiring",
                        "Quick apply and full application paths",
                        "Protected staff login and role-based admin access",
                        "Dashboard views and content management for daily operations",
                      ].map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 text-sm text-[var(--text-soft)]"
                        >
                          {point}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a href="https://clark-transportation.com" target="_blank" rel="noreferrer" className="btn btn-secondary">
                        View live site
                      </a>
                      <Link href="/free-preview" className="text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]">
                        Ask about a similar system →
                      </Link>
                    </div>
                  </div>

                  <ProofGallery items={ctsScreens} />
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-[var(--border-soft)] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
                <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                  <div>
                    <p className="mb-4 text-sm text-[var(--text-soft)]">Webvidence</p>
                    <h3 className="text-3xl leading-tight md:text-5xl">A product-style app built around prospecting, evidence, outreach, and tracking.</h3>
                    <p className="mt-6 leading-8 text-[var(--text-soft)]">
                      Webvidence is a more app-like example. It is built to help users search markets, surface prospects,
                      gather useful evidence, manage outreach settings, and keep track of saved prospects and follow-up work over time.
                      That makes it a strong example of workflow-first software, not just a set of static pages.
                    </p>

                    <div className="mt-7 grid gap-3">
                      {[
                        "Public-facing product marketing page",
                        "App dashboard built for repeat use",
                        "Search and market workflow tools",
                        "Pipeline tracking, settings, and user-specific logic",
                      ].map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 text-sm text-[var(--text-soft)]"
                        >
                          {point}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link href="/portfolio#tools-specialty" className="btn btn-secondary">
                        See portfolio section
                      </Link>
                      <Link href="/free-preview" className="text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]">
                        Talk through your app idea →
                      </Link>
                    </div>
                  </div>

                  <ProofGallery items={webvidenceScreens} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg-alt)] py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <div>
                <p className="section-kicker mb-4">How it usually works</p>
                <h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">
                  The goal is to solve the real problem first, not overbuild something fancy and messy.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                A lot of software projects get bloated because people try to build everything at once. I would rather build the useful version first,
                get it working, and grow it from there.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6 shadow-[var(--shadow-soft)]"
                >
                  <p className="text-sm text-[var(--text-soft)]">0{index + 1}</p>
                  <h3 className="mt-4 text-xl">{step.title}</h3>
                  <p className="mt-4 leading-7 text-[var(--text-soft)]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="section-kicker mb-4">FAQ</p>
                <h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">Common questions about custom systems and app-style builds.</h2>
              </div>

              <div className="grid gap-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6 shadow-[var(--shadow-soft)]"
                  >
                    <h3 className="text-xl leading-8">{faq.question}</h3>
                    <p className="mt-3 leading-7 text-[var(--text-soft)]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--text-main)] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
              <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-[100px]" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="mb-5 text-sm text-white/60">Need a system, not just a site?</p>
                  <h2 className="max-w-2xl text-4xl leading-tight md:text-6xl">
                    Tell me what you are doing now and what you wish would happen instead.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                    That is usually enough to start the conversation. We can figure out the cleaner workflow,
                    the first useful version, and whether it makes sense as a customer portal, admin system, booking flow, or web app.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-start">
                  <Link
                    href="/free-preview"
                    className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    Start the conversation
                  </Link>

                  <a href={PHONE_CALL_URL} className="text-sm text-white/65 transition hover:text-white">
                    Call {PHONE_DASHED} →
                  </a>

                  <a href={PHONE_TEXT_URL} className="text-sm text-white/65 transition hover:text-white">
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
