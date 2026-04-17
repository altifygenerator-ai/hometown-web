"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-[var(--bg-alt)]">

      <div className="max-w-6xl mx-auto px-6">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <p className="text-sm text-[var(--text-soft)] mb-4">
            What I do
          </p>

          <h2 className="text-3xl md:text-5xl">
            Simple websites that help people find you and reach out
          </h2>
        </motion.div>

        {/* MAIN TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 max-w-2xl"
        >
          <p className="text-lg text-[var(--text-soft)]">
            I build clean, modern websites for small businesses that make it easy
            for customers to understand what you do, find you on Google, and
            contact you without confusion.
          </p>
        </motion.div>

        {/* OFFSET BLOCK (SEO + CONVERSION LANGUAGE) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 ml-auto max-w-md space-y-4"
        >
          <p className="text-[var(--text-soft)]">
            Instead of everything being spread across Facebook, your site puts
            your services, pricing, and contact options in one clear place.
          </p>

          <p className="text-[var(--text-soft)]">
            So when someone finds you, they don’t have to think — they just call,
            text, or request a quote.
          </p>

          <Link
            href="/services"
            className="inline-block pt-2 text-sm text-[var(--text-soft)] hover:text-[var(--text-main)] transition"
          >
            See services →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}