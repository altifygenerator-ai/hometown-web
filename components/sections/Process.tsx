"use client";

import { motion } from "framer-motion";

const steps = [
  "Send over your business info",
  "I build a full preview of your site",
  "You request any changes you want",
  "We launch it live",
];

export default function Process() {
  return (
    <section className="py-32">

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
            How it works
          </p>

          <h2 className="text-3xl md:text-5xl">
            A simple process that doesn’t waste your time
          </h2>
        </motion.div>

        {/* STEPS LIST */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 max-w-2xl space-y-6"
        >
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">

              <div className="text-sm text-[var(--text-soft)] mt-1">
                {i + 1}.
              </div>

              <p className="text-lg">
                {step}
              </p>

            </div>
          ))}
        </motion.div>

        {/* OFFSET TRUST BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 ml-auto max-w-md space-y-4"
        >
          <p className="text-[var(--text-soft)]">
            You don’t have to figure everything out upfront. I handle the setup
            and structure so you can just focus on your business.
          </p>

          <p className="text-[var(--text-soft)]">
            You’ll see a full version of your site before paying anything, so
            there’s no guesswork or risk.
          </p>
        </motion.div>

      </div>
    </section>
  );
}