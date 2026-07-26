import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suprajagroup.com"),
  title: {
    default: "Supraja Group | Progress with Purpose",
    template: "%s | Supraja Group",
  },
  description:
    "Supraja Group builds trusted businesses across real estate, hospitality, food and tradition, and community development.",
  openGraph: {
    title: "Supraja Group | Progress with Purpose",
    description:
      "Building trusted businesses that create lasting value for people, places and communities.",
    type: "website",
    siteName: "Supraja Group",
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
