import type { LocationFAQ as LocationFAQType } from "@/data/locations/types";

type LocationFAQProps = {
  faqs: LocationFAQType[];
};

export default function LocationFAQ({ faqs }: LocationFAQProps) {
  return (
    <section className="bg-[var(--bg-alt)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Common questions
            </p>

            <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
              Straight answers before you start.
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-[var(--text-soft)]">
              Most businesses do not need something complicated. They need a
              clean site that explains what they do, builds trust, and makes it
              easy for customers to take the next step.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[var(--border-soft)] pb-6"
              >
                <h3 className="text-xl leading-tight">
                  {faq.question}
                </h3>

                <p className="mt-3 leading-relaxed text-[var(--text-soft)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}