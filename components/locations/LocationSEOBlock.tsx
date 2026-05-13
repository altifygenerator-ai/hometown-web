type LocationSEOBlockProps = {
  variant?: "panel" | "split";
  eyebrow: string;
  title: string;
  text: string;
  nearbyAreas: string[];
};

export default function LocationSEOBlock({
  variant = "panel",
  eyebrow,
  title,
  text,
  nearbyAreas,
}: LocationSEOBlockProps) {
  if (variant === "split") {
    return (
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm text-[var(--text-soft)]">
                {eyebrow}
              </p>

              <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
                {title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-soft)]">
                {text}
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-sm text-[var(--text-soft)]">
                Nearby areas and search context
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {nearbyAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-card)] px-5 py-4 text-sm text-[var(--text-main)]"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <p className="border-l border-[var(--border-soft)] pl-5 text-sm leading-7 text-[var(--text-soft)]">
                Local SEO works best when your website, service pages, Google
                Business Profile, reviews, and contact information all support
                the same locations and services.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-6 md:p-10 lg:p-12">
          <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[100px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm text-[var(--text-soft)]">
                {eyebrow}
              </p>

              <h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">
                {title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                {text}
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm text-[var(--text-soft)]">
                Nearby areas this can support
              </p>

              <div className="flex flex-wrap gap-3">
                {nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[var(--border-soft)] bg-[var(--bg-main)] px-4 py-2 text-sm text-[var(--text-soft)]"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <p className="mt-8 border-t border-[var(--border-soft)] pt-5 text-sm leading-7 text-[var(--text-soft)]">
                The goal is to make your business easier for both Google and
                real customers to understand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}