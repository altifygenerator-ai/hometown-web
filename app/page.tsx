"use client";
import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";
import PricingSection from "@/components/PricingSection";
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export default function Page() {
  
  
  const projects = [
    {
      image: "/pizza.png",
      title: "Hometown Pizza",
      description: "Modern site for a local restaurant",
    },
    {
      image: "/insideout.png",
      title: "Inside Out Cleaning",
      description: "Lead-focused service site",
    },
    {
      image: "/littlecove.png",
      title: "Little Cove Daycare",
      description: "Simple, high-conversion layout",
    },
    {
      image: "/TheAutoAcademy.png",
      title: "The Auto Academy",
      description: "Clean design for a local mechanic school",
    }
  ];
const [current, setCurrent] = useState(0);

const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % projects.length);
};

const prevSlide = () => {
  setCurrent((prev) =>
    prev === 0 ? projects.length - 1 : prev - 1
  );
};
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#f3ede6] via-[#f8f6f2] to-white text-gray-900 font-sans min-h-screen">


      <header className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md">
       <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl inline-block">
          <h1 className="font-serif">
            Hometown Web Services
          </h1>

          <div className="flex gap-4">
            <a
              href="tel:8702604880"
              className="font-sans text-sm hover:text-[#7a4e2d]"
            >
              Call
            </a>
            <a
              href="mailto:altifygenerator@gmail.com"
              className="font-sans text-sm hover:text-[#7a4e2d]"
            >
              Email
            </a>
          </div>
        </div>
      </header>


      <section className="py-20 px-6 border-t border-gray-200 pt-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#5a3e2b] leading-tight">
              Hometown Web Services
            </h1>

            <p className="font-sans mt-4 text-xl text-gray-700">
              We Build Websites for Businesses that Need Results, Not Complexity!
            </p>

            <p className="font-sans mt-4 text-gray-600">
              Simple, modern websites designed to help you get more calls,
              more leads, and more customers.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="mailto:altifygenerator@gmail.com"
                className="bg-[#7a4e2d] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-200"
              >
                Get a Free Mockup
              </a>

              <a
                href="tel:8702604880"
                className="border border-[#7a4e2d] px-6 py-3 rounded-full hover:bg-[#7a4e2d] hover:text-white transition"
              >
                Call Now
              </a>
             
            </div>
          </div>

  
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
              
  <img
  src="/headshot.png"
  alt="my photo"
  className="w-full h-48 object-cover"
  />
              </div>
            </div>
          </div>

      
      </section>


      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl mb-4 text-[#7a4e2d]">
            Most Business Websites Don’t Bring Customers
          </h2>

          <p className="font-sans text-gray-600">
            Outdated design, slow loading, and no clear way for customers to contact you
            means lost business every day.
          </p>
        </div>
      </section>


      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">

          {[
            "Mobile Optimized",
            "Fast & Clean Design",
            "Built to Get Calls"
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              {item}
            </div>
          ))}

        </div>
      </section>


 <section className="py-20 px-6 border-t border-gray-200">
  <div className="max-w-6xl mx-auto">

    <h2 className="font-serif text-4xl text-center mb-10 text-[#7a4e2d]">
      Showcase
    </h2>

    {/* ✅ SINGLE CONTAINER — NOT A GRID */}
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-xl">

        {/* Image */}
        <img
  src={projects[current].image}
  alt={projects[current].title}
  onClick={() => setIsOpen(true)}
  className="w-full h-[420px] object-cover transition-all duration-500 cursor-pointer"
/>

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-8">
          <h3 className="text-2xl font-semibold">
            {projects[current].title}
          </h3>
          <p className="text-sm opacity-80 mt-1">
            {projects[current].description}
          </p>
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-full"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-4 py-2 rounded-full"
        >
          →
        </button>
        {isOpen && (
  <div
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    onClick={() => setIsOpen(false)}
  >
    <img
      src={projects[current].image}
      alt={projects[current].title}
      className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
    />

    {/* Close button */}
    <button
      className="absolute top-6 right-6 text-white text-2xl"
      onClick={() => setIsOpen(false)}
    >
      ✕
    </button>
  </div>
)}

      </div>
    </div>

  </div>
</section>


    <section className="py-20 px-6 border-t bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-4xl mx-auto text-center">

    {/* Heading */}
    <h2 className="font-serif text-3xl md:text-4xl mb-10 text-[#7a4e2d]">
      How It Works
    </h2>

    {/* Steps */}
    <div className="space-y-6">

      {[
        "You send me your business info",
        "I build a preview website",
        "You approve or request changes",
        "We launch your site",
      ].map((step, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-white shadow-md rounded-xl px-6 py-4 text-left hover:scale-[1.02] transition"
        >
          {/* Number */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7a4e2d] text-white font-bold">
            {i + 1}
          </div>

          {/* Text */}
          <p className="text-lg font-medium text-gray-700">
            {step}
          </p>
        </div>
      ))}

    </div>

    {/* Bottom CTA hint */}
    <p className="mt-10 text-gray-500 text-sm">
      Simple, fast, and built to get results.
    </p>

  </div>
</section>
<PricingSection />


    <section className="py-20 px-6 bg-gradient-to-r from-[#7a4e2d] to-[#a67852] text-white text-center">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-serif mb-4">
      Ready to Grow Your Business Online?
    </h2>

    <p className="text-white/80 mb-6 font-sans">
      Let’s build a website that actually brings you customers — not confusion.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      
      <a
        href="tel:8702604880"
        className="bg-white text-[#7a4e2d] px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
      >
        Call Now
      </a>

      <a
        href="mailto:your@email.com"
        className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#7a4e2d] transition"
      >
        Email Me
      </a>

    </div>

  </div>
</section>
    </div>
  );
}
