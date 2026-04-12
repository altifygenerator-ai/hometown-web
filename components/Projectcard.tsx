"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectCard({ project }: any) {
  const [index, setIndex] = useState(0);

  return (
    <div className="card hover:-translate-y-1 transition">

      <div className="relative h-52">

        <Image
          src={project.images[index]}
          alt={project.title}
          fill
          className="object-cover rounded-xl"
        />

        {/* arrows */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={() =>
                setIndex((prev) =>
                  prev === 0 ? project.images.length - 1 : prev - 1
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded"
            >
              ←
            </button>

            <button
              onClick={() =>
                setIndex((prev) => (prev + 1) % project.images.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded"
            >
              →
            </button>
          </>
        )}

      </div>

   
      <div className="p-5 space-y-3">

  <h3 className="font-semibold">{project.title}</h3>

  <p className="text-sm text-[var(--text-soft)]">
    {project.summary}
  </p>

  <div className="flex gap-2 flex-wrap">
    {project.tags.map((tag: string) => (
      <span
        key={tag}
        className="text-xs bg-white px-3 py-1 rounded-full border"
      >
        {tag}
      </span>
    ))}
  </div>

  {/* 🔥 LIVE LINK */}
  {project.live && (
    <a
      href={project.live.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-[var(--teal)] hover:underline"
    >
      View Live →
    </a>
  )}

    </div>
</div>
  );
}