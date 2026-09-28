import type { Metadata } from "next";
import { createPageMetadata } from "../../seo";
import { NewsArticlePage } from "../news-article";
import { yicaiMedicalTourismNews } from "../news-data";

export const metadata: Metadata = createPageMetadata({
  title: yicaiMedicalTourismNews.title,
  description: yicaiMedicalTourismNews.subtitle,
  path: `/news/${yicaiMedicalTourismNews.slug}`,
});

/**
 * Renders the independent summary of Yicai's report on overseas patients,
 * robotic surgery, and specialist hospital care in China.
 *
 * Example: the page summarizes the reported Ruijin Hospital case and links
 * readers to Yicai Global for the original reporting.
 */
export default function YicaiMedicalTourismNewsPage() {
  return <NewsArticlePage article={yicaiMedicalTourismNews} />;
}
