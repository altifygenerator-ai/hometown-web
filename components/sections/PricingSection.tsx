"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$300–$500",
    desc: "Simple one-page site to get your business online",
  },
  {
    name: "Growth",
    price: "$600–$900",
    desc: "Multi-page site built to bring in more leads",
    highlight: true,
  },
  {
    name: "Full Setup",
    price: "$1100–$2000",
    desc: "Full build with structure, layout, and polish",
  },
];

export default function PricingSection() {
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
            Pricing
          </p>

          <h2 className="text-3xl md:text-5xl">
            Simple pricing that makes sense
          </h2>
        </motion.div>

        {/* STACKED TIERS */}
        <div className="mt-16 space-y-8 max-w-2xl">

          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl border ${
                tier.highlight
                  ? "border-[var(--text-main)]"
                  : "border-[var(--border-soft)]"
              }`}
            >
              <h3 className="text-xl">{tier.name}</h3>

              <p className="text-2xl mt-1">{tier.price}</p>

              <p className="text-[var(--text-soft)] mt-2">
                {tier.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* OFFSET TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 ml-auto max-w-md"
        >
          <p className="text-[var(--text-soft)]">
            Every site is built around your business, so pricing can vary a bit,
            but this gives you a solid idea of what to expect.
          </p>
        </motion.div>

      </div>
    </section>
  );
}