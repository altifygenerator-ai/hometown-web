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