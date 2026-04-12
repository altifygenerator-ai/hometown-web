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
    category: "Landscaping",
    images: ["/onward1.png", "/onward2.png"],
    summary:
      "Turned their Facebook presence into a clean site where people can quickly see services and request a quote without all the back and forth.",
    tags: ["Services", "Quote Flow", "Local Business"],
    live: { url: "https://onwardsandupward.com/" },
  },
  {
    title: "Flavor-Licious",
    category: "Restaurant",
    images: ["/flavor1.png", "/flavor2.png"],
    summary:
      "Simple one-page setup so customers can check the menu, hours, and location fast instead of scrolling through posts.",
    tags: ["Menu", "Location", "Easy Access"],
  },
  {
    title: "Hometown Pizza",
    category: "Restaurant",
    images: ["/pizza.png"],
    summary:
      "Built to make ordering easier with clear menu access and quick call buttons so customers don’t hesitate.",
    tags: ["Calls", "Orders", "Mobile Friendly"],
    live: { url: "https://hometown-pizza-site.vercel.app/" },
  },
  {
    title: "Inside Out Cleaning",
    category: "Service",
    images: ["/insideout.png"],
    summary:
      "Focused on turning visitors into leads with a simple layout and fast quote request form.",
    tags: ["Leads", "Quote Form", "Simple Layout"],
  },
  {
    title: "Little Cove Daycare",
    category: "Daycare",
    images: ["/littlecove.png"],
    summary:
      "Designed to build trust with parents by clearly showing programs, info, and an easy way to reach out.",
    tags: ["Trust", "Parents", "Clarity"],
    live: { url: "https://littlecoveearlylearning.com/" },
  },
  {
    title: "Glenwood Arkansas",
    category: "Tourism",
    images: ["/glenwood.png"],
    summary:
      "Organized local info into one clean place so visitors can quickly find things to do, places to go, and directions.",
    tags: ["Info Hub", "Visitors", "Local"],
    live: { url: "https://glenwoodarkansas.org/" },
  },
  {
    title: "Amity Arkansas",
    category: "Tourism",
    images: ["/amity.png"],
    summary:
      "Cleaned up scattered information into a simple site that makes it easier for people to explore the area.",
    tags: ["Local Info", "Simple", "Clear"],
    live: { url: "https://amityarkansas.org/" },
  },
];
  

/* ================= PRICING ================= */

const tiers = [
  {
    name: "Starter Site",
    price: "$200–$300",
    desc: "Simple one-page site",
    features: ["1 page", "Mobile", "Contact"],
  },
  {
    name: "Growth Site",
    price: "$400–$600",
    desc: "Best for growth",
    features: ["3–5 pages", "Leads", "Clean design"],
    highlight: true,
  },
  {
    name: "Full Setup",
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

                     <a
    href="sms:8702604880?body=Hey%20I%20was%20checking%20out%20your%20site%20and%20wanted%20to%20ask%20about%20getting%20one%20made"
    className="btn border border-black text-black flex items-center gap-2"
  >
    Message
  </a>
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
        Websites that help local businesses get more calls & jobs
      </h1>

      <p className="text-lg text-[var(--text-soft)]">
        Most people find you on facebook, but there’s no easy place to see everything or book… that’s where jobs get lost
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
    <section className="py-20 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* PROBLEM */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Most local businesses don’t have a real website
          </h2>

          <ul className="space-y-3 text-neutral-300 text-lg">
            <li>• everything is spread across facebook posts</li>
            <li>• customers have to message back and forth</li>
            <li>• no clear services or pricing</li>
            <li>• no easy way to book or request a quote</li>
          </ul>

          <p className="mt-6 text-neutral-400 text-lg">
            so people either get confused… or just move on
          </p>
        </div>

        {/* SOLUTION */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            I build simple, clean websites that put everything in one place
          </h3>

          <ul className="space-y-3 text-neutral-300 text-lg">
            <li>• services & pricing clearly listed</li>
            <li>• before/after or work examples</li>
            <li>• quick call / text / quote buttons</li>
            <li>• map, hours, directions</li>
          </ul>

          <p className="mt-6 text-neutral-400 text-lg">
            so when someone finds you, they don’t have to think… they just reach out
          </p>
        </div>

      </div>
    </section>
      
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
<section className="py-20 bg-white text-black">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Hey, I’m Jake
        </h2>

        <p className="text-lg text-neutral-700 leading-relaxed mb-4">
          I build simple websites for local businesses around Arkansas.
        </p>

        <p className="text-lg text-neutral-700 leading-relaxed mb-4">
          Most of the time people are finding you on Facebook, but there’s no
          real place for them to see everything or reach out easily, so things
          end up getting missed.
        </p>

        <p className="text-lg text-neutral-700 leading-relaxed mb-4">
          I just take what you already have and put it into something clean and
          simple so people can understand what you do and contact you without
          all the back and forth.
        </p>

        <p className="text-lg text-neutral-700 leading-relaxed">
          Nothing overcomplicated, just something that works and makes things
          easier on your end.
        </p>
<p className="mt-6 text-sm text-neutral-500">
  Based in Arkansas • Working with local businesses
</p>
      </div>
    </section>
    <section className="py-20 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          I’ll build you a free preview first
        </h2>

        <p className="text-lg text-neutral-300 mb-6">
          I can put together a quick version of your site based on your business so you can actually see it before deciding anything.
        </p>

        <p className="text-lg text-neutral-400 mb-8">
          no upfront payment, no pressure — if you like it, we move forward… if not, no worries
        </p>

        <div className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium">
          see what your site could look like
        </div>

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
          <section className="py-20 bg-white text-black">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          want something cleaner than just facebook?
        </h2>

        <p className="text-lg text-neutral-700 mb-8">
          if you’ve been thinking about getting a site set up or just want something easier for people to use, i can put something together for you to check out
        </p>

        <a
          href="#contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90"
        >
          get a free preview
        </a>

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