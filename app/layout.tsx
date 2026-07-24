import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import {
  CONTACT_EMAIL,
  GOOGLE_PROFILE_URL,
  LOGO_PATH,
  OG_IMAGE_PATH,
  PHONE_E164,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Arkansas Web Design & Local SEO | Hometown Web Services",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Web Design",
  verification: {
    google: [
      "qwoscScnZDrLEfuFVsxQ0R325hXoU6TI4OE1f6arJpA",
      "X2qa6b79L57n822AJDaQUwD2esN20h9ES72SmjWBGg8",
    ],
  },
  openGraph: {
    title: "Arkansas Web Design & Local SEO",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Hometown Web Services — Arkansas web design and local SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkansas Web Design & Local SEO",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_PATH],
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
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: "Hometown Web Services Arkansas",
      url: SITE_URL,
      logo: `${SITE_URL}${LOGO_PATH}`,
      image: `${SITE_URL}${OG_IMAGE_PATH}`,
      telephone: PHONE_E164,
      email: CONTACT_EMAIL,
      areaServed: {
        "@type": "State",
        name: "Arkansas",
      },
      description: SITE_DESCRIPTION,
      sameAs: [GOOGLE_PROFILE_URL],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        contactType: "sales",
        areaServed: "US-AR",
        availableLanguage: "English",
      },
      serviceType: [
        "Web Design",
        "Local SEO",
        "Small Business Websites",
        "Contractor Website Design",
        "Vacation Rental Website Design",
        "Google Business Profile Optimization",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: "Hometown Web Services Arkansas",
      url: SITE_URL,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#business` },
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
