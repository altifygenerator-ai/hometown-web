import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";

import LocationHero from "@/components/locations/LocationHero";
import LocationTrustStrip from "@/components/locations/LocationTrustStrip";
import LocationIntro from "@/components/locations/LocationIntro";
import LocationServices from "@/components/locations/LocationServices";
import LocationSEOBlock from "@/components/locations/LocationSEOBlock";
import LocationIndustries from "@/components/locations/LocationIndustries";
import LocationFAQ from "@/components/locations/LocationFAQ";

import type { LocationData } from "@/data/locations/types";

type LocationPageTemplateProps = {
  data: LocationData;
};

export default function LocationPageTemplate({
  data,
}: LocationPageTemplateProps) {
  const schema = [
    ...data.schema,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${data.url}#faq`,
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  const heroVariant = data.layout?.heroVariant ?? "simple";
  const introVariant = data.layout?.introVariant ?? "split";
  const servicesVariant = data.layout?.servicesVariant ?? "cards";
  const seoVariant = data.layout?.seoVariant ?? "panel";

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Header />

      <LocationHero
        variant={heroVariant}
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description={data.hero.description}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        image={data.hero.image}
        video={data.hero.video}
      />

      <LocationTrustStrip items={data.trustItems} />

      <LocationIntro
        variant={introVariant}
        eyebrow={data.intro.eyebrow}
        title={data.intro.title}
        paragraphs={data.intro.paragraphs}
      />

      <LocationServices
        variant={servicesVariant}
        city={data.city}
        services={data.services}
      />

      <LocationSEOBlock
        variant={seoVariant}
        eyebrow={data.seoBlock.eyebrow}
        title={data.seoBlock.title}
        text={data.seoBlock.text}
        nearbyAreas={data.seoBlock.nearbyAreas}
      />

      <LocationIndustries
        city={data.city}
        industries={data.industries}
      />

      <LocationFAQ faqs={data.faqs} />

      <CTA />

      <Footer />
    </main>
  );
}