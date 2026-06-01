import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const hotSpringsLocation: LocationData = {
  city: "Hot Springs",
  state: "AR",
  slug: "hot-springs-ar",
  url: `${siteUrl}/locations/hot-springs-ar`,

  metadata: {
    title:
      "Web Design in Hot Springs, AR | Small Business & Contractor Websites",
    description:
      "Web design and local SEO for Hot Springs, Arkansas contractors, cabins, vacation rentals, restaurants, cleaning companies, tourism businesses, shops, and local service providers.",
    alternates: {
      canonical: `${siteUrl}/locations/hot-springs-ar`,
    },
  },

  hero: {
    eyebrow: "Hot Springs Web Design",
    title:
      "Web design in Hot Springs for businesses that need more calls, trust, and local visibility.",
    description:
      "I build clean, mobile-friendly websites for Hot Springs contractors, cabins, vacation rentals, restaurants, cleaning companies, tourism businesses, local shops, and service businesses that need a stronger online presence and an easier way for customers to reach out.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Free preview before you pay",
    "Built for Google and mobile",
    "Designed around calls and quote requests",
  ],

  intro: {
    eyebrow: "Built for Hot Springs businesses",
    title:
      "A better website for a city built around tourism, local search, and first impressions.",
    paragraphs: [
      "Hot Springs businesses compete for attention from locals, visitors, homeowners, property owners, and people searching on their phones. Whether someone is looking for a cabin, restaurant, contractor, cleaning company, local shop, or tourism business, the website needs to make the business easy to understand and easy to contact.",
      "A lot of local businesses already have good work, good photos, and active Facebook pages. The problem is that Facebook is not always enough. A website gives customers one clear place to see your services, photos, reviews, service areas, hours, booking links, quote options, and contact information.",
      "I build Hot Springs websites around the way people actually search and decide: quick mobile layout, clear calls-to-action, real proof, local wording, Google-friendly structure, and a clean design that makes the business feel more trustworthy before the first call.",
    ],
  },

  services: [
    {
      title: "Small business website design",
      text: "Clean websites for Hot Springs businesses that need to explain services, show proof, and make it easy for customers to call, text, book, or request a quote.",
    },
    {
      title: "Contractor and service business websites",
      text: "Websites for remodelers, roofers, plumbers, landscapers, cleaners, dirt work companies, home service businesses, and other trades serving Hot Springs and nearby areas.",
    },
    {
      title: "Cabin, rental, and tourism websites",
      text: "Photo-first websites for cabins, Airbnbs, vacation rentals, restaurants, attractions, local guides, and businesses that rely on visitor traffic.",
    },
    {
      title: "Local SEO and Google structure",
      text: "Page structure, headings, metadata, service-area wording, and Google Business Profile support to help search engines better understand your business.",
    },
  ],

  seoBlock: {
    eyebrow: "Local visibility",
    title: "Hot Springs customers usually search before they call.",
    text:
      "A good website helps Google understand what your business does, where you work, and why customers should trust you. For Hot Springs businesses, that can mean stronger service pages, clearer local wording, better mobile layout, review placement, photo sections, and contact paths built around calls, quote requests, bookings, and directions.",
    nearbyAreas: [
      "Lake Hamilton",
      "Hot Springs Village",
      "Mountain Pine",
      "Royal",
      "Rockwell",
      "Lake Catherine",
      "Garland County",
    ],
  },

  industries: [
    "Contractors and remodelers",
    "Roofers and construction companies",
    "Plumbers and home service businesses",
    "Cleaning companies",
    "Lawn care and property services",
    "Cabins and vacation rentals",
    "Restaurants and food trucks",
    "Coffee shops and local dining",
    "Tourism businesses and attractions",
    "Local shops and boutiques",
    "Professional services",
    "Google-first service businesses",
  ],

  faqs: [
    {
      question: "Do you build websites for Hot Springs contractors?",
      answer:
        "Yes. I build websites for Hot Springs contractors, remodelers, roofers, plumbers, landscapers, cleaning companies, dirt work businesses, and other local service companies that need more calls and quote requests.",
    },
    {
      question: "Do you build websites for Hot Springs cabins and vacation rentals?",
      answer:
        "Yes. I build photo-first websites for cabins, Airbnbs, vacation rentals, lake stays, boutique lodging, and rental owners who want a cleaner online presence beyond only Airbnb or Vrbo.",
    },
    {
      question: "Can you help Hot Springs businesses show up better on Google?",
      answer:
        "Yes. I build websites with local SEO structure, service-area wording, metadata, headings, internal links, and Google Business Profile support so Google can better understand the business and the areas it serves.",
    },
    {
      question: "Can you use my Facebook page to build the site?",
      answer:
        "Yes. Many Hot Springs businesses already have photos, service details, reviews, menus, hours, or updates on Facebook. I can use that as a starting point and turn it into a cleaner website.",
    },
    {
      question: "Do I have to pay before seeing anything?",
      answer:
        "No. I can put together a free preview first so you can see the direction before committing.",
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
        telephone: "+18702604880",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Hot Springs",
          addressRegion: "AR",
        },
        {
          "@type": "Place",
          name: "Lake Hamilton",
        },
        {
          "@type": "Place",
          name: "Hot Springs Village",
        },
        {
          "@type": "AdministrativeArea",
          name: "Garland County",
        },
      ],
      serviceType: [
        "Web Design",
        "Local SEO",
        "Contractor Website Design",
        "Small Business Website Design",
        "Vacation Rental Website Design",
        "Google Business Profile Optimization",
      ],
      description:
        "Web design and local SEO services for Hot Springs, Arkansas small businesses, contractors, restaurants, cabins, vacation rentals, tourism businesses, cleaning companies, and local service providers.",
    },
  ],
};