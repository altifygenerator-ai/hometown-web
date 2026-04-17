"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Joei",
    business: "Little Cove Early Learning",
    text: "We’re thrilled to be showing up in search results already. Your help with the website updates is a big part of that, so thank you again!",
  },
  {
    name: "Rebecca T",
    business: "Onward and Upward Services",
    text: "I really appreciate everything. I knew you were the right person to reach out to.",
  },

];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* 🔥 subtle glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <p className="text-sm text-[var(--text-soft)] mb-4">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-5xl">
            What people are seeing after getting a real site
          </h2>
        </motion.div>

        {/* FEATURED TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 md:p-12 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-alt)] max-w-4xl"
        >
          <p className="text-xl md:text-2xl leading-relaxed">
            “{testimonials[0].text}”
          </p>

          <div className="mt-6 text-sm text-[var(--text-soft)]">
            {testimonials[0].name} — {testimonials[0].business}
          </div>
        </motion.div>

        {/* SUPPORTING TESTIMONIALS */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl border border-[var(--border-soft)]"
            >
              <p className="text-[var(--text-main)]">
                “{t.text}”
              </p>

              <div className="mt-4 text-sm text-[var(--text-soft)]">
                {t.name} — {t.business}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}