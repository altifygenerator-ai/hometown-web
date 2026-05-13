"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-depth py-32">
      <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />

      {/* LOGO WATERMARK */}
      <div className="pointer-events-none absolute right-[80px] top-1/2 hidden -translate-y-1/2 opacity-[0.06] md:block">
        <Image
          src="/logo.png"
          alt=""
          width={540}
          height={540}
          className="h-auto w-[420px] lg:w-[540px]"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* TOP LINE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm text-[var(--text-soft)]"
        >
          Websites for local Arkansas businesses
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-5xl md:text-7xl"
        >
          Get a website that actually brings in calls and jobs
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-[var(--text-soft)]"
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
            className="text-sm text-[var(--text-soft)] transition hover:text-[var(--text-main)]"
          >
            View work →
          </a>
        </motion.div>

        {/* TRUST + INDUSTRY ROW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {[
            "Built for contractors, service businesses, and local Arkansas companies",
            "Modern mobile-friendly websites designed to bring in calls and leads",
            "SEO-focused structure to help businesses show up better on Google",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)]/70 p-5 backdrop-blur-sm"
            >
              <p className="text-sm leading-relaxed text-[var(--text-soft)]">
                {item}
              </p>
            </div>
          ))}
        </motion.div>

        {/* OFFSET BLOCK */}
       <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid gap-6 rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-card)]/80 p-6 backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr] md:p-8"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Simple, local, and built to work
            </p>

            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-[var(--text-main)] md:text-3xl">
              A clean website that gives people a reason to trust you before
              they ever call.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-soft)]">
              Built for small businesses that want something simple, professional,
              and useful — not a bloated agency site or a template that just sits
              there.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
            {[
              "Free preview before you pay",
              "Mobile-first pages",
              "Built around calls and leads",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--border-soft)] bg-white/60 px-4 py-3 text-sm text-[var(--text-soft)]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}