import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
   title: {
    default: "Arkansas Web Design for Small Businesses | Hometown Web Services",
    template: "%s | Hometown Web Services",
  },
  description:
    "Web design and SEO for small businesses in Arkansas. Clean, modern websites that help you show up on Google and get more calls and leads.",
  keywords: [
    "web design Arkansas",
    "Arkansas web designer",
    "small business website Arkansas",
    "SEO Arkansas small business",
    "Google business profile optimization Arkansas",
    "local web design services",
  ],
  openGraph: {
    title: "Arkansas Web Design | Hometown Web Services",
    description:
      "Clean, modern websites built to help small businesses show up on Google and get more customers.",
    url: "https://hometownwebservicesar.cc",
    siteName: "Hometown Web Services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hometown Web Services",
      },
    ],
  },
  metadataBase: new URL("https://hometownwebservicesar.cc"),
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