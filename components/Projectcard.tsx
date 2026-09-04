"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, index }: any) {
  if (!project) return null;

  const href = project?.live?.url || "#";

  const videoSrc = project.videos?.[0];
  const imageSrc = project.images?.[0];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
    >
      <Link href={href} className="group block">
        <div className="relative">
          {/* DEPTH */}
          <div className="absolute inset-0 scale-[1.02] bg-black/5 blur-xl rounded-2xl" />

          {/* IMAGE / VIDEO */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden border border-[var(--border-soft)] bg-black">
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              />
            ) : imageSrc ? (
              <Image
                src={imageSrc}
                alt={project.title || "Portfolio project"}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-full w-full flex-col justify-between bg-[linear-gradient(145deg,rgba(0,0,0,0.94),rgba(0,0,0,0.78))] p-6 text-white">
                <div>
                  {project.category && (
                    <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/60">
                      {project.category}
                    </p>
                  )}
                  <h4 className="mt-4 max-w-xs text-2xl leading-tight text-white">
                    {project.title}
                  </h4>
                </div>

                <div className="grid gap-2">
                  {(project.tags || []).slice(0, 3).map((tag: string) => (
                    <div key={tag} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-4 space-y-2">
          <h3 className="text-lg">{project.title}</h3>

          <p className="text-sm text-[var(--text-soft)]">
            {project.summary}
          </p>

          {/* TAGS */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 border border-[var(--border-soft)] rounded-full text-[var(--text-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}