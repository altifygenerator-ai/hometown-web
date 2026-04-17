import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PricingSection from "@/components/sections/PricingSection";
export const metadata = {
  title: "Web Design & SEO Services in Arkansas",
  description:
    "Professional websites and SEO for Arkansas small businesses. Built to help you show up on Google and get more leads.",
};
export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>

        {/* HERO */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl">
                Simple websites that actually bring in customers
              </h1>

              <p className="mt-6 text-lg text-[var(--text-soft)]">
                Most small businesses rely on Facebook, but there’s no clear place
                for customers to see what you offer or reach out quickly. I build
                clean, simple websites that show up on Google and make it easy for
                people to call, text, or request a quote.
              </p>
            </div>

          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-32 bg-[var(--bg-alt)]">
          <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-md">
              <p className="text-sm text-[var(--text-soft)] mb-4">
                What you get
              </p>

              <h2 className="text-3xl md:text-5xl">
                Everything you need, nothing you don’t
              </h2>
            </div>

            <div className="mt-16 max-w-2xl space-y-6">

              <p className="text-lg">
                A clean, modern website built around your business that helps
                customers understand what you do and reach out without confusion.
              </p>

              <p className="text-[var(--text-soft)]">
                Your services, pricing, and contact options are all in one place,
                so people don’t have to dig through posts or send messages just to
                figure things out.
              </p>

              <p className="text-[var(--text-soft)]">
                The goal is simple — when someone finds you, they take action.
              </p>

            </div>

          </div>
        </section>

        {/* FEATURES (NOT A GRID LIST) */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-md">
              <h2 className="text-3xl md:text-5xl">
                Built for real results
              </h2>
            </div>

            <div className="mt-16 max-w-2xl space-y-8">

              <div>
                <h3 className="text-xl">Shows up on Google</h3>
                <p className="text-[var(--text-soft)] mt-2">
                  Structured properly so people can actually find your business
                  when they search.
                </p>
              </div>

              <div>
                <h3 className="text-xl">Clear services and info</h3>
                <p className="text-[var(--text-soft)] mt-2">
                  No confusion — customers immediately understand what you offer.
                </p>
              </div>

              <div>
                <h3 className="text-xl">Built for calls and leads</h3>
                <p className="text-[var(--text-soft)] mt-2">
                  Designed to get people to call, text, or request a quote.
                </p>
              </div>

            </div>

          </div>
        </section>
        <section className="py-32 bg-[var(--bg-alt)] relative overflow-hidden">

  {/* subtle depth */}
  <div className="absolute left-[-120px] top-[120px] w-[360px] h-[360px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    {/* INTRO */}
    <div className="max-w-md">
      <p className="text-sm text-[var(--text-soft)] mb-4">
        Visibility
      </p>

      <h2 className="text-3xl md:text-5xl">
        It’s not just about having a site — people need to find you
      </h2>
    </div>

    {/* MAIN TEXT */}
    <div className="mt-16 max-w-2xl space-y-6">

      <p className="text-lg">
        A lot of businesses already do good work, but they’re hard to find online.
        Between Facebook, scattered info, and no real presence on Google, people
        just move on to someone easier to reach.
      </p>

      <p className="text-[var(--text-soft)]">
        I help clean that up by making sure your site is structured properly and
        your business shows up where people are actually searching.
      </p>

    </div>

    {/* OFFSET BLOCK */}
    <div className="mt-20 ml-auto max-w-md space-y-4">

      <div>
        <h3 className="text-lg">Basic SEO setup</h3>
        <p className="text-[var(--text-soft)] mt-2">
          Your site is built so Google can understand it — pages, structure,
          keywords, and performance all handled the right way.
        </p>
      </div>

      <div>
        <h3 className="text-lg">Google Business Profile optimization</h3>
        <p className="text-[var(--text-soft)] mt-2">
          I help set up or improve your Google listing so you show up in local
          searches, maps, and when people are looking for services near them.
        </p>
      </div>

      <div>
        <h3 className="text-lg">Clear local presence</h3>
        <p className="text-[var(--text-soft)] mt-2">
          Everything works together — your site, your Google profile, and your
          info — so customers don’t have to guess or dig.
        </p>
      </div>

    </div>

  </div>
</section>
        {/* PRICING */}
        <PricingSection />
{/* AUDIT OFFER */}
<section className="py-32 relative overflow-hidden">

  {/* subtle depth */}
  <div className="absolute right-[-120px] top-[-120px] w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    {/* LEFT SIDE */}
    <div className="max-w-2xl">
      <p className="text-sm text-[var(--text-soft)] mb-4">
        Free audit
      </p>

      <h2 className="text-3xl md:text-5xl">
        I’ll show you what’s holding your business back online
      </h2>

      <p className="mt-6 text-lg text-[var(--text-soft)]">
        If you’re not sure what you need, I can take a look at your current setup
        and point out what’s missing — your website, Google listing, or anything
        that might be costing you calls or leads.
      </p>
    </div>

    {/* OFFSET DETAILS */}
    <div className="mt-20 ml-auto max-w-md space-y-4">

      <p className="text-[var(--text-soft)]">
        I’ll break it down in simple terms — what’s working, what’s not, and what
        would actually make a difference.
      </p>

      <p className="text-[var(--text-soft)]">
        No pressure, no obligation. Just a clear look at how your online presence
        could be improved.
      </p>

      <a
        href="sms:8702604880"
        className="inline-block pt-2 text-sm text-[var(--text-soft)] hover:text-[var(--text-main)] transition"
      >
        Request a free audit →
      </a>

    </div>

  </div>
</section>
<section className="py-32">
  <div className="max-w-6xl mx-auto px-6">

    <div className="max-w-md">
      <h2 className="text-3xl md:text-5xl">
        Common questions
      </h2>
    </div>

    <div className="mt-16 max-w-2xl space-y-8">

      <div>
        <h3 className="text-lg">How long does a website take?</h3>
        <p className="text-[var(--text-soft)] mt-2">
          Most sites are done in a few days depending on size and content.
        </p>
      </div>

      <div>
        <h3 className="text-lg">Will my business show up on Google?</h3>
        <p className="text-[var(--text-soft)] mt-2">
          Yes — your site is built with proper structure and SEO so it can be found in search results.
        </p>
      </div>

      <div>
        <h3 className="text-lg">Do I need a Google Business Profile?</h3>
        <p className="text-[var(--text-soft)] mt-2">
          It helps a lot. I can help set it up or optimize it so you show up in local searches and maps.
        </p>
      </div>

    </div>

  </div>
</section>
        {/* CTA */}
        <section className="py-32 relative overflow-hidden">

          <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">

            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl">
                Want to see what your site could look like?
              </h2>

              <p className="mt-6 text-lg text-[var(--text-soft)]">
                I’ll put together a full preview based on your business so you can
                see exactly how it would look and work before committing.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a href="sms:8702604880" className="btn btn-primary">
                  Get a free preview
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}