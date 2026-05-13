import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const arkadelphiaLocation: LocationData = {
  city: "Arkadelphia",
  state: "AR",
  slug: "arkadelphia-ar",
  url: `${siteUrl}/locations/arkadelphia-ar`,

  metadata: {
    title: "Web Design in Arkadelphia, AR | Hometown Web Services",
    description:
      "Web design and local SEO for Arkadelphia, Arkansas businesses, contractors, restaurants, shops, service companies, and businesses serving DeGray Lake and Caddo Valley.",
    alternates: {
      canonical: `${siteUrl}/locations/arkadelphia-ar`,
    },
  },

  hero: {
    eyebrow: "Arkadelphia Web Design",
    title:
      "Web design in Arkadelphia, Arkansas for local businesses that need to be easier to find.",
    description:
      "I build clean, mobile-friendly websites for Arkadelphia contractors, restaurants, shops, local services, and small businesses that need a better online presence and clearer ways for customers to call, text, or request a quote.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Local Arkansas web design",
    "Free preview before you pay",
    "Built for Google and mobile",
  ],

  intro: {
    eyebrow: "Built for Arkadelphia businesses",
    title:
      "A stronger website for businesses serving Arkadelphia, Caddo Valley, and DeGray Lake.",
    paragraphs: [
      "Arkadelphia has a mix of local traffic, college traffic, highway traffic, lake visitors, and nearby communities. That means your website needs to do more than just exist — it needs to clearly explain who you help, what you offer, and how people can reach you.",
      "Whether someone is looking for a contractor, restaurant, service business, local shop, rental, or business near DeGray Lake, your site should make it easy for them to trust you and take the next step.",
    ],
  },

  services: [
    {
      title: "Small business website design",
      text: "Clean websites for Arkadelphia businesses that need a professional place to send customers outside of Facebook.",
    },
    {
      title: "Local SEO structure",
      text: "Pages, headings, metadata, and local content built around Arkadelphia, nearby communities, and service-area searches.",
    },
    {
      title: "Contractor and service business sites",
      text: "Websites for remodelers, roofers, plumbers, cleaners, landscapers, repair businesses, and local service providers.",
    },
    {
      title: "Google Business Profile help",
      text: "Support for your Google listing so your business information, website, and local search presence work together.",
    },
  ],

  seoBlock: {
    eyebrow: "Local visibility",
    title: "Arkadelphia customers need to find you before they can call you.",
    text:
      "A better website helps Google understand your services, location, and service areas while giving customers a clear place to view your work, contact options, and business information.",
    nearbyAreas: [
      "Caddo Valley",
      "DeGray Lake",
      "Gurdon",
      "Friendship",
      "Donaldson",
      "Clark County",
    ],
  },

  industries: [
    "Contractors and remodelers",
    "Restaurants and local food spots",
    "Cleaning companies",
    "Lawn care and landscaping",
    "Local shops",
    "Professional services",
    "Rental and lake-area businesses",
    "Home service companies",
  ],

  faqs: [
    {
      question: "Do you build websites for Arkadelphia small businesses?",
      answer:
        "Yes. I build websites for Arkadelphia contractors, restaurants, shops, service businesses, cleaners, local companies, and businesses serving nearby areas like Caddo Valley and DeGray Lake.",
    },
    {
      question: "Can you help my Arkadelphia business show up better on Google?",
      answer:
        "Yes. I can build the site with local SEO structure, service pages, location wording, metadata, and Google Business Profile support to help improve local visibility.",
    },
    {
      question: "Do I need a website if most of my customers find me on Facebook?",
      answer:
        "Yes. Facebook can help, but a website gives customers one clear place to see your services, photos, reviews, contact options, and business information without digging through posts.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/arkadelphia-ar#service`,
      name: "Web Design in Arkadelphia, Arkansas",
      url: `${siteUrl}/locations/arkadelphia-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "Arkadelphia",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for Arkadelphia, Arkansas small businesses, contractors, restaurants, shops, local service companies, and businesses serving Caddo Valley and DeGray Lake.",
    },
  ],
};