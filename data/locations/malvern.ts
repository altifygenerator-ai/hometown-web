import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const malvernLocation: LocationData = {
  city: "Malvern",
  state: "AR",
  slug: "malvern-ar",
  url: `${siteUrl}/locations/malvern-ar`,

  metadata: {
    title: "Web Design in Malvern, AR | Hometown Web Services",
    description:
      "Web design and local SEO for Malvern, Arkansas contractors, service businesses, restaurants, shops, industrial companies, and small businesses in Hot Spring County.",
    alternates: {
      canonical: `${siteUrl}/locations/malvern-ar`,
    },
  },

  hero: {
    eyebrow: "Malvern Web Design",
    title:
      "Web design in Malvern, Arkansas for local businesses that need a clearer online presence.",
    description:
      "I build clean, mobile-friendly websites for Malvern contractors, service companies, shops, restaurants, industrial businesses, and local brands that need to look more professional and be easier to find online.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Built for local businesses",
    "Mobile-friendly and Google-ready",
    "Free preview before you pay",
  ],

  intro: {
    eyebrow: "Built for Malvern businesses",
    title:
      "A better website for businesses serving Malvern, Hot Spring County, and nearby communities.",
    paragraphs: [
      "Malvern businesses often serve a mix of local customers, nearby towns, highway traffic, industrial work, and service-area searches. Your website needs to make it clear what you do, where you work, and why someone should choose you.",
      "Whether you run a contractor business, local shop, restaurant, service company, or industrial-related business, a clean website gives customers one reliable place to see your services, photos, contact info, and business details.",
    ],
  },

  services: [
    {
      title: "Small business website design",
      text: "Clean websites for Malvern businesses that need a professional online presence and easier customer contact options.",
    },
    {
      title: "Contractor and trade websites",
      text: "Websites for roofers, remodelers, plumbers, electricians, repair businesses, painters, landscapers, and other trades.",
    },
    {
      title: "Local SEO structure",
      text: "Website structure, metadata, headings, and local wording built around Malvern, Hot Spring County, and nearby searches.",
    },
    {
      title: "Google Business Profile support",
      text: "Help connecting your website and Google listing so your business looks more complete in search and maps.",
    },
  ],

  seoBlock: {
    eyebrow: "Local visibility",
    title: "Malvern customers need to understand your business before they call.",
    text:
      "A better website helps your business look active, organized, and trustworthy while giving Google clearer information about your services, location, and service areas.",
    nearbyAreas: [
      "Hot Spring County",
      "Rockport",
      "Perla",
      "Donaldson",
      "Magnet Cove",
      "Traskwood",
    ],
  },

  industries: [
    "Contractors and trades",
    "Industrial and local service businesses",
    "Restaurants and local shops",
    "Cleaning companies",
    "Lawn care and landscaping",
    "Home repair businesses",
    "Professional services",
    "Small local companies",
  ],

  faqs: [
    {
      question: "Do you build websites for Malvern contractors and service businesses?",
      answer:
        "Yes. I build websites for Malvern contractors, repair businesses, cleaners, landscapers, local shops, restaurants, and service companies.",
    },
    {
      question: "Can you help my Malvern business show up better on Google?",
      answer:
        "Yes. I can structure your website around local SEO basics, service pages, location wording, metadata, and Google Business Profile support.",
    },
    {
      question: "Do you work with businesses around Hot Spring County?",
      answer:
        "Yes. I can build websites for businesses in Malvern, Rockport, Perla, Donaldson, Magnet Cove, Traskwood, and nearby Hot Spring County areas.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/malvern-ar#service`,
      name: "Web Design in Malvern, Arkansas",
      url: `${siteUrl}/locations/malvern-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "Malvern",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for Malvern, Arkansas contractors, service businesses, restaurants, shops, industrial companies, and small businesses in Hot Spring County.",
    },
  ],
};