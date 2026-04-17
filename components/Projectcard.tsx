"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, index }: any) {
  if (!project) return null;

  const href = project?.live?.url ?? "#";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80, // 🔥 left/right slide
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

          {/* IMAGE */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden border border-[var(--border-soft)]">
            <Image
              src={project.images?.[0] ?? "/placeholder.png"}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
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