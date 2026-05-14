import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";

const siteUrl = "https://hometownwebservicesar.cc";

export const metadata = {
  title: "Vacation Rental Website Design in Arkansas | Hometown Web Services",
  description:
    "Website design for Arkansas cabins, Airbnbs, vacation rentals, lodges, and short-term rental owners who want a cleaner brand, easier booking experience, and better visibility outside of crowded booking platforms.",
  alternates: {
    canonical: `${siteUrl}/vacation-rental-websites`,
  },
};

const features = [
  {
    title: "A real brand home",
    text: "Your rental gets its own place online with your name, your photos, your details, and your booking path instead of being buried inside a huge listing site.",
  },
  {
    title: "Airbnb, Vrbo, and booking links",
    text: "The site can connect people to Airbnb, Vrbo, OwnerRez, a direct booking calendar, or a simple inquiry form depending on how you already take bookings.",
  },
  {
    title: "Better guest experience",
    text: "Guests can quickly see the property, amenities, location, rules, nearby things to do, and how to book without digging through scattered information.",
  },
  {
    title: "Search-friendly structure",
    text: "The site can be built around the searches travelers actually make, like cabins near Hot Springs, lake rentals in Arkansas, or places to stay near DeGray Lake.",
  },
];

const rentalTypes = [
  "Cabins",
  "Airbnbs",
  "Vrbo listings",
  "Short-term rentals",
  "Lake rentals",
  "Tiny homes",
  "Lodges",
  "Vacation homes",
];

const faqs = [
  {
    question: "Do I still need a website if I use Airbnb or Vrbo?",
    answer:
      "Yes. Airbnb and Vrbo can still be part of your setup, but your own website gives your rental a more official home base, makes it easier to share, and gives guests a cleaner place to learn about the property before booking.",
  },
  {
    question: "Can the site connect to Airbnb, Vrbo, OwnerRez, or another booking system?",
    answer:
      "Yes. The site can link directly to your Airbnb, Vrbo, OwnerRez, booking calendar, direct inquiry form, or whatever system you already use.",
  },
  {
    question: "Can a rental website help people find me outside of booking platforms?",
    answer:
      "Yes. A properly structured website gives you a better chance of being found through Google, local travel searches, social media, referrals, and your own brand name instead of only relying on a listing platform.",
  },
];

export default function VacationRentalWebsitesPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/vacation-rental-websites#service`,
      name: "Vacation Rental Website Design in Arkansas",
      url: `${siteUrl}/vacation-rental-websites`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "State",
        name: "Arkansas",
      },
      serviceType: "Vacation Rental Website Design",
      description:
        "Website design and local SEO services for Arkansas cabins, Airbnbs, short-term rentals, lodges, lake rentals, and vacation rental businesses.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${siteUrl}/vacation-rental-websites#faq`,
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
      <section className="relative overflow-hidden bg-depth px-6 pb-20 pt-24 md:pb-24 md:pt-28">
        <div className="pointer-events-none absolute right-[-160px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="badge">Vacation Rental Websites</span>

              <h1 className="mt-6 max-w-4xl text-4xl leading-[1.02] tracking-tight text-[var(--text-main)] md:text-6xl">
                Give your cabin or vacation rental its own website, not just
                another listing.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                I build clean, photo-focused websites for cabins, Airbnbs,
                vacation rentals, lake stays, and short-term rentals that need
                to look official, be easier to find, and give guests a better
                experience than scrolling through a crowded booking platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Get a free preview
                </Link>

                <Link href="/portfolio" className="btn btn-secondary">
                  View recent work
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 scale-[1.02] rounded-[2rem] bg-black/5 blur-xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-3">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
                  <img
                    src="/images/vacation-rental-hero.png"
                    alt="Vacation rental website design preview"
                    className="h-full w-full object-cover md:h-[420px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

<div className="absolute bottom-5 left-5 right-5">
  <div className="max-w-md rounded-[1.5rem] border border-white/15 bg-black/55 p-5 backdrop-blur-md">
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
      Rental Website Preview
    </p>

    <p className="mt-3 text-2xl leading-tight text-white">
      Your brand, your photos, your booking links, and your guest info in one
      clean place.
    </p>
  </div>
