import type { Metadata } from "next";
import { createPageMetadata } from "../../seo";
import { NewsArticlePage } from "../news-article";
import { cancerTreatmentNews } from "../news-data";

export const metadata: Metadata = createPageMetadata({
  title: cancerTreatmentNews.title,
  description: cancerTreatmentNews.subtitle,
  path: `/news/${cancerTreatmentNews.slug}`,
});

/**
 * Renders the complete cancer-treatment news entry supplied for the News page.
 *
 * Example: `/news/patients-flying-to-china-for-cancer-treatment` displays the
 * full article and links readers to the original Wall Street Journal report.
 */
export default function CancerTreatmentNewsPage() {
  return <NewsArticlePage article={cancerTreatmentNews} />;
}
