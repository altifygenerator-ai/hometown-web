"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Send over your business info",
    text: "You send the basics — what you do, where you work, photos, services, and any examples you like.",
  },
  {
    title: "I build a full preview",
    text: "I put together a real working preview so you can see the direction before paying anything.",
  },
  {
    title: "You request changes",
    text: "We adjust the wording, layout, sections, photos, or anything else that needs tightened up.",
  },
  {
    title: "We launch it live",
    text: "Once it feels right, I connect the domain, handle setup, and get the site live.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute right-[-180px] top-20 h-[360px] w-[360px] rounded-full bg-[var(--accent)] opacity-5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              How it works
            </p>

            <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
              A simple process that doesn’t waste your time.
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-[var(--text-soft)]">
              You don’t have to show up with everything figured out. I keep the
              process simple, build the first version, and help shape it from
              there.
            </p>
          </motion.div>

          {/* TIMELINE */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute left-[18px] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-[var(--border-soft)] md:block" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.title} className="relative md:pl-14">
                  <div className="mb-4 flex items-center gap-4 md:absolute md:left-0 md:top-0 md:mb-0">
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-soft)] bg-[var(--bg-card)] text-sm text-[var(--text-soft)]">
                      {i + 1}
                    </div>
                  </div>

                  <div className="border-b border-[var(--border-soft)] pb-8">
                    <h3 className="text-2xl leading-tight">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-relaxed text-[var(--text-soft)]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* SOFT TRUST NOTE */}
            <div className="mt-10 max-w-2xl border-l border-[var(--border-soft)] pl-6">
              <p className="leading-relaxed text-[var(--text-soft)]">
                You’ll see a full version of your site before paying anything,
                so there’s no guessing, no awkward commitment, and no paying for
                something you haven’t even seen yet.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}