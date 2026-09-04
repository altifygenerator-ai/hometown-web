"use client";

import Link from "next/link";
import { PHONE_CALL_URL, PHONE_DISPLAY, PHONE_TEXT_URL } from "@/lib/site";
import { motion } from "framer-motion";

const trustItems = [
  "Free working preview before you pay",
  "Built around calls, texts, and Google",
  "Clear pricing with no pressure",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-depth px-6 py-28 md:py-32">
      <div className="pointer-events-none absolute right-[-160px] top-[-160px] h-[460px] w-[460px] rounded-full bg-[var(--accent)] opacity-[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[420px] w-[420px] rounded-full bg-black opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-soft)] backdrop-blur">
              Arkansas Web Design for Small Businesses
            </p>

            <h1 className="max-w-3xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Arkansas web design that makes local businesses look worth calling.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              Most local businesses already do good work. The website just needs
              to make that obvious before someone moves on to the next result. I
              build clean, modern websites for Arkansas businesses that need more
              trust, clearer info, and easier ways for customers to call, text,
              or request a quote.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/free-preview" className="btn btn-primary">
                Get your free preview now
              </Link>

              <Link href="/portfolio" className="btn btn-secondary">
                See recent work
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--text-soft)]">
              <a
                href={PHONE_CALL_URL}
                className="transition hover:text-[var(--text-main)]"
              >
                Call {PHONE_DISPLAY}
              </a>
              <span aria-hidden="true">•</span>
              <a
                href={PHONE_TEXT_URL}
                className="transition hover:text-[var(--text-main)]"
              >
                Text for a quick question
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[var(--border-soft)] bg-white/70 px-4 py-2 text-sm text-[var(--text-soft)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 44, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--accent)] opacity-[0.07] blur-2xl" />

            <div className="relative rounded-[2.25rem] border border-[var(--border-soft)] bg-white p-3 shadow-[var(--shadow-strong)]">
              <div className="video-card h-[360px] md:h-[520px]">
                <video
                  src="/videos/newatlivingwaterfinished.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/og-image.png"
                  className="hero-demo-video"
                />

                <div className="absolute bottom-0 left-0 z-20 p-5 md:p-7">
                  <div className="max-w-md rounded-2xl border border-white/10 bg-black/65 p-5 shadow-2xl backdrop-blur-md md:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      Live project preview
                    </p>

                    <h2 className="mt-3 text-2xl leading-tight text-white md:text-4xl">
                      See the direction first, then decide if it fits.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-white/75">
                      A real working preview gives you something to judge before
                      you spend money on a full build.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-20 grid gap-4 md:grid-cols-3"
        >
          {[
            {
              title: "For local service businesses",
              text: "Contractors, cleaners, lawn care, restaurants, shops, rentals, and local companies that need customers to understand what they do fast.",
            },
            {
              title: "Built for Google and mobile",
              text: "Clean structure, fast pages, strong service sections, and layouts that make sense on the phone people are actually using.",
            },
            {
              title: "Designed to create action",
              text: "The goal is not just a prettier site. The goal is more calls, quote requests, messages, and trust before the customer reaches out.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="premium-shell rounded-[1.5rem] p-6"
            >
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}