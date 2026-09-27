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
  // A distinct pathname prevents social platforms from reusing the legacy
  // CuredInChina preview. For example, crawlers now request
  // `https://lotushealth.cc/lotus-health-open-graph.png` instead of `/og.png`.
  const socialImage = new URL(
    "/lotus-health-open-graph.png",
    siteUrl,
  ).toString();

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
      images: [
        {
          url: socialImage,
          width: 1672,
          height: 941,
          alt: "Lotus Health",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}
