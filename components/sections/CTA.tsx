"use client";

import { motion } from "framer-motion";

const trustItems = [
  "Built for small businesses",
  "Mobile-first layouts",
  "Google-focused structure",
  "Arkansas-based",
];

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[var(--text-main)] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14"
        >
          {/* BACKGROUND DEPTH */}
          <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-[-160px] left-[20%] h-[320px] w-[320px] rounded-full bg-white/5 blur-[120px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            {/* LEFT */}
            <div>
              <p className="mb-5 text-sm text-white/60">
                Ready when you are
              </p>

              <h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">
                If your site isn’t bringing in customers, it’s costing you.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                I can put together a clean preview of what your site could look
                like based on your business. No upfront payment, no pressure —
                just something real you can look at.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="sms:8702604880"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get a free preview
                </a>

                <a
                  href="/services"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  See services →
                </a>

                <a
                  href="https://share.google/f18YjPUwYQatjbbnZ"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  View Google profile →
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:pl-8">
              <p className="max-w-md leading-relaxed text-white/70">
                Most businesses I work with already have customers. They just
                need a clearer, easier way for people to find them, trust them,
                and reach out without having to dig through Facebook.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="border-t border-white/15 pt-3 text-sm text-white/65"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}