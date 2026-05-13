import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const littleRockLocation: LocationData = {
  city: "Little Rock",
  state: "AR",
  slug: "little-rock-ar",
  url: `${siteUrl}/locations/little-rock-ar`,

  metadata: {
    title: "Web Design in Little Rock, AR | Hometown Web Services",
    description:
      "Web design and local SEO for Little Rock, Arkansas contractors, service businesses, restaurants, professional services, shops, and local companies.",
    alternates: {
      canonical: `${siteUrl}/locations/little-rock-ar`,
    },
  },

  hero: {
    eyebrow: "Little Rock Web Design",
    title:
      "Web design in Little Rock, Arkansas for businesses competing in a bigger market.",
    description:
      "I build clean, mobile-friendly websites for Little Rock contractors, service businesses, restaurants, shops, professional services, and local companies that need stronger trust, better structure, and clearer calls to action.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Built for competitive local markets",
    "Mobile-first and Google-ready",
    "Clear calls, quotes, and contact paths",
  ],

  intro: {
    eyebrow: "Built for Little Rock businesses",
    title:
      "A stronger website for businesses that need to stand out in a crowded local search market.",
    paragraphs: [
      "Little Rock businesses are not just competing with the shop down the street. They are competing with agencies, franchises, older established brands, map listings, directories, and dozens of local service providers showing up in the same search results.",
      "A stronger website helps your business look more credible, explain services clearly, support local SEO, and give customers a simple path to call, text, book, or request a quote.",
    ],
  },

  services: [
    {
      title: "Small business website design",
      text: "Professional websites for Little Rock businesses that need to look trustworthy and make a strong first impression.",
    },
    {
      title: "Service business websites",
      text: "Websites for contractors, cleaners, repair businesses, consultants, home services, and local companies that rely on calls and leads.",
    },
    {
      title: "Local SEO structure",
      text: "Search-focused structure for Little Rock service searches, nearby areas, metadata, headings, and local content depth.",
    },
    {
      title: "Website redesigns",
      text: "Redesigns for outdated sites that need a cleaner layout, better mobile experience, stronger trust signals, and clearer messaging.",
    },
  ],

  seoBlock: {
    eyebrow: "Competitive visibility",
    title: "Little Rock search results are crowded. Your site needs stronger signals.",
    text:
      "A good website gives Google and customers clearer information about your services, location, proof, service areas, and contact options. In a larger market, weak or thin pages are easier to get buried.",
    nearbyAreas: [
      "North Little Rock",
      "Maumelle",
      "Bryant",
      "Benton",
      "Sherwood",
      "Pulaski County",
    ],
  },

  industries: [
    "Contractors and remodelers",
    "Professional services",
    "Restaurants and local shops",
    "Cleaning companies",
    "Medical and wellness businesses",
    "Home service companies",
    "Consultants and local brands",
    "Tourism and hospitality businesses",
  ],

  faqs: [
    {
      question: "Do you build websites for Little Rock service businesses?",
      answer:
        "Yes. I build websites for Little Rock contractors, cleaners, restaurants, professional services, home service companies, shops, and other local businesses.",
    },
    {
      question: "Is Little Rock harder to rank in than smaller Arkansas towns?",
      answer:
        "Usually, yes. Bigger markets tend to have more competition, so the site needs stronger service pages, better structure, more trust signals, and a cleaner local SEO foundation.",
    },
    {
      question: "Can you redesign an outdated Little Rock business website?",
      answer:
        "Yes. I can rebuild an outdated website with a cleaner design, better mobile layout, stronger service structure, clearer calls to action, and local SEO basics.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/little-rock-ar#service`,
      name: "Web Design in Little Rock, Arkansas",
      url: `${siteUrl}/locations/little-rock-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "Little Rock",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for Little Rock, Arkansas contractors, service businesses, restaurants, professional services, shops, and local companies.",
    },
  ],
};