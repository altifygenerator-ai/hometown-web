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
    "Arkansas web design",
    "Arkansas web designer",
    "small business websites Arkansas",
    "websites for Arkansas contractors",
    "contractor website design Arkansas",
    "local SEO Arkansas",
    "Google Business Profile help Arkansas",
    "web design for service businesses",
    "websites for roofers Arkansas",
    "websites for electricians Arkansas",
    "websites for cleaning companies Arkansas",
    "restaurant website design Arkansas",
  ],

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