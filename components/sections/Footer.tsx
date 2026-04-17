import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-[var(--border-soft)]">

      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT */}
          <div>
            <p className="text-sm text-[var(--text-main)]">
              Hometown Web Services
            </p>

            <p className="text-sm text-[var(--text-soft)] mt-1">
              Arkansas Web Design
            </p>
          </div>
  

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-sm text-[var(--text-soft)]">

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

            <a
              href="sms:8702604880"
              className="hover:text-[var(--text-main)] transition"
            >
              Contact
            </a>
            <a href="mailto:youremail@gmail.com">
  altifygenerator@gmail.com
</a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 text-xs text-[var(--text-soft)]">
          © {new Date().getFullYear()} Hometown Web Services. All rights reserved.
        </div>

      </div>
    </footer>
  );
}