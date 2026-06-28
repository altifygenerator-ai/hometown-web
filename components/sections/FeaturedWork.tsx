"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "TrueClean Solutions",
    label: "Exterior Cleaning Website",
    description:
      "A bold service business site built to make soft washing, exterior cleaning, concrete cleaning, and quote requests easy to understand and act on.",
    video: "/videos/truecleanlive.mp4",
  },
  {
    title: "Lakes Area R&R",
    label: "Local Business Rebuild",
    description:
      "A cleaner rebuild for a recreation business, organizing rentals, local links, shopping, coffee, and visitor info into one easier site.",
    video: "/videos/lakesrnrlive.mp4",
  },
  {
    title: "Arkansas Geek",
    label: "Specialty Service Website",
    description:
      "A two-lane website built to separate computer repair from air-cooled Volkswagen repair while keeping the brand simple, clean, and easy to follow.",
    video: "/videos/geek.mp4",
  },
];

const proofPoints = [
  "Proof-first project sections",
  "Mobile quote and call flow",
  "Local SEO structure",
  "Clean service-area targeting",
];

export default function FeaturedWork() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute left-[-150px] top-[120px] h-[320px] w-[320px] rounded-full bg-[var(--accent)] opacity-5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="section-kicker mb-4">Selected work</p>

            <h2 className="text-balance text-4xl leading-tight md:text-6xl">
              Website demos built around how local customers actually decide.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              People usually make a quick judgment before they ever call. These
              builds are designed to make the business look active, trustworthy,
              easy to understand, and easy to contact.
            </p>
          </div>

          <div className="premium-shell rounded-[2rem] p-6">
            <p className="text-sm font-medium text-[var(--text-main)]">
              What the work is built to do
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[var(--border-soft)] bg-white/70 px-4 py-3 text-sm text-[var(--text-soft)]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <Link href="/portfolio" className="group block">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border-soft)] bg-black shadow-[var(--shadow-strong)]">
              <video
                src={projects[0].video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-[380px] w-full bg-black object-contain md:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 max-w-3xl p-7 md:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                  {projects[0].label}
                </p>

                <h3 className="text-4xl leading-tight text-white md:text-6xl">
                  {projects[0].title}
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                  {projects[0].description}
                </p>

                <span className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition group-hover:bg-white/90">
                  View portfolio
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

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
                <div className="h-full overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-white shadow-[var(--shadow-soft)] transition duration-300 group-hover:-translate-y-1">
                  <div className="relative overflow-hidden bg-black">
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-[260px] w-full bg-black object-contain"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <p className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-black">
                      {project.label}
                    </p>
                  </div>

                  <div className="p-7">
                    <h3 className="text-3xl">{project.title}</h3>

                    <p className="mt-4 leading-7 text-[var(--text-soft)]">
                      {project.description}
                    </p>

                    <span className="mt-6 inline-block text-sm text-[var(--text-soft)] transition group-hover:text-[var(--text-main)]">
                      View project →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}