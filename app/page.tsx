"use client";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export default function Page() {
  
  
  const projects = [
    {
      image: "/pizza.png",
      title: "Pizza Shop Website",
      description: "Modern site for a local restaurant",
    },
    {
      image: "/insideout.png",
      title: "Cleaning Business",
      description: "Lead-focused service site",
    },
    {
      image: "/littlecove.png",
      title: "daycare",
      description: "Simple, high-conversion layout",
    },
  ];


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

    <h2 className="font-sans text-2xl text-center mb-10 text-[#7a4e2d]">
      Recent Work
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <div key={i} className="bg-white rounded-2xl shadow overflow-hidden">

          <img
            src={p.image}
            alt={p.title}
            className="w-full h-48 object-cover transition duration-300 hover:scale-105"
          />

          <div className="p-4">
            <h3 className="font-sans text-lg font-semibold">{p.title}</h3>
            <p className="font-sans text-sm text-gray-600 mt-1">
              {p.description}
            </p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>


     <section className="py-16 px-6 border-t text-center">
  <div className="max-w-4xl mx-auto">

    <h2 className="font-serif text-2xl mb-6 text-[#7a4e2d]">
      How It Works
    </h2>

    <div className="font-sans space-y-3 text-gray-600">
      <p>1. You send me your business info</p>
      <p>2. I build a preview website</p>
      <p>3. You approve or request changes</p>
      <p>4. We launch your site</p>
    </div>

  </div>
</section>


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
