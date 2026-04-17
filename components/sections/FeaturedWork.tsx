"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* 🔥 SUBTLE BACKGROUND GLOW */}
      <div className="absolute left-[-150px] top-[120px] w-[320px] h-[320px] bg-[var(--accent)] opacity-5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <p className="text-sm text-[var(--text-soft)] mb-4">
            Selected work
          </p>

          <h2 className="text-3xl md:text-5xl">
            A recent site built to bring in more calls
          </h2>
        </motion.div>

        {/* MAIN PROJECT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16"
        >
          <Link href="/portfolio" className="group block">

            <div className="relative">

              {/* 🔥 SOFT DEPTH SHADOW */}
              <div className="absolute inset-0 scale-[1.02] bg-black/5 blur-xl rounded-2xl" />

              <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-[var(--border-soft)]">

                <Image
                  src="/onward1.png"
                  alt="Featured project"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />

              </div>

            </div>

          </Link>
        </motion.div>

        {/* OFFSET TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 ml-auto max-w-md"
        >
          <p className="text-[var(--text-soft)]">
            Built to replace scattered Facebook posts with a clean, simple site
            where customers can quickly understand services and reach out without
            the back and forth.
          </p>

          <Link
            href="/portfolio"
            className="inline-block mt-5 text-sm text-[var(--text-soft)] hover:text-[var(--text-main)] transition"
          >
            View full portfolio →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}