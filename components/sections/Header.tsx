"use client";

import Link from "next/link";
import { useState } from "react";

const serviceLinks = [
  {
    label: "All Services",
    href: "/services",
    text: "Web design, local SEO, updates, and Google-ready sites.",
  },
  {
    label: "Contractor Websites",
    href: "/contractor-websites",
    text: "Sites built for roofers, remodelers, plumbers, and trades.",
  },
  {
    label: "Local SEO Arkansas",
    href: "/local-seo-arkansas",
    text: "Google visibility, local rankings, and SEO-focused structure.",
  },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--bg-main)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LEFT — BRAND */}
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-[var(--text-main)]"
        >
          Hometown Web Services
        </Link>

        {/* RIGHT — NAV */}
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-6 text-sm text-[var(--text-soft)] md:flex">
            <Link
              href="/portfolio"
              className="hover:text-[var(--text-main)]"
            >
              Work
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center gap-1 hover:text-[var(--text-main)]"
              >
                Services
                <span
                  className={`text-xs transition ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full w-[280px] -translate-x-1/2 pt-4">
                  <div className="card overflow-hidden p-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-2xl px-4 py-3 hover:bg-[var(--bg-alt)]"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="block text-sm font-medium text-[var(--text-main)]">
                          {link.label}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-[var(--text-soft)]">
                          {link.text}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <Link href="#contact" className="btn btn-primary text-sm">
            Get a site
          </Link>
        </div>
      </div>
    </header>
  );
}