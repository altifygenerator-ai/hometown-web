import type { LocationData } from "./types";

const siteUrl = "https://hometownwebservicesar.cc";

export const caddoValleyLocation: LocationData = {
  city: "Caddo Valley",
  state: "AR",
  slug: "caddo-valley-ar",
  url: `${siteUrl}/locations/caddo-valley-ar`,

  metadata: {
    title: "Web Design in Caddo Valley, AR | Hometown Web Services",
    description:
      "Web design and local SEO for Caddo Valley, Arkansas businesses including lodging, restaurants, tourism businesses, contractors, shops, and service providers near DeGray Lake.",
    alternates: {
      canonical: `${siteUrl}/locations/caddo-valley-ar`,
    },
  },

  hero: {
    eyebrow: "Caddo Valley Web Design",
    title:
      "Web design in Caddo Valley for businesses serving travelers, locals, and DeGray Lake visitors.",
    description:
      "I build clean, mobile-friendly websites for Caddo Valley lodging, restaurants, tourism businesses, contractors, shops, and local service providers that need to be easier to find and easier to contact.",
    primaryCta: "Get a free preview",
    secondaryCta: "View services",
  },

  trustItems: [
    "Built for visitor traffic",
    "Local and tourism SEO focused",
    "Free preview before you pay",
  ],

  intro: {
    eyebrow: "Built for Caddo Valley businesses",
    title:
      "A better website for businesses serving highway traffic, lake visitors, and nearby communities.",
    paragraphs: [
      "Caddo Valley businesses often depend on people who are already searching while traveling, planning a lake trip, looking for food, booking lodging, or trying to find a nearby service. Your website needs to give them quick answers.",
      "A strong site helps customers see what you offer, where you are, what areas you serve, and how to contact you without relying only on Facebook posts, map listings, or scattered information.",
    ],
  },

  services: [
    {
      title: "Tourism and lodging websites",
      text: "Websites for hotels, cabins, rentals, lake-area businesses, restaurants, and visitor-focused companies near Caddo Valley.",
    },
    {
      title: "Small business website design",
      text: "Clean websites for local businesses that need a professional place to show services, photos, hours, and contact details.",
    },
    {
      title: "Local SEO structure",
      text: "Search-focused structure built around Caddo Valley, DeGray Lake, Arkadelphia, highway traffic, and visitor searches.",
    },
    {
      title: "Service business websites",
      text: "Websites for contractors, cleaners, repair businesses, lawn care, home services, and small companies serving the area.",
    },
  ],

  seoBlock: {
    eyebrow: "Local and visitor visibility",
    title: "Caddo Valley customers are often searching with intent right now.",
    text:
      "When someone is searching for lodging, food, lake-area services, contractors, or local businesses, your website needs to be easy to find, easy to trust, and easy to act on from a phone.",
    nearbyAreas: [
      "DeGray Lake",
      "Arkadelphia",
      "DeGray Lake Resort State Park",
      "Gurdon",
      "Clark County",
      "Interstate 30 corridor",
    ],
  },

  industries: [
    "Hotels and lodging",
    "Cabins and rentals",
    "Restaurants and food businesses",
    "Tourism businesses",
    "Contractors and service providers",
    "Local shops",
    "Outdoor and lake-area businesses",
    "Cleaning and maintenance companies",
  ],

  faqs: [
    {
      question: "Do you build websites for Caddo Valley tourism and lodging businesses?",
      answer:
        "Yes. I build websites for lodging, cabins, restaurants, lake-area businesses, tourism companies, and visitor-focused businesses around Caddo Valley and DeGray Lake.",
    },
    {
      question: "Can local SEO help a Caddo Valley business?",
      answer:
        "Yes. Caddo Valley businesses can benefit from local and visitor-focused SEO because many customers are searching online before traveling, booking, eating, or calling.",
    },
    {
      question: "Do you work with businesses near DeGray Lake and Arkadelphia?",
      answer:
        "Yes. I can build websites for businesses in Caddo Valley, Arkadelphia, DeGray Lake, Gurdon, and nearby Clark County areas.",
    },
  ],

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/locations/caddo-valley-ar#service`,
      name: "Web Design in Caddo Valley, Arkansas",
      url: `${siteUrl}/locations/caddo-valley-ar`,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: "Hometown Web Services",
        url: siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: "Caddo Valley",
        addressRegion: "AR",
      },
      serviceType: "Web Design and Local SEO",
      description:
        "Web design and local SEO services for Caddo Valley, Arkansas lodging, restaurants, tourism businesses, contractors, shops, and service providers near DeGray Lake.",
    },
  ],
};