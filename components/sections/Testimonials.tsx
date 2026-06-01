"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rebecca Turner",
    business: "Onward & Upward Services",
    label: "Google review",
    time: "6 weeks ago",
    text: "Great service. Dependable. Very responsive and trustworthy. Any time we ask for change on the website he does it immediately. Does amazing work. Very thankful he is on our team at Onward & Upward Services.",
  },
  {
    name: "Isaiah ‘N Kat",
    business: "Local client",
    label: "Google review",
    time: "3 weeks ago",
    text: "Fast, reliable and affordable!",
  },
  {
    name: "Jake Shockley",
    business: "Local client",
    label: "Google review",
    time: "1 week ago",
    text: "Quick, and very helpful.",
  },
];

const trustPoints = [
  "Fast updates when changes are needed",
  "Dependable communication",
  "Affordable small business websites",
  "Helpful after the site goes live",
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-alt)] py-24 md:py-28">
      <div className="pointer-events-none absolute right-[-140px] top-[-140px] h-[400px] w-[400px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[360px] w-[360px] rounded-full bg-black opacity-[0.035] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-kicker mb-4">Client feedback</p>

            <h2 className="text-balance max-w-md text-4xl leading-tight md:text-6xl">
              Real reviews from businesses I’ve helped.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-[var(--text-soft)]">
              A good website is not just about the launch. It also needs clear
              communication, quick updates, and someone who actually helps when
              the business needs changes.
            </p>

            <div className="mt-10 rounded-[1.75rem] border border-[var(--border-soft)] bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-[var(--text-main)]">
                What clients mention most
              </p>

              <div className="mt-5 grid gap-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] px-4 py-3 text-sm text-[var(--text-soft)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2rem] border border-[var(--border-soft)] bg-white p-7 shadow-[var(--shadow-soft)] md:p-10"
            >
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-soft)] pb-5">
                <div>
                  <p className="text-sm font-medium text-[var(--text-main)]">
                    Featured review
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-soft)]">
                    {reviews[0].label} • {reviews[0].time}
                  </p>
                </div>

                <div className="rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm text-[var(--text-soft)]">
                  ★★★★★
                </div>
              </div>

              <p className="text-2xl leading-relaxed tracking-[-0.03em] md:text-3xl">
                “{reviews[0].text}”
              </p>

              <div className="mt-8">
                <p className="text-sm font-medium text-[var(--text-main)]">
                  {reviews[0].name}
                </p>
                <p className="mt-1 text-sm text-[var(--text-soft)]">
                  {reviews[0].business}
                </p>
              </div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {reviews.slice(1).map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.16 + index * 0.08 }}
                  className="rounded-[1.75rem] border border-[var(--border-soft)] bg-white/75 p-6 shadow-sm"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <p className="text-sm text-[var(--text-soft)]">
                      {review.label}
                    </p>

                    <span className="text-sm text-[var(--text-soft)]">
                      ★★★★★
                    </span>
                  </div>

                  <p className="text-xl leading-relaxed text-[var(--text-main)]">
                    “{review.text}”
                  </p>

                  <div className="mt-6 border-t border-[var(--border-soft)] pt-5">
                    <p className="text-sm font-medium text-[var(--text-main)]">
                      {review.name}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-soft)]">
                      {review.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-[1.75rem] bg-[var(--text-main)] p-7 text-white"
            >
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/55">
                Proof that matters
              </p>

              <h3 className="mt-4 text-3xl leading-tight">
                Being easy to reach after launch is part of the service.
              </h3>

              <p className="mt-4 leading-7 text-white/68">
                For most small businesses, the website is not a one-time thing.
                Photos change, services change, offers change, and the site
                needs to keep up without turning into a headache.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}