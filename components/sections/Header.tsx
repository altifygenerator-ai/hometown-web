"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-main)]/80 backdrop-blur-md border-b border-[var(--border-soft)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — BRAND */}
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-[var(--text-main)]"
        >
          Hometown Web Services
        </Link>

        {/* RIGHT — NAV */}
        <div className="flex items-center gap-8">

          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-soft)]">
            <Link
              href="/portfolio"
              className="hover:text-[var(--text-main)] transition"
            >
              Work
            </Link>

            <Link
              href="/services"
              className="hover:text-[var(--text-main)] transition"
            >
              Services
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="btn btn-primary text-sm"
          >
            Get a site
          </Link>

        </div>
      </div>
    </header>
  );
}