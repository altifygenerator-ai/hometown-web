import type { LocationService } from "@/data/locations/types";

type LocationServicesProps = {
  variant?: "cards" | "list";
  city: string;
  services: LocationService[];
};

export default function LocationServices({
  variant = "cards",
  city,
  services,
}: LocationServicesProps) {
  if (variant === "list") {
    return (
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 text-sm text-[var(--text-soft)]">
                Website services
              </p>

              <h2 className="max-w-md text-3xl leading-tight md:text-5xl">
                Web design and local SEO services for {city} businesses.
              </h2>

              <p className="mt-6 max-w-md leading-relaxed text-[var(--text-soft)]">
                Every business is different, but the goal stays the same:
                build a clearer online presence that helps people understand
                what you do and reach out faster.
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="grid gap-4 border-b border-[var(--border-soft)] pb-8 sm:grid-cols-[auto_1fr]"
                >
                  <div className="text-sm text-[var(--text-soft)]">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl leading-tight">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-relaxed text-[var(--text-soft)]">
                      {service.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm text-[var(--text-soft)]">
              Website services
            </p>

            <h2 className="max-w-xl text-3xl leading-tight md:text-5xl">
              Web design and local SEO for {city} businesses.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
            I build sites around the pieces that actually help a local business:
            clear services, trust, mobile layout, Google-ready structure, and
            easy ways for customers to contact you.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--bg-card)] p-6 transition duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl leading-tight">{service.title}</h3>

              <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}