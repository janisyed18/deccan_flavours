import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

import { AppChrome } from "@/components/layout/AppChrome";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(RESTAURANT_CONFIG.website),
  title: {
    default: "Deccan Flavours Wentworthville | Authentic South Indian & Deccan Cuisine",
    template: "%s | Deccan Flavours Wentworthville",
  },
  description: RESTAURANT_CONFIG.tagline,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: RESTAURANT_CONFIG.website,
    siteName: "Deccan Flavours Wentworthville",
    title: "Deccan Flavours Wentworthville",
    description: RESTAURANT_CONFIG.tagline,
    images: [
      {
        url: RESTAURANT_CONFIG.heroImage,
        width: 1200,
        height: 900,
        alt: "Authentic South Indian cuisine at Deccan Flavours Wentworthville",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deccan Flavours Wentworthville",
    description: RESTAURANT_CONFIG.tagline,
    images: [RESTAURANT_CONFIG.heroImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}
      >
        <AppChrome>{children}</AppChrome>
        <Analytics />
      </body>
    </html>
  );
}