</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid border-t border-[var(--border-soft)] pt-8 md:grid-cols-3">
            {[
              "Build your own rental brand",
              "Airbnb / Vrbo / OwnerRez friendly",
              "Cleaner guest experience",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-[var(--border-soft)] py-4 text-sm text-[var(--text-soft)] md:border-b-0 md:border-r md:last:border-r-0"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Why it matters
            </p>

            <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
              Booking sites are useful, but they should not be your whole brand.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
            <p>
              Airbnb, Vrbo, and other booking platforms can help fill dates, but
              your rental is packed in beside thousands of other listings. A
              dedicated website gives you something more permanent — a branded
              place that looks official and belongs to you.
            </p>

            <p>
              Your site can show the property the way you want it shown, answer
              guest questions upfront, link to your existing booking platforms,
              and make it easier for people to find you through Google, local
              searches, referrals, and social posts.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER IMAGE SPOTS */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm text-[var(--text-soft)]">
                Before and after
              </p>

              <h2 className="max-w-3xl text-3xl leading-tight md:text-5xl">
                The same rental can feel completely different with the right
                presentation.
              </h2>
            </div>

            <p className="max-w-md text-[var(--text-soft)]">
              Use this section to show the difference between a basic
              listing-style experience and a cleaner branded website built
              around trust, photos, and booking flow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-3">
              <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] bg-[var(--bg-alt)] md:h-[420px]">
  <img
    src="/images/before.png"
    alt="Before vacation rental website design"
    className="block h-full w-full object-cover"
  />
</div>

              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  Before
                </p>

                <h3 className="mt-3 text-2xl leading-tight">
                  Scattered info and a guest experience you do not fully
                  control.
                </h3>

                <p className="mt-3 leading-7 text-[var(--text-soft)]">
                  When everything lives on a booking platform or random social
                  posts, guests may miss key details, compare you too quickly,
                  or leave before they understand what makes your rental worth
                  booking.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-3">
            <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] bg-[var(--bg-alt)] md:h-[420px]">
  <img
    src="/images/after.png"
    alt="After vacation rental website design"
    className="block h-full w-full object-cover"
  />
</div>

              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  After
                </p>

                <h3 className="mt-3 text-2xl leading-tight">
                  An official website that makes the rental easier to trust and
                  easier to book.
                </h3>

                <p className="mt-3 leading-7 text-[var(--text-soft)]">
                  A custom site gives guests a cleaner path through the photos,
                  amenities, location, rules, nearby attractions, and booking
                  options without all the noise around it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OLD / NEW VIDEO COMPARISON */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm text-[var(--text-soft)]">
                Video comparison
              </p>

              <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
                Show the old experience next to the new one.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
              A quick screen recording can show the difference right away. One
              side shows the old setup, and the other shows a cleaner website
              built around the guest experience, booking flow, and brand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-black p-3">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <video
                  src="/videos/before.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-[340px] w-full object-cover"
                />

                <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs text-white/80">
                  Old
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-2xl text-white">Old rental experience</h3>
                <p className="mt-3 leading-7 text-white/65">
                  The property may be great, but the online experience feels
                  limited, crowded, or too dependent on a third-party listing.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-black p-3">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <video
                  src="/videos/after.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-[340px] w-full object-cover"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs text-black">
                  New
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-2xl text-white">New custom website</h3>
                <p className="mt-3 leading-7 text-white/65">
                  The property feels more official, the information is easier to
                  follow, and guests have a clearer path to book, inquire, or
                  learn more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm text-[var(--text-soft)]">
                What the site can include
              </p>

              <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
                Built around your brand, your booking flow, and your guests.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
              The goal is not to replace everything you already use. The goal is
              to give your rental a cleaner home base that supports your current
              booking setup and makes the guest experience easier.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-6"
              >
                <h3 className="text-xl leading-tight">{feature.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECT BOOKING */}
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-6 md:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="mb-4 text-sm text-[var(--text-soft)]">
                  Direct bookings and integrations
                </p>

                <h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">
                  Keep Airbnb and Vrbo, but give guests a better way to move
                  through the booking process.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  Your website can point guests to Airbnb, Vrbo, OwnerRez, a
                  booking calendar, or a direct inquiry form. It can also answer
                  the questions people usually ask before they book, which makes
                  the whole process feel cleaner and easier.
                </p>
              </div>

              <div>
                <p className="mb-4 text-sm text-[var(--text-soft)]">
                  Good fit for
                </p>

                <div className="flex flex-wrap gap-3">
                  {rentalTypes.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-[var(--border-soft)] bg-[var(--bg-main)] px-4 py-2 text-sm text-[var(--text-soft)]"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <p className="mt-8 border-t border-[var(--border-soft)] pt-5 text-sm leading-7 text-[var(--text-soft)]">
                  This works especially well for rentals near lakes, rivers,
                  parks, trail systems, downtown areas, and Arkansas tourism
                  towns where people are searching before they decide where to
                  stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Common questions
            </p>

            <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
              Straight answers for rental owners.
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[var(--border-soft)] pb-6"
              >
                <h3 className="text-xl leading-tight">{faq.question}</h3>

                <p className="mt-3 leading-relaxed text-[var(--text-soft)]">
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