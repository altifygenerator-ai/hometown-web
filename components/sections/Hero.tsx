"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-32 bg-depth overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[var(--accent)] opacity-10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP LINE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-[var(--text-soft)] mb-6"
        >
          Websites for local Arkansas businesses
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl max-w-3xl"
        >
          Get a website that actually brings in calls and jobs
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-[var(--text-soft)] max-w-xl"
        >
          Most people find you on Facebook, but there’s no clear place to see
          your services, pricing, or how to reach you. I build simple, clean
          websites that show up on Google and make it easy for customers to call,
          text, or request a quote.
        </motion.p>

        {/* CTA ROW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#contact" className="btn btn-primary">
            Get a free preview
          </a>

          <a
            href="/portfolio"
            className="text-sm text-[var(--text-soft)] hover:text-[var(--text-main)] transition"
          >
            View work →
          </a>
        </motion.div>

        {/* OFFSET BLOCK (asymmetry) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 ml-auto max-w-md"
        >
          <p className="text-sm text-[var(--text-soft)]">
            Built for small businesses that want something simple that actually
            works — not something complicated that just sits there.
          </p>
        </motion.div>

      </div>
    </section>
  );
}