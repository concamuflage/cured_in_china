import type { Metadata } from "next";
import { createPageMetadata } from "../../seo";
import { NewsArticlePage } from "../news-article";
import { peopleCancerTreatmentNews } from "../news-data";

export const metadata: Metadata = createPageMetadata({
  title: peopleCancerTreatmentNews.title,
  description: peopleCancerTreatmentNews.subtitle,
  path: `/news/${peopleCancerTreatmentNews.slug}`,
});

/**
 * Renders the independent summary of People's report about a California
 * couple seeking CLDN18.2-targeted CAR T-cell therapy in Shenzhen.
 *
 * Example: `/news/california-couple-seeks-car-t-treatment-in-china` links to
 * the original People report and supporting medical sources.
 */
export default function CaliforniaCoupleCarTNewsPage() {
  return <NewsArticlePage article={peopleCancerTreatmentNews} />;
}
