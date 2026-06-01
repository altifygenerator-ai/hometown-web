"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const reasons = [
  {
    title: "You see the site before paying",
    text: "I can build a working preview first so you are not guessing what you are buying.",
  },
  {
    title: "You work directly with the builder",
    text: "No agency layers, no weird handoff, and no confusing process. You talk to the person actually building the site.",
  },
  {
    title: "Built for small business budgets",
    text: "Most local businesses do not need a bloated agency package. They need something sharp, useful, and realistic.",
  },
  {
    title: "I can work from what you already have",
    text: "Facebook photos, old websites, service lists, Google profiles, reviews, and rough ideas can all be shaped into a cleaner website.",
  },
];

export default function WhyHometown() {
  return (
    <section className="bg-[var(--bg-main)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="section-kicker mb-4">Why Hometown</p>

            <h2 className="text-balance text-4xl leading-tight md:text-6xl">
              A simpler way to get a better business website.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-soft)]">
              You do not need a giant agency pitch to get a site that looks
              professional and helps people contact you. The process should be
              simple, direct, and built around what actually helps your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/free-preview" className="btn btn-primary">
                Get a free preview
              </Link>

              <Link href="/services" className="btn btn-secondary">
                View pricing
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-7 shadow-sm"
              >
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-full bg-[var(--text-main)] text-sm text-white">
                  {index + 1}
                </div>

                <h3 className="text-2xl">{item.title}</h3>

                <p className="mt-3 max-w-2xl leading-7 text-[var(--text-soft)]">
                  {item.text}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-[1.75rem] bg-[var(--text-main)] p-7 text-white"
            >
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/55">
                Bottom line
              </p>

              <h3 className="mt-4 text-3xl leading-tight">
                The site should make your business easier to trust before the
                customer ever calls.
              </h3>

              <p className="mt-4 leading-7 text-white/68">
                That is what the design, wording, structure, photos, calls to
                action, and local SEO are all working toward.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}