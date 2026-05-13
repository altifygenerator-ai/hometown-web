type LocationIntroProps = {
  variant?: "split" | "editorial";
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export default function LocationIntro({
  variant = "split",
  eyebrow,
  title,
  paragraphs,
}: LocationIntroProps) {
  if (variant === "editorial") {
    return (
      <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-4 text-sm text-[var(--text-soft)]">
                {eyebrow}
              </p>

              <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
                {title}
              </h2>
            </div>

            <div className="space-y-6 border-l border-[var(--border-soft)] pl-6 text-lg leading-8 text-[var(--text-soft)]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              {eyebrow}
            </p>

            <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
              {title}
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[var(--text-soft)]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}