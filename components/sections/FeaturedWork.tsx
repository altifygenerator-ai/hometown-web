"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Richards Property Management",
    description:
      "Modern contractor-style site focused on mobile experience, cleaner branding, and turning local traffic into actual calls.",
    video: "/videos/demorpm.mp4",
  },
  {
    title: "Glenwood Arkansas Tourism",
    description:
      "Tourism-style local guide built around cabins, restaurants, attractions, and search visibility for Arkansas travel traffic.",
    video: "/videos/demoglenwood.mp4",
  },
  {
    title: "Lyn and Lilis Cleaning",
    description:
      "High-trust service business layout designed for cleaning companies and local service providers.",
    video: "/videos/lynnlilisdemo.mp4",
  },
];

const proofPoints = [
  "Built for mobile visitors first",
  "Structured around calls, quotes, and leads",
  "Designed with local SEO in mind",
];

export default function FeaturedWork() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      {/* SUBTLE GLOW */}
      <div className="pointer-events-none absolute left-[-150px] top-[120px] h-[320px] w-[320px] rounded-full bg-[var(--accent)] opacity-5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Selected work
            </p>

            <h2 className="text-3xl leading-tight md:text-5xl">
              Websites built to look modern, rank better, and bring in more
              calls.
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-[var(--text-soft)]">
              Most small businesses already do solid work. The problem is their
              online presence usually does not reflect it. These projects were
              built to improve trust, visibility, and lead flow without making
              things overly complicated.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-card)]/70 p-6 backdrop-blur-sm">
            <p className="text-sm font-medium text-[var(--text-main)]">
              What these sites are built to do
            </p>

            <div className="mt-5 grid gap-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[var(--border-soft)] bg-white/60 px-4 py-3 text-sm text-[var(--text-soft)]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MAIN FEATURED PROJECT */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <Link href="/portfolio" className="group block">
            <div className="relative">
              <div className="absolute inset-0 scale-[1.015] rounded-[2rem] bg-black/5 blur-xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-black">
                <video
                  src={projects[0].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 max-w-2xl p-7 md:p-10">
                  <p className="mb-3 text-sm uppercase tracking-[0.22em] text-white/70">
                    Featured Project
                  </p>

                  <h3 className="text-3xl leading-tight text-white md:text-5xl">
                    {projects[0].title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-white/80">
                    {projects[0].description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* SECONDARY PROJECTS */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
              }}
            >
              <Link href="/portfolio" className="group block h-full">
                <div className="h-full overflow-hidden rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--bg-card)] transition duration-300 group-hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl">{project.title}</h3>

                    <p className="mt-4 leading-relaxed text-[var(--text-soft)]">
                      {project.description}
                    </p>

                    <span className="mt-5 inline-block text-sm text-[var(--text-soft)] transition group-hover:text-[var(--text-main)]">
                      View project →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm transition hover:bg-[var(--bg-card)]"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}