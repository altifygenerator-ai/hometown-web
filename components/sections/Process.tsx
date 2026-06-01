"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Send the basics",
    text: "Send your business name, services, service area, photos, Facebook page, current website if you have one, and anything you want customers to know.",
  },
  {
    title: "I build a working preview",
    text: "I put together a real website preview so you can see the layout, wording, photos, and overall direction before paying anything.",
  },
  {
    title: "We tighten it up",
    text: "You can request changes to the wording, layout, sections, photos, colors, services, or anything that needs to feel more like your business.",
  },
  {
    title: "Then we launch it live",
    text: "Once it feels right, I handle the launch setup, connect the domain, make sure the basics are in place, and get it online.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute right-[-180px] top-20 h-[360px] w-[360px] rounded-full bg-[var(--accent)] opacity-5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-kicker mb-4">How it works</p>

            <h2 className="text-balance max-w-md text-4xl leading-tight md:text-6xl">
              A simple process that lets you see it first.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-[var(--text-soft)]">
              You do not have to show up with everything figured out. I can work
              from what you already have and shape it into something cleaner,
              clearer, and easier for customers to use.
            </p>
          </motion.div>

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
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-soft)] bg-white text-sm text-[var(--text-soft)] shadow-sm">
                      {i + 1}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm">
                    <h3 className="text-2xl leading-tight">{step.title}</h3>

                    <p className="mt-3 max-w-xl leading-7 text-[var(--text-soft)]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-2xl rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-alt)] p-6">
              <p className="leading-7 text-[var(--text-soft)]">
                The big difference is simple: you are not paying upfront for an
                idea. You get to look at a real working preview first and decide
                if it feels right.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}