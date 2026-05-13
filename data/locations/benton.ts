import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const bentonLocation: LocationData = {
  city: "Benton",
  state: "AR",
  slug: "benton-ar",
  url: `${siteUrl}/locations/benton-ar`,

  metadata: {
    title: "Web Design in Benton, AR | Hometown Web Services",
    description:
      "Web design and local SEO for Benton, Arkansas contractors, service businesses, restaurants, shops, cleaning companies, and small businesses in Saline County.",
    alternates: {
      canonical: `${siteUrl}/locations/benton-ar`,
    },
  },

  hero: {
    eyebrow: "Benton Web Design",
    title:
      "Web design in Benton, Arkansas for businesses that need to stand out locally.",
    description:
      "I build clean, mobile-friendly websites for Benton contractors, service companies, restaurants, shops, cleaning businesses, and local brands that need stronger trust, clearer information, and better Google visibility.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Built for local leads",
    "Mobile-first website design",
    "Local SEO structure included",
  ],

  intro: {
    eyebrow: "Built for Benton businesses",
    title:
      "A stronger website for businesses competing in a growing local market.",
    paragraphs: [
      "Benton has a lot of local competition, especially for contractors, home services, restaurants, shops, and professional services. When customers compare businesses online, your website needs to quickly show that you are active, trustworthy, and easy to contact.",
      "I build websites that give Benton businesses a cleaner online presence with organized services, calls-to-action, photos, reviews, service areas, and local search structure that supports Google visibility.",
    ],
  },

  services: [
    {
      title: "Small business website design",
      text: "Clean, professional websites for Benton businesses that need a stronger online presence and easier contact options.",
    },
    {
      title: "Contractor website design",
      text: "Websites for roofers, remodelers, plumbers, electricians, landscapers, painters, cleaners, and home service companies.",
    },
    {
      title: "Local SEO structure",
      text: "Website structure, metadata, headings, and local wording built around Benton and Saline County searches.",
    },
    {
      title: "Google Business Profile support",
      text: "Help connecting your website and Google listing so your business looks more complete in local search and maps.",
    },
  ],

  seoBlock: {
    eyebrow: "Search visibility",
    title: "Benton customers compare businesses online before they reach out.",
    text:
      "A strong website helps your business look more trustworthy, makes your services easier to understand, and supports the local SEO signals Google uses to connect you with nearby customers.",
    nearbyAreas: [
      "Bryant",
      "Bauxite",
      "Haskell",
      "Alexander",
      "Saline County",
      "Little Rock metro",
    ],
  },

  industries: [
    "Contractors and trades",
    "Cleaning companies",
    "Restaurants and local shops",
    "Lawn care and landscaping",
    "Home repair businesses",
    "Professional services",
    "Health and wellness businesses",
    "Local service companies",
  ],

  faqs: [
    {
      question: "Do you build websites for Benton contractors?",
      answer:
        "Yes. I build websites for Benton contractors, remodelers, roofers, plumbers, electricians, landscapers, painters, and other local service businesses.",
    },
    {
      question: "Can local SEO help my Benton business get more calls?",
      answer:
        "Local SEO can help by giving Google clearer information about your services, location, service areas, and business details. It works best with a strong website and optimized Google Business Profile.",
    },
    {
      question: "Do you work with businesses around Saline County?",
      answer:
        "Yes. I can build websites for businesses in Benton, Bryant, Bauxite, Haskell, Alexander, and nearby Saline County areas.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/benton-ar#service`,
      name: "Web Design in Benton, Arkansas",
      url: `${siteUrl}/locations/benton-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "Benton",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for Benton, Arkansas contractors, service businesses, restaurants, shops, cleaning companies, and small businesses in Saline County.",
    },
  ],
};