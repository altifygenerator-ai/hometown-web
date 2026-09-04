"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PHONE_CALL_URL, PHONE_DISPLAY } from "@/lib/site";

const serviceLinks = [
  {
    label: "All Website Services",
    href: "/services",
    text: "Web design, local SEO, support, and Google-ready sites.",
  },
  {
    label: "Contractor Website Design",
    href: "/contractor-websites",
    text: "Sites built for roofers, remodelers, plumbers, and trades.",
  },
  {
    label: "Vacation Rental Websites",
    href: "/vacation-rental-websites",
    text: "Sites for cabins, Airbnbs, short-term rentals, and lodging.",
  },
  {
    label: "Custom Systems & Web Apps",
    href: "/custom-business-systems",
    text: "Admin dashboards, application flows, portals, and custom business software.",
  },
  {
    label: "Website Redesigns",
    href: "/website-redesigns",
    text: "Rebuild outdated sites without losing the parts that already work.",
  },
  {
    label: "Website Maintenance",
    href: "/website-maintenance",
    text: "Ongoing updates, fixes, content changes, and site support.",
  },
  {
    label: "Local SEO Services Arkansas",
    href: "/local-seo-arkansas",
    text: "Google visibility, local rankings, and SEO-focused structure.",
  },
];

const locationLinks = [
  {
    label: "All Arkansas Service Areas",
    href: "/locations",
  },
  {
    label: "Hot Springs Web Design",
    href: "/locations/hot-springs-ar",
  },
  {
    label: "Arkadelphia Web Design",
    href: "/locations/arkadelphia-ar",
  },
  {
    label: "Glenwood Web Design",
    href: "/locations/glenwood-ar",
  },
  {
    label: "Malvern Web Design",
    href: "/locations/malvern-ar",
  },
  {
    label: "Central Arkansas",
    href: "/locations#central-arkansas",
  },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[var(--bg-main)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Hometown Web Services homepage"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Hometown Web Services logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
            priority
          />

          <div className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-[var(--text-main)]">
              Hometown Web Services
            </span>
            <span className="hidden text-xs text-[var(--text-soft)] sm:block">
              Arkansas web design & local SEO
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-sm text-[var(--text-soft)] md:flex"
          >
            <Link
              href="/portfolio"
              className="transition hover:text-[var(--text-main)]"
            >
              Website Portfolio
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-label="Open services menu"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center gap-1 transition hover:text-[var(--text-main)]"
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
                <div className="absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-4">
                  <div className="card overflow-hidden p-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-2xl px-4 py-3 transition hover:bg-[var(--bg-alt)]"
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

            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                type="button"
                aria-expanded={locationsOpen}
                aria-label="Open locations menu"
                onClick={() => setLocationsOpen((prev) => !prev)}
                className="flex items-center gap-1 transition hover:text-[var(--text-main)]"
              >
                Locations
                <span
                  className={`text-xs transition ${
                    locationsOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {locationsOpen && (
                <div className="absolute left-1/2 top-full w-[270px] -translate-x-1/2 pt-4">
                  <div className="card overflow-hidden p-2">
                    {locationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-2xl px-4 py-3 text-sm font-medium text-[var(--text-main)] transition hover:bg-[var(--bg-alt)]"
                        onClick={() => setLocationsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="transition hover:text-[var(--text-main)]"
            >
              About
            </Link>
          </nav>

          <a
            href={PHONE_CALL_URL}
            className="hidden text-sm font-medium text-[var(--text-soft)] transition hover:text-[var(--text-main)] lg:inline-flex"
            aria-label={`Call Hometown Web Services at ${PHONE_DISPLAY}`}
          >
            Call {PHONE_DISPLAY}
          </a>

          <Link href="/free-preview" className="btn btn-primary text-sm">
            Get a free preview
          </Link>
        </div>
      </div>
    </header>
  );
}
