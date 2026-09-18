import type { Metadata } from "next";
import { createPageMetadata } from "../../seo";
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
  return (
    <main className="flex flex-1 flex-col bg-white text-[#251a35]">
      <article className="mx-auto w-full max-w-3xl flex-1 px-5 py-16">
        {/* Native navigation remains reliable when vinext RSC prefetch is unavailable. */}
        <a
          className="text-sm font-semibold text-[#6c3a99] underline decoration-[#bca7d4] underline-offset-4"
          href="/news"
        >
          Back to News
        </a>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
          {cancerTreatmentNews.title}
        </h1>
        <p className="mt-5 text-xl leading-8 text-[#4b3f5a]">
          {cancerTreatmentNews.subtitle}
        </p>
        <div className="mt-10 space-y-6 border-t border-[#d9caec] pt-10 text-[17px] leading-8 text-[#352c40]">
          {cancerTreatmentNews.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <a
          className="mt-10 inline-block text-base font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4 transition-colors hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
          href={cancerTreatmentNews.sourceUrl}
          rel="noreferrer"
          target="_blank"
        >
          {cancerTreatmentNews.sourceLabel}
        </a>
      </article>
    </main>
  );
}
