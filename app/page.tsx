import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Testimonials from "@/components/sections/Testimonials"
export default function Page() {
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do small businesses in Arkansas need a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A website helps Arkansas small businesses show services, contact information, reviews, service areas, and proof that the business is active and trustworthy.",
          },
        },
        {
          "@type": "Question",
          name: "Can a website help my business get more calls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A well-built website can help turn visitors into calls by making services clear, improving trust, and making it easy to call, text, or request a quote.",
          },
        },
        {
          "@type": "Question",
          name: "What businesses does Hometown Web Services build websites for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hometown Web Services builds websites for Arkansas contractors, roofers, electricians, cleaners, restaurants, lawn care companies, local shops, and small service businesses.",
          },
        },
      ],
    }),
  }}
/>
      <Header />
      <Hero />
      <FeaturedWork />
      <ServicesPreview />
      <Process />
      <Testimonials/>
      <CTA />
      <Footer />
    </main>
  );
}