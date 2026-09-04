"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Website Design",
    text: "Clean, modern websites that make your business easier to understand, trust, and contact.",
  },
  {
    title: "Local SEO Structure",
    text: "Pages, headings, metadata, and service-area content built so Google can better understand what you do.",
  },
  {
    title: "Google Profile Help",
    text: "Help improving the info, services, photos, and trust signals around your Google Business Profile.",
  },
  {
    title: "Lead-Focused Layouts",
    text: "Clear call buttons, text links, quote sections, service pages, and mobile-first contact paths.",
  },
];

const painPoints = [
  "People only find scattered Facebook posts",
  "The current website looks outdated or thin",
  "Services and pricing are hard to understand",
  "Customers have to hunt for how to contact you",
];

export default function ServicesPreview() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="section-kicker mb-4">What I fix</p>

            <h2 className="text-balance max-w-2xl text-4xl leading-tight md:text-6xl">
              Most small businesses do not have a work problem. They have a
              trust problem online.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[var(--text-soft)]">
              A lot of good local businesses lose people before the first call.
              Not because the work is bad, but because the website is old,
              missing, confusing, or everything is spread across Facebook.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {painPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-sm text-[var(--text-soft)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <h3 className="text-xl">{service.title}</h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                {service.text}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid gap-8 rounded-[2rem] border border-[var(--border-soft)] bg-white p-7 shadow-[var(--shadow-soft)] md:grid-cols-[1.05fr_0.95fr] md:p-9"
        >
          <div>
            <p className="section-kicker mb-4">The goal</p>

            <h3 className="text-balance max-w-2xl text-3xl leading-tight md:text-4xl">
              Give customers one clear place to decide if you are the right
              business to call.
            </h3>
          </div>

          <div className="space-y-4">
            <p className="leading-7 text-[var(--text-soft)]">
              Your website should show what you do, where you work, what kind of
              jobs you want, why people should trust you, and how to reach you
              without digging around.
            </p>

            <p className="leading-7 text-[var(--text-soft)]">
              That means the design matters, but the structure matters just as
              much.
            </p>

            <Link
              href="/services"
              className="inline-flex pt-2 text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
            >
              See services →
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
          <div className="premium-shell rounded-[2rem] p-6">
            <p className="text-sm font-medium text-[var(--text-main)]">
              Need more than a normal website?
            </p>
            <h3 className="mt-4 max-w-xl text-2xl leading-tight md:text-4xl">
              I also build custom systems, admin dashboards, portals,
              workflows, and web apps.
            </h3>
          </div>

          <div>
            <p className="text-lg leading-8 text-[var(--text-soft)]">
              Some businesses need applications, booking logic, internal tools,
              dashboards, or customer portals. If the business needs a system
              behind the site, I can build that too.
            </p>

            <Link
              href="/custom-business-systems"
              className="mt-6 inline-flex text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
            >
              See custom systems and web apps →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
