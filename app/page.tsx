import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import { homeFaqs } from "@/data/home-faqs";
import VacationRentalPreview from "@/components/sections/VacationRentalPreview";
import CustomSystemsPreview from "@/components/sections/CustomSystemsPreview";
import { createPageMetadata } from "@/lib/seo";
const siteUrl = "https://www.hometownwebservicesar.com";

export const metadata: Metadata = createPageMetadata({
  title: "Arkansas Web Design for Small Businesses",
  description:
    "Custom Arkansas web design for contractors, service companies, restaurants, vacation rentals, shops, and small businesses that need more calls, trust, and a stronger Google presence.",
  path: "/",
});

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Arkansas Web Design for Small Businesses",
    description:
      "Custom websites and local SEO for Arkansas small businesses that need more calls, leads, trust, and local visibility.",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#business`,
    },
    mainEntity: {
      "@id": `${siteUrl}/#business`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />

      <Header />
      <Hero />
      <FeaturedWork />
      <ServicesPreview />
      <VacationRentalPreview />
      <CustomSystemsPreview />

      <Process />
      <Testimonials />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
}