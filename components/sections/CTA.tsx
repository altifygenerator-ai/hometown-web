"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GOOGLE_PROFILE_URL, PHONE_CALL_URL, PHONE_DASHED, PHONE_TEXT_URL } from "@/lib/site";

const trustItems = [
  "Free preview before payment",
  "Built for small businesses",
  "Mobile-first layouts",
  "Google-focused structure",
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
          <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-[-160px] left-[20%] h-[320px] w-[320px] rounded-full bg-white/5 blur-[120px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm text-white/60">
                Ready when you are
              </p>

              <h2 className="text-balance max-w-2xl text-4xl leading-tight md:text-6xl">
                Want to see what your business could look like online?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Send over your business info, Facebook page, current website if
                you have one, and a few photos. I can put together a clean
                preview so you can see the direction before committing.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-preview"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Get a free preview
                </Link>

                <a
                  href={PHONE_CALL_URL}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Call {PHONE_DASHED} →
                </a>

                <a
                  href={PHONE_TEXT_URL}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Text {PHONE_DASHED} →
                </a>

                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  View Google profile →
                </a>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="max-w-md leading-7 text-white/70">
                Most businesses I work with already have the hard part figured
                out: they do good work. The website just needs to make that
                obvious, organize the details, and give customers a clear next
                step.
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