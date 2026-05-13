import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const hotSpringsLocation: LocationData = {
  city: "Hot Springs",
  state: "AR",
  slug: "hot-springs-ar",
  url: `${siteUrl}/locations/hot-springs-ar`,

  metadata: {
    title: "Web Design in Hot Springs, AR | Hometown Web Services",
    description:
      "Web design and local SEO for Hot Springs, Arkansas businesses including cabins, restaurants, contractors, cleaning companies, tourism businesses, and local service providers.",
    alternates: {
      canonical: `${siteUrl}/locations/hot-springs-ar`,
    },
  },

  hero: {
    eyebrow: "Hot Springs Web Design",
    title:
      "Web design in Hot Springs, Arkansas for businesses that need more calls.",
    description:
      "I build clean, mobile-friendly websites for Hot Springs cabins, restaurants, contractors, cleaning companies, tourism businesses, local shops, and service businesses that need to look better online and show up stronger on Google.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Free preview before you pay",
    "Built for Google and mobile",
    "Arkansas-based web design",
  ],

  intro: {
    eyebrow: "Built for Hot Springs businesses",
    title:
      "A better website for a city built around tourism, local search, and trust.",
    paragraphs: [
      "Hot Springs businesses compete for both locals and visitors. Whether someone is searching for a cabin, restaurant, contractor, cleaning company, local shop, or tourism business, your website needs to make the next step obvious.",
      "I build websites that organize your services, photos, reviews, service areas, and contact options in one clear place so people do not have to dig through Facebook or guess how to reach you.",
    ],
  },

  services: [
    {
      title: "Small business website design",
      text: "Clean websites that explain what you do, where you work, and how people can contact you.",
    },
    {
      title: "Local SEO structure",
      text: "Pages, headings, metadata, and local wording built around Hot Springs search visibility.",
    },
    {
      title: "Tourism business websites",
      text: "Websites for cabins, local guides, attractions, restaurants, and businesses serving visitors.",
    },
    {
      title: "Google Business Profile help",
      text: "Support for your Google listing so your website and local presence work together.",
    },
  ],

  seoBlock: {
    eyebrow: "Local visibility",
    title: "Hot Springs customers are searching before they call.",
    text:
      "A good website helps Google understand your services, service areas, and business information while giving customers a clear reason to trust you.",
    nearbyAreas: [
      "Lake Hamilton",
      "Hot Springs Village",
      "Mountain Pine",
      "Royal",
      "Garland County",
    ],
  },

  industries: [
    "Cabins and vacation rentals",
    "Restaurants and coffee shops",
    "Contractors and remodelers",
    "Cleaning companies",
    "Local shops",
    "Tourism businesses",
    "Home service companies",
    "Professional services",
  ],

  faqs: [
    {
      question: "Do you build websites for Hot Springs tourism businesses?",
      answer:
        "Yes. I build websites for cabins, vacation rentals, restaurants, local guides, attractions, and businesses that rely on visitor traffic.",
    },
    {
      question: "Can you help Hot Springs businesses show up better on Google?",
      answer:
        "Yes. I can build the site with local SEO structure, service pages, location wording, metadata, and Google Business Profile support.",
    },
    {
      question:
        "Do you work with contractors and service businesses in Hot Springs?",
      answer:
        "Yes. I build websites for contractors, remodelers, plumbers, cleaners, landscapers, and other local service businesses.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/hot-springs-ar#service`,
      name: "Web Design in Hot Springs, Arkansas",
      url: `${siteUrl}/locations/hot-springs-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "Hot Springs",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for Hot Springs, Arkansas small businesses, contractors, restaurants, cabins, tourism businesses, and local service providers.",
    },
  ],
};