import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://suprajagroup.com";
const siteTitle = "Supraja Group | Progress with Purpose";
const siteDescription =
  "Supraja Group builds trusted businesses across real estate, hospitality, food and tradition, and community development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Supraja Group",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description:
      "Building trusted businesses that create lasting value for people, places and communities.",
    url: siteUrl,
    type: "website",
    siteName: "Supraja Group",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Supraja Group - Progress with Purpose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Building trusted businesses that create lasting value for people, places and communities.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
