"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { title } from "process";
import ProjectCard from "@/components/Projectcard";
/* ================= PROJECT SYSTEM ================= */

type Project = {
  title: string;
  category: string;
  images: string[];
  summary: string;
  tags: string[];
  live?: {
    url: string;
    label?: string;
  };
};

const projects: Project[] = [
   {
    title: "Onward And Upward",
    category: "Landscaping and maintinence",
    images: ["/onward1.png", "/onward2.png"],
      summary: "Online presence and branding to bring in more clients.",
      tags: ["Trust, Clean UI, Modern, Maintinence, Lawncare"],
      live: {url: "https://onwardsandupward.com/"},
    },
    {
    title: "Flavor-Licious",
    category: "Restaurant",
    images: ["/flavor1.png", "/flavor2.png"],
    summary: "Simple, high-trust layout for parents.",
    tags: ["Trust", "Clean UI"],
  },
  {
    title: "Hometown Pizza",
    category: "Restaurant",
    images: ["/pizza.png"],
    summary: "Designed to drive more calls and online orders.",
    tags: ["Next.js", "Mobile-first"],
    live: { url: "https://hometown-pizza-site.vercel.app/" },
  },
  {
    title: "Inside Out Cleaning",
    category: "Service",
    images: ["/insideout.png"],
    summary: "Lead-focused site built to generate inquiries.",
    tags: ["Lead Gen", "Fast"],
  },
  {
    title: "Little Cove Daycare",
    category: "Daycare",
    images: ["/littlecove.png"] ,
    summary: "Simple, high-trust layout for parents.",
    tags: ["Trust", "Clean UI"],
    live: { url: "https://littlecoveearlylearning.com/" },
  },
  {
    title: "Glenwood Arkansas",
    category: "Tourism",
    images: ["/glenwood.png"],
    summary: "Designed to drive more calls and online orders.",
    tags: ["Next.js", "Mobile-first"],
    live: { url: "https://glenwoodarkansas.org/" },
  },
  
  {
    title: "Amity Arkansas",
    category: "Tourism",
    images: ["/amity.png"],
    summary: "Lead-focused site built to generate inquiries.",
    tags: ["Lead Gen", "Fast"],
    live: { url: "https://amityarkansas.org/" },
  }, 
  
 
    ]
  

/* ================= PRICING ================= */

const tiers = [
  {
    name: "Starter",
    price: "$200–$300",
    desc: "Simple one-page site",
    features: ["1 page", "Mobile", "Contact"],
  },
  {
    name: "Core",
    price: "$400–$600",
    desc: "Best for growth",
    features: ["3–5 pages", "Leads", "Clean design"],
    highlight: true,
  },
  {
    name: "Authority",
    price: "$700–$900",
    desc: "Premium build",
    features: ["Advanced", "Polish", "Strategy"],
  },
];

/* ================= PROCESS ================= */

const steps = [
  "Send your business info",
  "I build a full preview site",
  "You request changes",
  "We launch it live",
];

export default function Page() {
  const [active] = useState("All");

  const visibleProjects = useMemo(() => projects, [active]);

  return (
    <div className="min-h-screen text-[var(--text-main)]">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-white shadow">
              <Image src="/logo.png" alt="me" width={40} height={40} />
            </div>

            <div>
              <p className="font-semibold text-sm">Hometown Web Services</p>
              <p className="text-xs text-[var(--text-soft)]">Arkansas Web Design</p>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex gap-6 text-sm text-[var(--text-soft)]">
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* CTA */}
          <a href="tel:8702604880" className="btn btn-primary flex items-center gap-2">
            <Phone className="h-4 w-4" /> Call
          </a>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE */}
    <div className="space-y-6">

      <div className="badge">Local business websites</div>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        I build websites that actually make people call.
      </h1>

      <p className="text-lg text-[var(--text-soft)]">
        Clean, simple, and built for real results.
      </p>

      <div className="flex gap-3 flex-wrap">
        <a href="#work" className="btn btn-primary">See Work</a>
        <a href="#pricing" className="btn btn-secondary">Pricing</a>
      </div>

      {/* 🔥 PERSONAL TOUCH */}
      <div className="flex items-center gap-3 mt-6">
       
        <p className="text-sm text-[var(--text-soft)]">
          Built by a local developer in Arkansas
        </p>
      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative">

      {/* glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--teal)] opacity-20 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--orange)] opacity-20 blur-3xl rounded-full" />

      <div className="card p-4">

        <div className="rounded-xl overflow-hidden">
          <Image
            src="/headshot.png"
            alt="Your name"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>

      </div>

    </div>

  </div>

</section>
      {/* ================= WORK ================= */}
<section id="work" className="max-w-7xl mx-auto px-6 py-16">

  <div className="flex items-center justify-between mb-10">
    <h2 className="text-3xl font-bold">Featured Work</h2>

    <p className="text-sm text-[var(--text-soft)] hidden md:block">
      Real sites built for real businesses
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-6">

    {visibleProjects.map((project) => (
      <ProjectCard
        key={project.title}
        project={project}
      />
    ))}

  </div>

</section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">How it works</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="card p-6 flex gap-4">

              <div className="h-8 w-8 bg-[var(--teal)] text-white flex items-center justify-center rounded-full">
                {i + 1}
              </div>

              <p className="text-[var(--text-soft)]">{step}</p>

            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <div className="grid md:grid-cols-3 gap-6">

  {tiers.map((tier) => (
    <div
      key={tier.name}
      className={`p-6 rounded-2xl transition ${
        tier.highlight
          ? "bg-gradient-to-br from-[var(--teal)] to-[var(--orange)] text-white scale-[1.05] shadow-xl"
          : "card"
      }`}
    >

      {tier.highlight && (
        <div className="mb-3 text-xs uppercase tracking-wide font-semibold bg-white/20 px-3 py-1 rounded-full inline-block">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-semibold">{tier.name}</h3>
      <p className="text-3xl font-bold mt-2">{tier.price}</p>

      <p className={`mt-2 text-sm ${tier.highlight ? "text-white/80" : "text-[var(--text-soft)]"}`}>
        {tier.desc}
      </p>

      <ul className="mt-6 space-y-2 text-sm">
        {tier.features.map((f) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>

    </div>
  ))}

</div>

      {/* ================= CTA ================= */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--teal)] to-[var(--berry)] text-white p-12 flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-3xl font-bold">
              If your site isn’t bringing in customers, it’s costing you money.
            </h2>

            <p className="mt-4 text-white/80">
              I can fix that or build something better.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="tel:8702604880" className="bg-white text-black px-5 py-3 rounded-full text-sm text-center">
              Call Me
            </a>

            <a href="mailto:altifygenerator@gmail.com" className="border border-white px-5 py-3 rounded-full text-sm text-center">
              Email Me
            </a>
            <a href="https://www.facebook.com/profile.php?id=61580781227329" className="border border-white px-5 py-3 rounded-full text-sm text-center">
              Facebook
            </a> 
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[var(--border-soft)] py-10 px-6">
        <div className="max-w-7xl mx-auto flex justify-between text-sm text-[var(--text-soft)]">
          <p>Hometown Web Services</p>

          <div className="flex gap-6">
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}