"use client";

import { motion } from "framer-motion";

import { homeFaqs } from "@/data/home-faqs";

export default function FAQSection() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Common questions
            </p>

            <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
              Straight answers before you start.
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-[var(--text-soft)]">
              Most small businesses do not need a giant agency or confusing
              setup. They need a clean site that explains the business, builds
              trust, and makes contacting them easy.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {homeFaqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[var(--border-soft)] pb-6"
              >
                <h3 className="text-xl leading-tight">{faq.question}</h3>

                <p className="mt-3 leading-relaxed text-[var(--text-soft)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}