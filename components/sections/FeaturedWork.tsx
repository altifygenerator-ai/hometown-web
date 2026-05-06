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

export default function FeaturedWork() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* SUBTLE GLOW */}
      <div className="absolute left-[-150px] top-[120px] w-[320px] h-[320px] bg-[var(--accent)] opacity-5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm text-[var(--text-soft)] mb-4">
            Selected work
          </p>

          <h2 className="text-3xl md:text-5xl leading-tight">
            Websites built to look modern, rank better, and bring in more calls.
          </h2>

          <p className="mt-6 text-[var(--text-soft)] leading-relaxed max-w-xl">
            Most small businesses already do solid work. The problem is their
            online presence usually does not reflect it. These projects were
            built to improve trust, visibility, and lead flow without making
            things overly complicated.
          </p>
        </motion.div>

        {/* MAIN FEATURED PROJECT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16"
        >
          <Link href="/portfolio" className="group block">
            <div className="relative">
              <div className="absolute inset-0 scale-[1.02] bg-black/5 blur-xl rounded-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-black">
                <video
                  src={projects[0].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[420px] md:h-[560px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 md:p-10 max-w-2xl">
                  <p className="text-sm uppercase tracking-[0.22em] text-white/70 mb-3">
                    Featured Project
                  </p>

                  <h3 className="text-3xl md:text-5xl text-white leading-tight">
                    {projects[0].title}
                  </h3>

                  <p className="mt-5 text-white/80 leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* SECONDARY PROJECTS */}
        <div className="grid gap-8 md:grid-cols-2 mt-10">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
              }}
            >
              <Link href="/portfolio" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)]">
                  <div className="relative overflow-hidden">
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl">{project.title}</h3>

                    <p className="mt-4 text-[var(--text-soft)] leading-relaxed">
                      {project.description}
                    </p>

                    <span className="inline-block mt-5 text-sm text-[var(--text-soft)] group-hover:text-[var(--text-main)] transition">
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm hover:bg-[var(--bg-card)] transition"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}