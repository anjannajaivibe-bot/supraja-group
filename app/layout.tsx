import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "./image-overrides.css";
import "./spacing-overrides.css";
import "./editorial-shell.css";
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
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Supraja Group",
        url: `${siteUrl}/`,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/brand/supraja-group.webp`,
        },
        description: siteDescription,
        foundingDate: "2003",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        knowsAbout: [
          "Real estate development",
          "Hospitality",
          "Food and traditional sweets",
          "Community development",
        ],
        subOrganization: [
          {
            "@type": "Organization",
            name: "Sri Supraja Infracon",
            url: "https://www.srisuprajainfracon.com/",
          },
          {
            "@type": "Organization",
            name: "Supraja Hotels",
            url: "https://suprajahotels.com/",
          },
          {
            "@type": "Organization",
            name: "Supraja Foundation",
          },
        ],
        brand: {
          "@type": "Brand",
          name: "Supraja Group",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Supraja Group",
        description: siteDescription,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
