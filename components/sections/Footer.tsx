import Link from "next/link";

const serviceLinks = [
  { label: "Services", href: "/services" },
  { label: "Contractor Websites", href: "/contractor-websites" },
  { label: "Portfolio", href: "/portfolio" },
];

const southwestArkansas = [
  { label: "Hot Springs, AR", href: "/locations/hot-springs-ar" },
  { label: "Arkadelphia, AR", href: "/locations/arkadelphia-ar" },
  { label: "Glenwood, AR", href: "/locations/glenwood-ar" },
  { label: "Malvern, AR", href: "/locations/malvern-ar" },
];

const centralArkansas = [
  { label: "Benton, AR", href: "/locations/benton-ar" },
  { label: "Bryant, AR", href: "/locations/bryant-ar" },
  { label: "Little Rock, AR", href: "/locations/little-rock-ar" },
  { label: "North Little Rock, AR", href: "/locations/north-little-rock-ar" },
  { label: "Maumelle, AR", href: "/locations/maumelle-ar" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <Link href="/" className="text-base font-medium text-[var(--text-main)]">
              Hometown Web Services
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--text-soft)]">
              Arkansas web design, local SEO, and Google-ready websites for
              contractors, service businesses, restaurants, and small local
              companies.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-sm text-[var(--text-soft)]">
              <a
                href="sms:8702604880"
                className="hover:text-[var(--text-main)]"
              >
                Text: (870) 260-4880
              </a>

              <a
                href="mailto:altifygenerator@gmail.com"
                className="hover:text-[var(--text-main)]"
              >
                altifygenerator@gmail.com
              </a>
            </div>
          </div>

          {/* MAIN LINKS */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-[var(--text-main)]">
              Pages
            </h4>

            <nav className="flex flex-col gap-3 text-sm text-[var(--text-soft)]">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[var(--text-main)]"
                >
                  {link.label}
                </Link>
              ))}

              <a href="sms:8702604880" className="hover:text-[var(--text-main)]">
                Contact
              </a>
            </nav>
          </div>

          {/* SOUTHWEST AR */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-[var(--text-main)]">
              Southwest Arkansas
            </h4>

            <nav className="flex flex-col gap-3 text-sm text-[var(--text-soft)]">
              {southwestArkansas.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[var(--text-main)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CENTRAL AR */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-[var(--text-main)]">
              Central Arkansas
            </h4>

            <nav className="flex flex-col gap-3 text-sm text-[var(--text-soft)]">
              {centralArkansas.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[var(--text-main)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border-soft)] pt-6 text-xs text-[var(--text-soft)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Hometown Web Services. All rights
            reserved.
          </p>

          <p>Built in Arkansas for small businesses that need better websites.</p>
        </div>
      </div>
    </footer>
  );
}