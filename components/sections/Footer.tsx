import Link from "next/link";
import {
  CONTACT_EMAIL,
  GOOGLE_PROFILE_URL,
  PHONE_CALL_URL,
  PHONE_DISPLAY,
  PHONE_TEXT_URL,
} from "@/lib/site";

const serviceLinks = [
  { label: "Website Services", href: "/services" },
  { label: "Free Website Preview", href: "/free-preview" },
  { label: "Contractor Websites", href: "/contractor-websites" },
  { label: "Vacation Rental Websites", href: "/vacation-rental-websites" },
  { label: "Custom Systems & Web Apps", href: "/custom-business-systems" },
  { label: "Website Redesigns", href: "/website-redesigns" },
  { label: "Website Maintenance", href: "/website-maintenance" },
  { label: "Local SEO Arkansas", href: "/local-seo-arkansas" },
];

const hotSpringsLinks = [
  { label: "Hot Springs Web Design", href: "/locations/hot-springs-ar" },
  {
    label: "Hot Springs Contractor Websites",
    href: "/hot-springs-contractor-websites",
  },
  {
    label: "Hot Springs Vacation Rental Websites",
    href: "/hot-springs-vacation-rental-websites",
  },
];

const southwestArkansas = [
  { label: "All Service Areas", href: "/locations" },
  { label: "Arkadelphia, AR", href: "/locations/arkadelphia-ar" },
  { label: "Glenwood, AR", href: "/locations/glenwood-ar" },
  { label: "Malvern, AR", href: "/locations/malvern-ar" },
  { label: "Caddo Valley, AR", href: "/locations/caddo-valley-ar" },
];

const centralArkansas = [
  { label: "Benton, AR", href: "/locations/benton-ar" },
  { label: "Bryant, AR", href: "/locations/bryant-ar" },
  { label: "Little Rock, AR", href: "/locations/little-rock-ar" },
  { label: "North Little Rock, AR", href: "/locations/north-little-rock-ar" },
  { label: "Maumelle, AR", href: "/locations/maumelle-ar" },
];

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-medium text-[var(--text-main)]">{title}</p>
      <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--text-soft)]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-[var(--text-main)]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-base font-medium text-[var(--text-main)]">
              Hometown Web Services
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--text-soft)]">
              Arkansas web design, local SEO, custom systems, and Google-ready
              websites for contractors, service businesses, vacation rentals,
              and small local companies.
            </p>

            <div className="mt-5 flex flex-col gap-2 text-sm text-[var(--text-soft)]">
              <a href={PHONE_CALL_URL} className="hover:text-[var(--text-main)]">
                Call: {PHONE_DISPLAY}
              </a>

              <a href={PHONE_TEXT_URL} className="hover:text-[var(--text-main)]">
                Text: {PHONE_DISPLAY}
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-[var(--text-main)]"
              >
                {CONTACT_EMAIL}
              </a>

              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--text-main)]"
              >
                Google Business Profile
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--text-soft)]">
              <Link href="/about" className="hover:text-[var(--text-main)]">
                About Hometown
              </Link>
              <Link href="/portfolio" className="hover:text-[var(--text-main)]">
                Portfolio
              </Link>
            </div>
          </div>

          <FooterLinks title="Services" links={serviceLinks} />
          <FooterLinks title="Hot Springs" links={hotSpringsLinks} />
          <FooterLinks title="Southwest AR" links={southwestArkansas} />
          <FooterLinks title="Central AR" links={centralArkansas} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border-soft)] pt-6 text-xs text-[var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hometown Web Services.</p>
          <p>Based in Amity, Arkansas and serving small businesses across Arkansas.</p>
        </div>
      </div>
    </footer>
  );
}
