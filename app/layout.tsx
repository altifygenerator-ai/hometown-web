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
      "Arkansas Web Design for Small Businesses | Websites That Get Leads",
    template: "%s | Hometown Web Services",
  },

  description:
    "Web design and SEO for small businesses in Arkansas. Clean, modern websites built to rank on Google, bring in leads, and turn visitors into calls.",

  keywords: [
    "web design Arkansas",
    "Arkansas web designer",
    "small business website Arkansas",
    "SEO Arkansas small business",
    "Google business profile optimization Arkansas",
    "local web design services",
    "contractor website design Arkansas",
    "lead generation websites Arkansas",
  ],

  openGraph: {
    title: "Arkansas Web Design | Hometown Web Services",
    description:
      "Modern websites built to help Arkansas businesses show up on Google and get more calls and leads.",
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
    title: "Arkansas Web Design | Hometown Web Services",
    description:
      "Websites built for small businesses in Arkansas to rank on Google and generate leads.",
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
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[var(--bg-main)] text-[var(--text-main)] antialiased selection:bg-[var(--accent)] selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}