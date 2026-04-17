"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">

      {/* 🔥 BACKGROUND DEPTH (RIGHT SIDE) */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      {/* 🔥 SECONDARY SOFT GLOW (BOTTOM) */}
      <div className="absolute bottom-[-160px] left-[20%] w-[320px] h-[320px] bg-[var(--accent)] opacity-[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* MAIN BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl">
            If your site isn’t bringing in customers, it’s costing you
          </h2>

          <p className="mt-6 text-lg text-[var(--text-soft)]">
            I can put together a clean preview of what your site could look like,
            based on your business. No upfront payment, no pressure — just
            something real you can look at.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a href="sms:8702604880" className="btn btn-primary">
              Get a free preview
            </a>

            <a
              href="/services"
              className="text-sm text-[var(--text-soft)] hover:text-[var(--text-main)] transition"
            >
              See services →
            </a>
            <a
  href="https://share.google/f18YjPUwYQatjbbnZ"
  target="_blank"
  className="text-sm text-[var(--text-soft)] hover:text-[var(--text-main)]"
>
  View Google profile →
</a>
          </div>
        </motion.div>

        {/* OFFSET SUPPORT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 ml-auto max-w-md"
        >
          <p className="text-[var(--text-soft)]">
            Most businesses I work with already have customers — they just need a
            clearer, easier way for people to find them and reach out.
          </p>
        </motion.div>

      </div>
    </section>
  );
}