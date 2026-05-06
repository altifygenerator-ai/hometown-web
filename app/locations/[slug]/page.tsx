import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locations, type LocationSlug } from "@/data/locations";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://hometownwebservicesar.cc";

export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations[slug as LocationSlug];

  if (!location) {
    return {
      title: "Location Not Found | Hometown Web Services",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${location.title} | Hometown Web Services`,
    description: location.description,
    alternates: {
      canonical: `${siteUrl}/locations/${slug}`,
    },
    openGraph: {
      title: `${location.title} | Hometown Web Services`,
      description: location.description,
      url: `${siteUrl}/locations/${slug}`,
      siteName: "Hometown Web Services",
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations[slug as LocationSlug];

  if (!location) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Hometown Web Services",
    url: `${siteUrl}/locations/${slug}`,
    areaServed: {
      "@type": "City",
      name: `${location.city}, ${location.state}`,
    },
    description: location.description,
    serviceType: [
      "Web Design",
      "Local SEO",
      "Small Business Websites",
      "Contractor Websites",
    ],
  };

  return (
    <>
      <Header />

      <main>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <section className="py-32 bg-depth overflow-hidden relative">
          <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-[var(--accent)] opacity-10 blur-3xl rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-sm text-[var(--text-soft)] mb-6">
              {location.kicker}
            </p>

            <h1 className="text-5xl md:text-7xl max-w-4xl">
              {location.title}
            </h1>

            <p className="mt-6 text-lg text-[var(--text-soft)] max-w-2xl leading-relaxed">
              {location.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn btn-primary">
                Get a free preview
              </a>

              <a
                href="/portfolio"
                className="text-sm text-[var(--text-soft)] hover:text-[var(--text-main)] transition"
              >
                View work →
              </a>
            </div>

            <div className="mt-20 grid gap-5 md:grid-cols-3">
              {location.heroCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h2 className="text-2xl mb-4">{card.title}</h2>
                  <p className="text-[var(--text-soft)] leading-relaxed">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="max-w-6xl mx-auto px-6 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm text-[var(--text-soft)] mb-4">
                Local website strategy
              </p>

              <h2 className="text-3xl md:text-5xl">
                {location.strategyTitle}
              </h2>
            </div>

            <div className="space-y-5">
              {location.strategyText.map((text) => (
                <p
                  key={text}
                  className="text-[var(--text-soft)] leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 bg-[var(--bg-alt)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-sm text-[var(--text-soft)] mb-4">
                Common business types
              </p>

              <h2 className="text-3xl md:text-5xl">
                Websites for real businesses around {location.city}
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {location.industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-6"
                >
                  <p className="font-medium">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm text-[var(--text-soft)] mb-4">
                What the site needs to do
              </p>

              <h2 className="text-3xl md:text-5xl">
                {location.websiteNeedsTitle}
              </h2>
            </div>

            <div className="grid gap-5">
              {location.websiteNeeds.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-6"
                >
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-3 text-[var(--text-soft)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 bg-depth">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-sm text-[var(--text-soft)] mb-4">
                Nearby areas
              </p>

              <h2 className="text-3xl md:text-5xl">
                Serving {location.city} and nearby Arkansas communities
              </h2>

              <p className="mt-6 text-[var(--text-soft)] leading-relaxed">
                I also help businesses around {location.nearby.join(", ")} and
                other nearby areas with websites, local SEO, Google visibility,
                and simple online systems that make it easier for customers to
                reach out.
              </p>
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm text-[var(--text-soft)] mb-4">Questions</p>

            <h2 className="text-3xl md:text-5xl mb-10">
              {location.city} web design questions
            </h2>

            <div className="space-y-4">
              {location.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] p-6"
                >
                  <h3 className="text-xl">{item.question}</h3>
                  <p className="mt-3 text-[var(--text-soft)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl">
                Want a better website for your {location.city} business?
              </h2>

              <p className="mt-6 text-lg text-[var(--text-soft)] leading-relaxed">
                I can put together a clean preview based on your business,
                services, and local market. No pressure, just something real you
                can look at.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="sms:8702604880" className="btn btn-primary">
                  Get a free preview
                </a>

                <a
                  href="/services"
                  className="text-sm text-[var(--text-soft)] hover:text-[var(--text-main)] transition"
                >
                  See services →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}