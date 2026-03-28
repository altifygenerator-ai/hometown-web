"use client";

export default function PricingSection() {
  const tiers = [
    {
      name: "Starter",
      price: "$200–$300",
      desc: "Perfect for small businesses needing a simple online presence.",
      features: [
        "1-page scroll website",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form",
        "Fast 1–2 day delivery",
      ],
      highlight: false,
    },
    {
      name: "Core",
      price: "$400–$600",
      desc: "Best for growing businesses that want more leads.",
      features: [
        "3–5 custom pages",
        "Conversion-focused layout",
        "Testimonials section",
        "Lead capture forms",
        "Clean modern design",
      ],
      highlight: true,
    },
    {
      name: "Authority",
      price: "$700–$900",
      desc: "High-end build for serious businesses.",
      features: [
        "Everything in Core",
        "Advanced sections (FAQ, trust blocks)",
        "Light animations",
        "Strategic layout design",
        "Premium visual polish",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-4 text-[#7a4e2d]">
          Website Packages
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Simple pricing designed for small businesses. Clean, modern websites
          built to bring in customers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 shadow-lg border transition hover:scale-[1.02]
              ${tier.highlight
                ? "border-black bg-black text-white"
                : "border-gray-200 bg-white"}`}
            >
              <h3 className="text-xl font-semibold mb-2">
                {tier.name}
              </h3>

              <p className="text-3xl font-bold mb-4">
                {tier.price}
              </p>

              <p className={`text-sm mb-6 ${
                tier.highlight ? "text-gray-300" : "text-gray-600"
              }`}>
                {tier.desc}
              </p>

              <ul className="space-y-2 mb-8 text-sm">
                {tier.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition
                ${tier.highlight
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-gray-200 bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">
            Ongoing Support
          </h3>
          <p className="text-gray-600 mb-4">
            Hosting, updates, and ongoing improvements.
          </p>
          <p className="text-2xl font-bold">
            $25–$75/month
          </p>
        </div>

      </div>
    </section>
  );
}