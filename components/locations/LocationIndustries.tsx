type LocationIndustriesProps = {
  city: string;
  industries: string[];
};

export default function LocationIndustries({
  city,
  industries,
}: LocationIndustriesProps) {
  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Good fit for
            </p>

            <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
              Websites for {city} businesses that need to look easier to trust.
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-[var(--text-soft)]">
              A good website should make your business feel active, clear, and
              easy to contact whether someone finds you through Google,
              Facebook, word of mouth, or a local search.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] px-5 py-4 text-sm text-[var(--text-main)] transition duration-300 hover:-translate-y-1"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}