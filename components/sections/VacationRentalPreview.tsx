import Link from "next/link";

const rentalFeatures = [
  "Airbnb / Vrbo friendly",
  "Direct booking links",
  "Photo-first layout",
  "Local area guide content",
  "Cabin brand page",
  "Google-ready structure",
];

export default function VacationRentalPreview() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-24 md:py-28">
      <div className="pointer-events-none absolute right-[-180px] top-20 h-[360px] w-[360px] rounded-full bg-[var(--accent)] opacity-[0.045] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker mb-4">Cabins & rentals</p>

            <h2 className="text-balance max-w-2xl text-4xl leading-tight md:text-6xl">
              Airbnb is where people book. Your website is where they remember
              you.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-soft)]">
              I also build websites for cabins, Airbnbs, vacation rentals, and
              local stays that need a cleaner home online. Booking platforms are
              useful, but your own site can show the property better, support
              Google searches, and make the rental feel more official.
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

          <div className="premium-shell rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {rentalFeatures.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border-soft)] bg-white px-5 py-4 text-sm text-[var(--text-soft)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-[var(--text-main)] p-6 text-white">
              <p className="text-sm font-medium text-white/70">
                Good fit for
              </p>

              <p className="mt-3 text-2xl leading-tight">
                Cabins, lake rentals, short-term rentals, tiny homes, lodges,
                vacation homes, and boutique stays.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Especially when the photos are strong and the property has a
                story, local area, or experience worth showing beyond a booking
                platform listing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}