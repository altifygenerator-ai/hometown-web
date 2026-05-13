import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const northLittleRockLocation: LocationData = {
  city: "North Little Rock",
  state: "AR",
  slug: "north-little-rock-ar",
  url: `${siteUrl}/locations/north-little-rock-ar`,

  metadata: {
    title: "Web Design in North Little Rock, AR | Hometown Web Services",
    description:
      "Web design and local SEO for North Little Rock, Arkansas contractors, restaurants, professional services, local shops, service businesses, and small companies.",
    alternates: {
      canonical: `${siteUrl}/locations/north-little-rock-ar`,
    },
  },

  hero: {
    eyebrow: "North Little Rock Web Design",
    title:
      "Web design in North Little Rock for businesses that need stronger trust and visibility.",
    description:
      "I build clean, mobile-friendly websites for North Little Rock contractors, restaurants, shops, service businesses, professional services, and local companies that need to stand out in a competitive metro market.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Built for metro competition",
    "Google-ready structure",
    "Clear calls and quote paths",
  ],

  intro: {
    eyebrow: "Built for North Little Rock businesses",
    title:
      "A stronger website for businesses competing across the Little Rock metro.",
    paragraphs: [
      "North Little Rock businesses often compete with both local companies and larger Little Rock metro brands. That makes your website more important because customers compare options quickly before deciding who to call.",
      "A clean, modern site helps your business look more trustworthy, explain services clearly, show local relevance, and make it easy for customers to call, text, book, or request a quote.",
    ],
  },

  services: [
    {
      title: "Small business website design",
      text: "Professional websites for North Little Rock businesses that need a cleaner, more credible online presence.",
    },
    {
      title: "Service business websites",
      text: "Websites for contractors, cleaners, repair companies, home services, restaurants, shops, and local service providers.",
    },
    {
      title: "Local SEO structure",
      text: "Search-focused structure for North Little Rock, nearby metro areas, service pages, headings, and metadata.",
    },
    {
      title: "Website redesigns",
      text: "Redesigns for outdated sites that need better mobile layout, clearer services, stronger trust, and easier contact options.",
    },
  ],

  seoBlock: {
    eyebrow: "Metro search visibility",
    title: "North Little Rock businesses need more than a basic online presence.",
    text:
      "In a busier metro market, a thin or outdated website can get buried fast. A stronger website gives Google and customers better information about your services, location, proof, and contact options.",
    nearbyAreas: [
      "Little Rock",
      "Sherwood",
      "Maumelle",
      "Jacksonville",
      "Pulaski County",
      "Argenta",
    ],
  },

  industries: [
    "Contractors and remodelers",
    "Restaurants and local shops",
    "Professional services",
    "Cleaning companies",
    "Home service companies",
    "Health and wellness businesses",
    "Local brands",
    "Hospitality and event businesses",
  ],

  faqs: [
    {
      question: "Do you build websites for North Little Rock businesses?",
      answer:
        "Yes. I build websites for North Little Rock contractors, restaurants, shops, cleaning companies, professional services, home service businesses, and local brands.",
    },
    {
      question: "Is North Little Rock more competitive for local SEO?",
      answer:
        "It can be. Metro areas usually have more businesses competing for the same searches, so your website needs stronger structure, better service content, clearer trust signals, and local SEO basics.",
    },
    {
      question: "Can you redesign an older North Little Rock business website?",
      answer:
        "Yes. I can rebuild an outdated site with a cleaner design, better mobile experience, stronger service sections, clearer contact options, and local SEO structure.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/north-little-rock-ar#service`,
      name: "Web Design in North Little Rock, Arkansas",
      url: `${siteUrl}/locations/north-little-rock-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "North Little Rock",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for North Little Rock, Arkansas contractors, restaurants, professional services, local shops, service businesses, and small companies.",
    },
  ],
};