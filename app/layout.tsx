import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site-chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Lotus Health | Affordable Treatment in China";
const siteDescription =
  "Language barriers shouldn't make healthcare expensive. Patient-centered care coordination for Americans seeking affordable treatment options in China.";

/**
 * Builds page metadata using the current request host for absolute social URLs.
 *
 * Example: a request for `lotushealth.cc` emits metadata using the tagline
 * and `https://lotushealth.cc/og.png` for link previews.
 */
export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "lotushealth.cc";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const baseUrl = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    title: siteTitle,
    description: siteDescription,
    metadataBase: baseUrl,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      images: [socialImage],
      siteName: "Lotus Health",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [socialImage],
    },
    icons: {
      icon: "/lotus-health-logo.png",
      shortcut: "/lotus-health-logo.png",
    },
  };
}

/**
 * Provides the shared document shell, navigation, and footer for every Lotus
 * Health page.
 *
 * Example: `/news` and `/contact` receive the same header and footer without
 * rendering those elements inside either page component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-[#f5f0fb] text-[#251a35] antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
