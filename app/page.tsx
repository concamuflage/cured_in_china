import type { Metadata } from "next";
import { AboutContent } from "./about-content";
import { founderLinkedInUrl } from "./linkedin-link";
import { brandTagline } from "./site-chrome";
import { createPageMetadata, siteDescription, siteUrl } from "./seo";

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
      description: siteDescription,
      slogan: brandTagline,
      founder: {
        "@type": "Person",
        name: "Liangmi Z",
        sameAs: [founderLinkedInUrl],
      },
      areaServed: {
        "@type": "Country",
        name: "China",
      },
      knowsAbout: [
        "Healthcare in China",
        "Medical travel planning",
        "Hospital appointment coordination",
        "Medical translation",
        "Bilingual bedside support",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl.toString(),
      name: "Lotus Health",
      description: siteDescription,
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
