import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Hometown Web Services | Arkansas Web Design for Small Businesses",
    template: "%s | Hometown Web Services",
  },
  description:
    "Affordable, high-converting websites for small businesses in Arkansas. Hometown Web Services builds fast, modern sites that turn visitors into customers.",
  keywords: [
    "web design Arkansas",
    "small business websites Arkansas",
    "website developer Arkansas",
    "local web design services",
    "affordable web design Arkansas",
    "business website design Arkansas",
  ],
  openGraph: {
  title: "Hometown Web Services | Arkansas Web Design",
  description:
    "Clean, modern websites that actually bring in customers. Built for small businesses in Arkansas.",
  url: "https://hometownwebservicesar.cc",
  siteName: "Hometown Web Services",
  type: "website",

  images: [
    {
      url: "/og-image.png", // 👈 this is key
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
