import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://hometownwebservicesar.cc";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Arkansas Web Design for Small Businesses | Hometown Web Services",
    template: "%s | Hometown Web Services",
  },

  description:
    "Web design, local SEO, and Google-ready websites for Arkansas small businesses, contractors, service companies, restaurants, and local shops.",

 keywords: [
  // core web design
  "Arkansas web design",
  "Arkansas web designer",
  "web design Arkansas",
  "small business websites Arkansas",
  "custom websites Arkansas",
  "modern website design Arkansas",
  "professional websites Arkansas",
  "responsive web design Arkansas",
  "mobile friendly websites Arkansas",
  "website redesign Arkansas",
  "website developer Arkansas",
  "website development Arkansas",
  "local web designer Arkansas",

  // seo + google
  "local SEO Arkansas",
  "SEO services Arkansas",
  "Google Business Profile help Arkansas",
  "Google Maps ranking Arkansas",
  "website SEO Arkansas",
  "small business SEO Arkansas",
  "contractor SEO Arkansas",
  "Google-ready websites",
  "SEO web design Arkansas",
  "websites built for Google rankings",

  // industries
  "websites for contractors Arkansas",
  "contractor website design Arkansas",
  "roofing website design Arkansas",
  "plumber website design Arkansas",
  "electrician website design Arkansas",
  "HVAC website design Arkansas",
  "cleaning company website Arkansas",
  "restaurant website design Arkansas",
  "landscaping website design Arkansas",
  "construction company website Arkansas",
  "real estate website Arkansas",
  "tourism website Arkansas",
  "vacation rental website Arkansas",
  "small town business websites",
  "service business web design",

  // local cities
  "web design Arkadelphia AR",
  "web design Hot Springs AR",
  "web design Glenwood AR",
  "web design Mount Ida AR",
  "web design Amity AR",
  "web design Malvern AR",
  "web design Benton AR",
  "web design Little Rock AR",
  "web design Central Arkansas",
  "website designer near me Arkansas",

  // intent-based
  "affordable websites for small businesses",
  "small business web developer",
  "help getting found on Google",
  "website help for local businesses",
  "website upgrades Arkansas",
  "website maintenance Arkansas",
  "website help near me",
  "small business marketing Arkansas",
  "website and SEO packages Arkansas",
  "website designer for local businesses",
],
  verification: {
    google: "qwoscScnZDrLEfuFVsxQ0R325hXoU6TI4OE1f6arJpA",
  },

  openGraph: {
    title: "Arkansas Web Design for Small Businesses",
    description:
      "Modern websites built to help Arkansas businesses show up on Google, look more professional, and turn visitors into calls.",
    url: siteUrl,
    siteName: "Hometown Web Services",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hometown Web Services Arkansas Web Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arkansas Web Design for Small Businesses",
    description:
      "Websites and local SEO for Arkansas small businesses, contractors, and service companies.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Hometown Web Services",
      url: siteUrl,
      areaServed: {
        "@type": "State",
        name: "Arkansas",
      },
      description:
        "Web design and local SEO services for Arkansas small businesses, contractors, service companies, restaurants, and local shops.",
      serviceType: [
        "Web Design",
        "Local SEO",
        "Small Business Websites",
        "Google Business Profile Optimization",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Hometown Web Services",
      url: siteUrl,
    },
  ];

  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[var(--bg-main)] text-[var(--text-main)] antialiased selection:bg-[var(--accent)] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}