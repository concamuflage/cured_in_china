import type { Metadata } from "next";

export const siteUrl = new URL("https://lotushealth.cc");
export const siteName = "Lotus Health";
export const siteTitle = "Lotus Health | Affordable Treatment in China";
export const siteDescription =
  "Language barriers shouldn't make healthcare expensive. Patient-centered information for Americans exploring affordable treatment options in China.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  canonicalPath?: string;
  absoluteTitle?: string;
  index?: boolean;
};

/**
 * Creates consistent search, canonical, and social metadata for a public page.
 *
 * Example: `{ title: "News", path: "/news" }` produces the canonical URL
 * `https://lotushealth.cc/news` and the social title `News | Lotus Health`.
 */
export function createPageMetadata({
  title,
  description,
  path,
  canonicalPath = path,
  absoluteTitle,
  index = true,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = new URL(canonicalPath, siteUrl).toString();
  const socialTitle = absoluteTitle ?? `${title} | ${siteName}`;
  const socialImage = new URL("/og.png", siteUrl).toString();

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: canonicalUrl },
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonicalUrl,
      siteName,
      type: "website",
      images: [{ url: socialImage, alt: "Lotus Health" }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}
