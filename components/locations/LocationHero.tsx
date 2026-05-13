import Image from "next/image";
import Link from "next/link";

type LocationHeroProps = {
  variant?: "simple" | "split" | "visual";
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image?: string;
  video?: string;
};

export default function LocationHero({
  variant = "simple",
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  video,
}: LocationHeroProps) {
  const showVisual = variant === "visual" || variant === "split";

  return (
    <section className="relative overflow-hidden bg-depth px-6 pb-20 pt-20 md:pb-24 md:pt-24">
      <div className="pointer-events-none absolute right-[-160px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          className={
            showVisual
              ? "grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]"
              : "max-w-4xl"
          }
        >
          {/* LEFT CONTENT */}
          <div>
            <span className="badge">{eyebrow}</span>

            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.02] tracking-tight text-[var(--text-main)] md:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-soft)] md:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                {primaryCta}
              </Link>

              <Link href="/services" className="btn btn-secondary">
                {secondaryCta}
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          {showVisual && (
            <div className="card-strong overflow-hidden p-3">
              <div className="overflow-hidden rounded-[1.5rem] bg-black">
                {video ? (
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-[320px] w-full object-cover md:h-[400px]"
                  />
                ) : image ? (
                  <Image
                    src={image}
                    alt={eyebrow}
                    width={1200}
                    height={900}
                    priority
                    className="h-[320px] w-full object-cover md:h-[400px]"
                  />
                ) : (
                  <div className="flex h-[320px] items-center justify-center bg-[var(--bg-alt)] px-8 text-center md:h-[400px]">
                    <p className="max-w-sm text-sm leading-6 text-[var(--text-soft)]">
                      Websites built for local businesses that need to look more
                      trustworthy and be easier to contact.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}