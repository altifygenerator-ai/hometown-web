import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const glenwoodLocation: LocationData = {
  city: "Glenwood",
  state: "AR",
  slug: "glenwood-ar",
  url: `${siteUrl}/locations/glenwood-ar`,

  metadata: {
    title: "Web Design in Glenwood, AR | Hometown Web Services",
    description:
      "Web design and local SEO for Glenwood, Arkansas businesses including cabins, tourism businesses, restaurants, contractors, local shops, and service providers.",
    alternates: {
      canonical: `${siteUrl}/locations/glenwood-ar`,
    },
  },

  hero: {
    eyebrow: "Glenwood Web Design",
    title:
      "Web design in Glenwood, Arkansas for local businesses, cabins, and tourism traffic.",
    description:
      "I build clean, mobile-friendly websites for Glenwood cabins, restaurants, contractors, shops, tourism businesses, and local service providers that need to be easier to find and easier to contact.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Built for small-town businesses",
    "Tourism and local SEO focused",
    "Free preview before you pay",
  ],

  intro: {
    eyebrow: "Built for Glenwood businesses",
    title:
      "A better website for businesses serving visitors, locals, and nearby lake traffic.",
    paragraphs: [
      "Glenwood businesses often depend on more than just local customers. Visitors looking for cabins, food, river access, lake trips, things to do, and local services are searching online before they ever drive into town.",
      "A strong website gives those people one clear place to understand your business, see what you offer, view photos, and contact you without having to scroll through Facebook posts or guess where to go next.",
    ],
  },

  services: [
    {
      title: "Tourism business websites",
      text: "Websites for cabins, local guides, restaurants, attractions, and businesses that depend on visitors finding them online.",
    },
    {
      title: "Small business website design",
      text: "Clean websites for Glenwood businesses that need a professional online presence beyond social media.",
    },
    {
      title: "Local SEO structure",
      text: "Search-focused structure built around Glenwood, nearby lake areas, local services, and Arkansas visitor searches.",
    },
    {
      title: "Contractor and service business sites",
      text: "Websites for contractors, cleaners, home services, repair businesses, and small local companies serving the Glenwood area.",
    },
  ],

  seoBlock: {
    eyebrow: "Local and visitor search",
    title: "Glenwood businesses need to show up when people are planning where to go.",
    text:
      "For small towns with visitor traffic, your website needs to support both local searches and tourism-related searches. That means clear services, location wording, photos, contact options, and Google-ready structure.",
    nearbyAreas: [
      "Caddo River",
      "Lake Greeson",
      "Murfreesboro",
      "Amity",
      "Kirby",
      "Pike County",
    ],
  },

  industries: [
    "Cabins and vacation rentals",
    "Restaurants and local food spots",
    "Tourism businesses",
    "Local shops",
    "Contractors and remodelers",
    "Cleaning companies",
    "Outdoor and recreation businesses",
    "Home service providers",
  ],

  faqs: [
    {
      question: "Do you build websites for Glenwood cabins and tourism businesses?",
      answer:
        "Yes. I build websites for cabins, vacation rentals, local guides, restaurants, attractions, and tourism businesses that need to be easier for visitors to find.",
    },
    {
      question: "Can a website help a small-town business in Glenwood?",
      answer:
        "Yes. A website gives people a clear place to see your services, location, photos, reviews, and contact information, especially when they are searching before visiting or calling.",
    },
    {
      question: "Can you help with local SEO for Glenwood businesses?",
      answer:
        "Yes. I can structure the website around Glenwood searches, nearby areas, service pages, local wording, and Google Business Profile support.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/glenwood-ar#service`,
      name: "Web Design in Glenwood, Arkansas",
      url: `${siteUrl}/locations/glenwood-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "Glenwood",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for Glenwood, Arkansas small businesses, cabins, tourism businesses, restaurants, contractors, local shops, and service providers.",
    },
  ],
};