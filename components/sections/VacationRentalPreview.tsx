import Link from "next/link";

export default function VacationRentalPreview() {
  return (
    <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Cabin & rental websites
            </p>

            <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
              I also build websites for cabins, Airbnbs, and vacation rentals.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-soft)]">
              Booking sites are useful, but your rental should have its own
              place online too. A clean website helps your cabin or vacation
              rental look more official, show up easier in search, and give
              guests a better experience before they book.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/vacation-rental-websites" className="btn btn-primary">
                Vacation rental websites
              </Link>

              <Link href="/portfolio" className="btn btn-secondary">
                View work
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Airbnb / Vrbo friendly",
                "Direct booking links",
                "Photo-first layouts",
                "Local area content",
                "Cabin brand pages",
                "Google-ready structure",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-main)] px-5 py-4 text-sm text-[var(--text-soft)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-[var(--border-soft)] pt-5 text-sm leading-7 text-[var(--text-soft)]">
              Good fit for cabins, lake rentals, short-term rentals, tiny homes,
              lodges, vacation homes, and property owners who want something
              cleaner than only sending people to a crowded booking platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}