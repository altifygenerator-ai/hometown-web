import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection, { faqs } from "@/components/sections/FAQSection";
import VacationRentalPreview from "@/components/sections/VacationRentalPreview";
const siteUrl = "https://hometownwebservicesar.cc";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "Hometown Web Services",
    url: siteUrl,
    telephone: "+18702604880",
    email: "altifygenerator@gmail.com",
    description:
      "Arkansas web design, local SEO, and Google-ready websites for small businesses, contractors, service businesses, restaurants, tourism businesses, and local companies.",
    areaServed: [
      {
        "@type": "State",
        name: "Arkansas",
      },
      {
        "@type": "City",
        name: "Arkadelphia",
      },
      {
        "@type": "City",
        name: "Hot Springs",
      },
      {
        "@type": "City",
        name: "Benton",
      },
      {
        "@type": "City",
        name: "Bryant",
      },
      {
        "@type": "City",
        name: "Little Rock",
      },
      {
        "@type": "City",
        name: "Glenwood",
      },
      {
        "@type": "City",
        name: "Malvern",
      },
      {
        "@type": "City",
        name: "Maumelle",
      },
    ],
    sameAs: ["https://share.google/f18YjPUwYQatjbbnZ"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Small Business Website Design",
          serviceType: "Web Design",
          areaServed: {
            "@type": "State",
            name: "Arkansas",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO Services",
          serviceType: "Local SEO",
          areaServed: {
            "@type": "State",
            name: "Arkansas",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Optimization",
          serviceType: "Google Business Profile Optimization",
          areaServed: {
            "@type": "State",
            name: "Arkansas",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contractor Website Design",
          serviceType: "Contractor Website Design",
          areaServed: {
            "@type": "State",
            name: "Arkansas",
          },
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Hometown Web Services",
    publisher: {
      "@id": `${siteUrl}/#business`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Arkansas Web Design for Small Businesses",
    description:
      "Web design and local SEO for Arkansas small businesses that need a clean, mobile-friendly website built to bring in calls, leads, and local visibility.",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#business`,
    },
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

      <Process />
      <Testimonials />
      <FAQSection/>
      <CTA />
      <Footer />
    </main>
  );
}