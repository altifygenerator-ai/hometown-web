"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$300–$500",
    desc: "Simple one-page site to get your business online with a clean, professional presence.",
    features: [
      "One-page website",
      "Mobile-friendly layout",
      "Basic SEO setup",
      "Contact buttons",
    ],
  },
  {
    name: "Growth",
    price: "$600–$900",
    desc: "Multi-page site built for businesses that need more trust, structure, and lead flow.",
    highlight: true,
    features: [
      "Multi-page website",
      "Service sections/pages",
      "Local SEO structure",
      "Free revisions",
    ],
  },
  {
    name: "Full Setup",
    price: "$1100–$2000",
    desc: "Full build with stronger structure, more polish, and a more complete online presence.",
    features: [
      "Full custom build",
      "Advanced page structure",
      "Google-focused setup",
      "Launch support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute right-[-140px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Pricing
            </p>

            <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
              Simple pricing that makes sense.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
            Every site is built around your business, so pricing can vary a bit,
            but these ranges give you a clear idea of what to expect before we
            ever start.
          </p>
        </motion.div>

        {/* PRICING GRID */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-[2rem] border p-6 md:p-7 ${
                tier.highlight
                  ? "border-[var(--text-main)] bg-[var(--text-main)] text-white"
                  : "border-[var(--border-soft)] bg-[var(--bg-card)]"
              }`}
            >
              {tier.highlight && (
                <div className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs text-white/75">
                  Most common
                </div>
              )}

              <div>
                <h3 className="text-2xl">{tier.name}</h3>

                <p
                  className={`mt-3 text-3xl ${
                    tier.highlight ? "text-white" : "text-[var(--text-main)]"
                  }`}
                >
                  {tier.price}
                </p>

                <p
                  className={`mt-4 leading-relaxed ${
                    tier.highlight
                      ? "text-white/70"
                      : "text-[var(--text-soft)]"
                  }`}
                >
                  {tier.desc}
                </p>
              </div>

              <div
                className={`mt-8 space-y-3 border-t pt-6 ${
                  tier.highlight ? "border-white/15" : "border-[var(--border-soft)]"
                }`}
              >
                {tier.features.map((feature) => (
                  <div
                    key={feature}
                    className={`text-sm ${
                      tier.highlight
                        ? "text-white/70"
                        : "text-[var(--text-soft)]"
                    }`}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* NOTE STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 grid gap-6 border-t border-[var(--border-soft)] pt-8 md:grid-cols-[0.8fr_1.2fr]"
        >
          <p className="text-sm text-[var(--text-soft)]">
            Not sure which one fits?
          </p>

          <p className="max-w-3xl leading-relaxed text-[var(--text-soft)]">
            Send me your business info and I can tell you which setup makes the
            most sense. I’ll keep it straightforward and won’t push a bigger
            package if a smaller site would do the job.
          </p>
        </motion.div>
      </div>
    </section>
  );
}