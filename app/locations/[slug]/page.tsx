import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locations, type LocationSlug } from "@/data/locations";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

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

  const nearbyText = location.nearby.join(", ");

  return (
    <>
      <Header />

      <main>
        <section className="py-32 bg-depth overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm text-[var(--text-soft)] mb-6">
              Websites for {location.city}, {location.state} businesses
            </p>

            <h1 className="text-5xl md:text-7xl max-w-4xl">
              {location.title}
            </h1>

            <p className="mt-6 text-lg text-[var(--text-soft)] max-w-2xl">
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

            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-2xl mb-4">
                  Built for {location.city} businesses
                </h2>
                <p className="text-[var(--text-soft)] leading-relaxed">
                  {location.audience}
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-2xl mb-4">The problem I usually see</h2>
                <p className="text-[var(--text-soft)] leading-relaxed">
                  {location.problem}
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-2xl mb-4">How I help</h2>
                <p className="text-[var(--text-soft)] leading-relaxed">
                  {location.solution}
                </p>
              </article>
            </div>

            <div className="mt-16 border-t border-white/10 pt-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl mb-4">
                Serving {location.city} and nearby areas
              </h2>

              <p className="text-[var(--text-soft)] leading-relaxed">
                I also help businesses around {nearbyText} and other nearby
                Arkansas communities with websites, Google visibility, and
                simple online systems that make it easier for customers to reach
                out.
              </p>
            </div>
          </div>
        </section>

        <ServicesPreview />
        <Process />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}