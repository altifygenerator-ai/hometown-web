import { notFound } from "next/navigation";
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

export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = locations[slug as LocationSlug];

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.title} | Hometown Web Services`,
    description: location.description,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locations[slug as LocationSlug];

  if (!location) return notFound();

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

            <p className="mt-6 text-lg text-[var(--text-soft)] max-w-xl">
              {location.description}
            </p>

            <div className="mt-10 flex items-center gap-4">
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

            <div className="mt-20 max-w-2xl">
              <h2 className="text-3xl md:text-4xl mb-4">
                Websites built for local businesses in {location.city}
              </h2>

              <p className="text-[var(--text-soft)] leading-relaxed">
                A lot of small businesses around {location.city} rely on
                Facebook, word of mouth, and referrals. That can work, but when
                someone searches Google for what you do, you need a clear place
                that explains your services, builds trust, and makes it easy to
                call or request a quote.
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