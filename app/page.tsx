import type { Metadata } from "next";
import { AboutContent } from "./about-content";
import { brandTagline } from "./site-chrome";
import { createPageMetadata, siteUrl } from "./seo";

export const metadata: Metadata = createPageMetadata({
  title: "Affordable Treatment in China",
  absoluteTitle: "Lotus Health | Affordable Treatment in China",
  description: `${brandTagline} Patient-centered information for Americans exploring affordable treatment options in China.`,
  path: "/",
});

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Lotus Health",
      url: siteUrl.toString(),
      logo: new URL("/lotus-health-logo.png", siteUrl).toString(),
      email: "lotus.health@outlook.com",
      slogan: brandTagline,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl.toString(),
      name: "Lotus Health",
      publisher: { "@id": `${siteUrl}#organization` },
      inLanguage: "en-US",
    },
  ],
};

/**
 * Renders the Lotus Health home page with the About Us story as its index.
 *
 * Example: visiting `/` shows the same founder story and education-cost
 * comparison that appears on `/about`.
 */
export default function Home() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <AboutContent />
    </main>
  );
}
