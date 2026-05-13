"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Website Design",
    text: "Modern websites built to look professional and convert visitors into calls.",
  },
  {
    title: "Local SEO",
    text: "Structure and content designed to help businesses show up on Google.",
  },
  {
    title: "Google Profiles",
    text: "Optimization help for Google Business listings and local visibility.",
  },
  {
    title: "Lead-Focused Layouts",
    text: "Built to make contacting your business simple and friction-free.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              What I do
            </p>

            <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
              Simple websites that help people find you and reach out.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-soft)] lg:pb-1">
            I build clean, modern websites for small businesses that make it easy
            for customers to understand what you do, find you on Google, and
            contact you without confusion.
          </p>
        </motion.div>

        {/* SERVICE GRID */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-6 transition duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl">{service.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                {service.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM CTA / EXPLANATION BAND */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid gap-8 rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-card)]/70 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8"
        >
          <div>
            <p className="mb-3 text-sm text-[var(--text-soft)]">
              Why it matters
            </p>

            <h3 className="max-w-2xl text-2xl leading-tight md:text-3xl">
              Your website should make the next step obvious.
            </h3>
          </div>

          <div className="space-y-4">
            <p className="leading-relaxed text-[var(--text-soft)]">
              Instead of everything being spread across Facebook, your site puts
              your services, pricing, photos, reviews, and contact options in one
              clear place.
            </p>

            <p className="leading-relaxed text-[var(--text-soft)]">
              So when someone finds you, they don’t have to think — they just
              call, text, or request a quote.
            </p>

            <Link
              href="/services"
              className="inline-block pt-2 text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
            >
              See services →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}