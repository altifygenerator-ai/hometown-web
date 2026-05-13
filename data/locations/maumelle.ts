import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const maumelleLocation: LocationData = {
  city: "Maumelle",
  state: "AR",
  slug: "maumelle-ar",
  url: `${siteUrl}/locations/maumelle-ar`,

  metadata: {
    title: "Web Design in Maumelle, AR | Hometown Web Services",
    description:
      "Web design and local SEO for Maumelle, Arkansas contractors, professional services, home service businesses, restaurants, shops, and small businesses.",
    alternates: {
      canonical: `${siteUrl}/locations/maumelle-ar`,
    },
  },

  hero: {
    eyebrow: "Maumelle Web Design",
    title:
      "Web design in Maumelle, Arkansas for businesses that need a polished local presence.",
    description:
      "I build clean, mobile-friendly websites for Maumelle contractors, home service businesses, professional services, restaurants, shops, and local companies that need to look credible and be easier to contact.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Clean professional design",
    "Built for mobile visitors",
    "Local SEO structure included",
  ],

  intro: {
    eyebrow: "Built for Maumelle businesses",
    title:
      "A cleaner website for businesses serving homeowners, families, and local customers.",
    paragraphs: [
      "Maumelle businesses often serve customers who are comparing options before they ever call. Whether it is a contractor, home service company, restaurant, professional service, or local shop, your website needs to look polished and make information easy to find.",
      "I build websites that help Maumelle businesses present services clearly, show trust, support local search, and give people a simple way to reach out from their phone.",
    ],
  },

  services: [
    {
      title: "Professional website design",
      text: "Clean websites for Maumelle businesses that need a polished, trustworthy online presence.",
    },
    {
      title: "Home service websites",
      text: "Websites for contractors, landscapers, cleaners, repair companies, remodelers, painters, and local service providers.",
    },
    {
      title: "Local SEO structure",
      text: "Website structure, metadata, headings, and local content built around Maumelle and nearby search visibility.",
    },
    {
      title: "Google Business Profile support",
      text: "Support for your Google listing so customers can find accurate information and connect from search or maps.",
    },
  ],

  seoBlock: {
    eyebrow: "Local trust",
    title: "Maumelle customers want to trust you before they call.",
    text:
      "A better website helps customers quickly understand your services, see that your business is active, and contact you easily. It also gives Google stronger information about your location, services, and nearby areas.",
    nearbyAreas: [
      "Little Rock",
      "North Little Rock",
      "Morgan",
      "Mayflower",
      "Pulaski County",
      "Central Arkansas",
    ],
  },

  industries: [
    "Home service companies",
    "Contractors and remodelers",
    "Professional services",
    "Cleaning companies",
    "Restaurants and cafes",
    "Lawn care and landscaping",
    "Local shops",
    "Health and wellness businesses",
  ],

  faqs: [
    {
      question: "Do you build websites for Maumelle home service businesses?",
      answer:
        "Yes. I build websites for Maumelle contractors, remodelers, landscapers, cleaners, painters, repair companies, and other home service businesses.",
    },
    {
      question: "Can you help my Maumelle business look more professional online?",
      answer:
        "Yes. I can build a cleaner website with better service sections, stronger trust signals, mobile-friendly layout, photos, reviews, and clear contact options.",
    },
    {
      question: "Can local SEO help businesses in Maumelle?",
      answer:
        "Yes. Local SEO structure can help Google better understand your business, services, location, and nearby areas, especially when paired with an optimized Google Business Profile.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/maumelle-ar#service`,
      name: "Web Design in Maumelle, Arkansas",
      url: `${siteUrl}/locations/maumelle-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "Maumelle",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for Maumelle, Arkansas contractors, professional services, home service businesses, restaurants, shops, and small businesses.",
    },
  ],
};