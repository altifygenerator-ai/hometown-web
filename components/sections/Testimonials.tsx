"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Joei",
    business: "Little Cove Early Learning",
    text: "We’re thrilled to be showing up in search results already. Your help with the website updates is a big part of that, so thank you again!",
  },
  {
    name: "Rebecca T",
    business: "Onward and Upward Services",
    text: "Great service. Dependable. Very responsive and trustworthy. Any time we ask for change on the website he does it immediately. Does amazing work. Very thankful he is on our team at Onward & Upward Services.",
  },
];

const trustPoints = [
  "Free preview before you pay",
  "Fast updates and clear communication",
  "Built for real local business goals",
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-alt)] py-24 md:py-28">
      {/* SUBTLE GLOW */}
      <div className="pointer-events-none absolute right-[-140px] top-[-140px] h-[400px] w-[400px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Testimonials
            </p>

            <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
              Real feedback from businesses that needed a better online presence.
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-[var(--text-soft)]">
              I try to keep the process simple: build something useful, make it
              easy to understand, and actually help when changes are needed.
            </p>

            <div className="mt-10 space-y-4 border-l border-[var(--border-soft)] pl-6">
              {trustPoints.map((point) => (
                <p key={point} className="text-sm text-[var(--text-soft)]">
                  {point}
                </p>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* FEATURED TESTIMONIAL */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-7 md:p-10"
            >
              <div className="mb-8 flex items-center justify-between gap-4 border-b border-[var(--border-soft)] pb-5">
                <p className="text-sm text-[var(--text-soft)]">
                  Client result
                </p>

                <span className="rounded-full border border-[var(--border-soft)] px-4 py-2 text-xs text-[var(--text-soft)]">
                  Search visibility
                </span>
              </div>

              <p className="text-2xl leading-relaxed md:text-3xl">
                “{testimonials[0].text}”
              </p>

              <div className="mt-8">
                <p className="text-sm text-[var(--text-main)]">
                  {testimonials[0].name}
                </p>
                <p className="mt-1 text-sm text-[var(--text-soft)]">
                  {testimonials[0].business}
                </p>
              </div>
            </motion.div>

            {/* SECOND TESTIMONIAL */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white/40 p-6 md:p-8"
            >
              <p className="leading-relaxed text-[var(--text-main)]">
                “{testimonials[1].text}”
              </p>

              <div className="mt-6 border-t border-[var(--border-soft)] pt-5">
                <p className="text-sm text-[var(--text-main)]">
                  {testimonials[1].name}
                </p>
                <p className="mt-1 text-sm text-[var(--text-soft)]">
                  {testimonials[1].business}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}