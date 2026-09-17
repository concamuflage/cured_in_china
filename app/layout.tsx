import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteDescription, siteName, siteTitle, siteUrl } from "./seo";
import { SiteFooter, SiteHeader } from "./site-chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleAnalyticsId = "G-L6BXVPN0B0";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: siteTitle, template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: "/lotus-health-logo.png",
    shortcut: "/lotus-health-logo.png",
  },
};

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
