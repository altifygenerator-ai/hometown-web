"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  "Application flows and intake systems",
  "Admin dashboards and staff portals",
  "Booking logic and management tools",
  "Custom internal tools and SaaS-style web apps",
];

export default function CustomSystemsPreview() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="section-kicker mb-4">More than websites</p>
            <h2 className="max-w-2xl text-4xl leading-tight md:text-6xl">
              Need the workflow, dashboard, or app behind the website too?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[var(--text-soft)]">
              Some projects need more than a cleaner website. They need a real
              system behind them. That can mean applications, dashboards,
              customer portals, booking tools, internal software, or a full
              web app built around how the business actually runs.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]"
        >
          <div className="overflow-hidden rounded-[2.25rem] border border-[var(--border-soft)] bg-white shadow-[var(--shadow-soft)]">
            <div className="grid gap-4 p-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-alt)] p-5">
                <p className="text-xs text-[var(--text-soft)]">Business system proof</p>
                <h3 className="mt-3 text-2xl">Clark Transportation Services</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">
                  Driver application flow, recruiting site integration, admin
                  tools, and organized applicant handling.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-alt)] p-5">
                <p className="text-xs text-[var(--text-soft)]">App proof</p>
                <h3 className="mt-3 text-2xl">Webvidence</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">
                  Prospecting workflow, evidence-backed outreach, tracking, and
                  app-style repeat use.
                </p>
              </div>
            </div>

            <div className="border-t border-[var(--border-soft)] p-6">
              <Link href="/custom-business-systems" className="btn btn-secondary">
                See custom systems and web apps
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[var(--border-soft)] bg-white px-5 py-4 text-sm text-[var(--text-soft)] shadow-[var(--shadow-soft)]"
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
