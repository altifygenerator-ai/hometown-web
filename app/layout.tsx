import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Affordable Website Design for Small Businesses | Altify",
  description:
    "We build fast, modern websites for small businesses that bring in customers. Affordable pricing, quick turnaround, and clean design.",
  
  keywords: [
    "website design Arkansas",
    "small business website",
    "affordable web design",
    "local business websites",
    "website developer Arkansas",
    "Next.js web design",
    "web design in glenwood arkansas",
    "website design in glenwood ar",
    "website design in hot springs ar",
    "website design in texarkana ar",
    "website design in hope ar",
    "website design in magnolia ar",
    "website design in el dorado ar",
    "small business web design Arkansas",
    "affordable website design Arkansas",
    "local web design Arkansas",
    "Next.js web design Arkansas",
    "small business website arkansas",
    "affordable web design Arkansas",
    "local business websites Arkansas",
    "website developer Arkansas",
  ],

  authors: [{ name: "Altify" }],
  creator: "Altify",

  openGraph: {
    title: "Affordable Website Design for Small Businesses",
    description:
      "Modern, high-converting websites built for small businesses.",
    url: "https://hometownwebservicesar.cc/",
    siteName: "Hometown Web Services AR",
    images: [
      {
        url: "/preview.png", // add this image in /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Affordable Website Design for Small Businesses",
    description:
      "Clean, modern websites that bring in customers.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html
  lang="en"
  className={`${playfair.variable} ${inter.variable} h-full antialiased`}
>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
