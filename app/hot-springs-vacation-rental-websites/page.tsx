import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const siteUrl = "https://hometownwebservicesar.com";

export const metadata: Metadata = {
  title:
    "Hot Springs Vacation Rental Website Design | Cabin & Airbnb Websites",
  description:
    "Website design for Hot Springs cabins, Airbnbs, vacation rentals, lake stays, boutique lodging, and rental owners who want a stronger online presence beyond booking platforms.",
  alternates: {
    canonical: `${siteUrl}/hot-springs-vacation-rental-websites`,
  },
  openGraph: {
    title: "Hot Springs Vacation Rental Website Design",
    description:
      "Photo-first websites for Hot Springs cabins, Airbnbs, vacation rentals, lake stays, and boutique lodging.",
    url: `${siteUrl}/hot-springs-vacation-rental-websites`,
    siteName: "Hometown Web Services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hot Springs Vacation Rental Website Design",
      },
    ],
  },
};

const rentalTypes = [
  "Cabins",
  "Airbnbs",
  "Vrbo rentals",
  "Lake houses",
  "Tiny homes",
  "Boutique stays",
  "A-frame cabins",
  "Family rentals",
  "Couples retreats",
  "Pet-friendly stays",
  "Direct booking pages",
  "Property owner sites",
];

const rentalFeatures = [
  {
    title: "Photo-first layout",
    text: "Rental websites should lead with strong photos, atmosphere, rooms, outdoor spaces, and the experience guests are booking.",
  },
  {
    title: "Booking links",
    text: "Your site can link to Airbnb, Vrbo, OwnerRez, Lodgify, direct booking pages, or whatever booking setup you already use.",
  },
  {
    title: "Amenities and stay details",
    text: "Guests should quickly see beds, bathrooms, parking, pet rules, hot tub, lake access, kitchen details, Wi-Fi, and house rules.",
  },
  {
    title: "Local area content",
    text: "Hot Springs visitors often care about Bathhouse Row, Lake Hamilton, trails, restaurants, downtown, Oaklawn, and nearby attractions.",
  },
  {
    title: "Trust and reviews",
    text: "Guest reviews, host info, policies, photos, and clear contact details make the rental feel more official.",
  },
  {
    title: "Google-ready structure",
    text: "A website gives the property a cleaner search presence beyond only relying on crowded booking platforms.",
  },
];

const faqs = [
  {
    question: "Do vacation rentals need their own website?",
    answer:
      "A booking platform can be useful, but a separate website gives your rental its own branded home online, better search potential, and a cleaner place to show photos, amenities, local info, and booking links.",
  },
  {
    question: "Can the site still link to Airbnb or Vrbo?",
    answer:
      "Yes. The site can send guests to Airbnb, Vrbo, OwnerRez, Lodgify, direct booking software, or any booking link you already use.",
  },
  {
    question: "Can you build a cabin website from my existing listing?",
    answer:
      "Yes. I can usually use your existing listing photos, description, amenities, reviews, and location info as a starting point for a cleaner website preview.",
  },
  {
    question: "Do I have to offer direct booking?",
    answer:
      "No. The site can start simple with booking links to Airbnb or Vrbo, then expand later if you want direct booking or owner-managed inquiries.",
  },
];

export default function HotSpringsVacationRentalWebsitesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Hot Springs Vacation Rental Website Design",
      url: `${siteUrl}/hot-springs-vacation-rental-websites`,
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
      serviceType: "Vacation Rental Website Design",
      description:
        "Website design for Hot Springs cabins, Airbnbs, vacation rentals, lake stays, boutique lodging, and rental owners.",
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
                Hot Springs Vacation Rental Websites
              </p>

              <h1 className="text-balance max-w-4xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Websites for Hot Springs cabins, Airbnbs, and vacation rentals.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                I build clean, photo-first websites for Hot Springs rentals that
                need a stronger online presence beyond only Airbnb or Vrbo. Show
                the property, link to booking, explain the stay, and help guests
                trust it before they book.
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
                    src="/videos/hotsprings.mp4"
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
                    Built around the stay
                  </p>

                  <h2 className="mt-3 text-2xl leading-tight">
                    Photos, booking links, amenities, local info, and a cleaner
                    guest path.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Better than a listing alone",
                text: "A booking listing is useful, but your own site gives the rental a branded home online.",
              },
              {
                title: "Built for guest trust",
                text: "Photos, amenities, reviews, location details, and booking links help people feel better before they book.",
              },
              {
                title: "Built for Hot Springs visitors",
                text: "Local content can connect the stay to downtown, lakes, trails, restaurants, events, and area attractions.",
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
              Booking platforms are useful, but they do not build your own
              online home.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
            <p>
              Airbnb and Vrbo help people book, but your property is still
              sitting inside someone else’s platform. Your own website gives the
              rental a cleaner branded place to send guests, show photos, answer
              questions, and connect the stay to Hot Springs.
            </p>

            <p>
              For cabins and rentals, the website should feel visual, simple,
              and useful. Guests want to see the space, understand the amenities,
              know what is nearby, and have a clear booking path.
            </p>

            <p>
              It does not have to start as a full booking system. It can start as
              a clean property website with booking links, then grow into direct
              booking later if that makes sense.
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
                Rental owners who want a cleaner place to show the property.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              This works for simple booking-link sites, branded cabin pages,
              direct-booking setups later, and property owners who want the
              rental to feel more official online.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rentalTypes.map((type) => (
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

      {/* FEATURES */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="section-kicker mb-4">
                Rental website features
              </p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                Give guests the info they need before they book.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              A good rental website should help people picture the stay, answer
              the common questions, and make the booking path easy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rentalFeatures.map((item) => (
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

      {/* HOT SPRINGS LOCAL CONTENT */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="surface mx-auto max-w-6xl p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="section-kicker mb-4">Hot Springs visitor angle</p>

              <h2 className="text-balance text-4xl leading-tight md:text-6xl">
                The local area can help sell the stay too.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
              <p>
                A Hot Springs rental site can do more than show bedrooms and
                amenities. It can help guests understand what is nearby, why the
                location is useful, and what kind of trip the rental fits.
              </p>

              <p>
                Useful local content might include Bathhouse Row, downtown Hot
                Springs, Lake Hamilton, Oaklawn, hiking, restaurants, family
                activities, nearby marinas, and simple planning info for guests.
              </p>

              <p>
                That kind of content helps the property feel more helpful and
                gives the site more search depth than a basic landing page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="section-kicker mb-4">Related Hot Springs pages</p>

            <h2 className="text-balance text-4xl leading-tight md:text-6xl">
              Part of a stronger Hot Springs website cluster.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/locations/hot-springs-ar"
              className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <p className="section-kicker mb-4">Main page</p>
              <h3 className="text-2xl">Web Design in Hot Springs</h3>
              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                The broad Hot Springs web design page for local businesses,
                contractors, rentals, and tourism companies.
              </p>
            </Link>

            <Link
              href="/vacation-rental-websites"
              className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <p className="section-kicker mb-4">Rental websites</p>
              <h3 className="text-2xl">Vacation Rental Websites</h3>
              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                The main service page for cabins, Airbnbs, short-term rentals,
                and rental owners.
              </p>
            </Link>

            <Link
              href="/hot-springs-contractor-websites"
              className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <p className="section-kicker mb-4">Contractors</p>
              <h3 className="text-2xl">Hot Springs Contractor Websites</h3>
              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                A focused page for Hot Springs contractors and service
                businesses that need more calls and quote requests.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
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
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--text-main)] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-[100px]" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm text-white/60">
                  Free preview first
                </p>

                <h2 className="text-balance max-w-2xl text-4xl leading-tight md:text-6xl">
                  Want to see what your rental site could look like?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  Send the listing link, photos, property name, booking link, and
                  anything you want guests to know. I can put together a preview
                  before you commit.
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