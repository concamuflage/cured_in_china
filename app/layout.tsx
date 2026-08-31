import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "CuredInChina | Affordable Treatment in China";
const siteDescription =
  "Patient-centered care coordination for Americans seeking affordable treatment options in China.";

/**
 * Builds page metadata using the current request host for absolute social URLs.
 *
 * Example: a request for `curedinchina.com` emits
 * `https://curedinchina.com/og.png` for link previews.
 */
export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "curedinchina.com";
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
      siteName: "CuredInChina",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [socialImage],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

/**
 * Provides the shared document shell for every CuredInChina page.
 *
 * Example: the home page receives the same English language setting, font
 * variables, and antialiased body rendering as future blog or FAQ routes.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
