import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const bryantLocation: LocationData = {
  city: "Bryant",
  state: "AR",
  slug: "bryant-ar",
  url: `${siteUrl}/locations/bryant-ar`,

  metadata: {
    title: "Web Design in Bryant, AR | Hometown Web Services",
    description:
      "Web design and local SEO for Bryant, Arkansas contractors, service businesses, restaurants, cleaning companies, shops, and small businesses serving Saline County.",
    alternates: {
      canonical: `${siteUrl}/locations/bryant-ar`,
    },
  },

  hero: {
    eyebrow: "Bryant Web Design",
    title:
      "Web design in Bryant, Arkansas for businesses that need to look trusted fast.",
    description:
      "I build clean, mobile-friendly websites for Bryant contractors, service companies, restaurants, shops, cleaners, and local businesses that need stronger Google visibility and easier ways for customers to reach out.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Built for local service leads",
    "Clean mobile-first websites",
    "Free preview before you pay",
  ],

  intro: {
    eyebrow: "Built for Bryant businesses",
    title:
      "A better website for businesses serving one of Saline County’s busiest local markets.",
    paragraphs: [
      "Bryant is full of local competition. Contractors, cleaning companies, restaurants, shops, home service businesses, and professional services are all trying to get found by the same nearby customers.",
      "When someone searches for a service in Bryant, your website needs to quickly explain what you do, show that you are trustworthy, and make it easy to call, text, or request a quote without digging around.",
    ],
  },

  services: [
    {
      title: "Small business website design",
      text: "Clean websites for Bryant businesses that need a stronger online presence and a clearer path for customers to contact them.",
    },
    {
      title: "Contractor website design",
      text: "Websites for remodelers, roofers, plumbers, electricians, landscapers, cleaners, painters, and home service businesses.",
    },
    {
      title: "Local SEO structure",
      text: "Pages, headings, metadata, and local wording built around Bryant, Saline County, and nearby customer searches.",
    },
    {
      title: "Google Business Profile support",
      text: "Help making your Google listing and website work together so your business looks more complete in search and maps.",
    },
  ],

  seoBlock: {
    eyebrow: "Local search",
    title: "Bryant customers are searching, comparing, and choosing fast.",
    text:
      "A strong website helps your business show what you do, where you work, and why people should trust you. It also gives Google clearer information about your services and local relevance.",
    nearbyAreas: [
      "Benton",
      "Alexander",
      "Bauxite",
      "Haskell",
      "Saline County",
      "Little Rock metro",
    ],
  },

  industries: [
    "Contractors and trades",
    "Cleaning companies",
    "Restaurants and food businesses",
    "Lawn care and landscaping",
    "Home repair companies",
    "Local shops",
    "Professional services",
    "Health and wellness businesses",
  ],

  faqs: [
    {
      question: "Do you build websites for Bryant contractors?",
      answer:
        "Yes. I build websites for Bryant roofers, remodelers, plumbers, electricians, landscapers, painters, cleaners, and other local service businesses.",
    },
    {
      question: "Can a website help my Bryant business get more calls?",
      answer:
        "Yes. A clean website can make your services easier to understand, build trust, and make it easier for customers to call, text, or request a quote.",
    },
    {
      question: "Do you help with local SEO for Bryant businesses?",
      answer:
        "Yes. I can structure your website around Bryant service searches, nearby areas, metadata, service pages, and Google Business Profile support.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/bryant-ar#service`,
      name: "Web Design in Bryant, Arkansas",
      url: `${siteUrl}/locations/bryant-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "Bryant",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for Bryant, Arkansas contractors, service businesses, restaurants, cleaning companies, shops, and small businesses serving Saline County.",
    },
  ],
};