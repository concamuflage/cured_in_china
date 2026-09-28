import type { NewsArticle } from "./news-data";

type NewsArticlePageProps = {
  article: NewsArticle;
};

/**
 * Renders an attributed on-site news article and its supporting references.
 *
 * Example: a People summary displays its independent attribution, article
 * paragraphs, original-report link, and medical reference links.
 */
export function NewsArticlePage({ article }: NewsArticlePageProps) {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#251a35]">
      <article className="mx-auto w-full max-w-6xl flex-1 px-5 py-16">
        {/* Native navigation remains reliable when vinext RSC prefetch is unavailable. */}
        <a
          className="text-sm font-semibold text-[#6c3a99] underline decoration-[#bca7d4] underline-offset-4"
          href="/news"
        >
          Back to News
        </a>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-xl leading-8 text-[#4b3f5a]">
          {article.subtitle}
        </p>
        {article.attribution ? (
          <p className="mt-4 text-sm leading-6 text-[#625371]">
            {article.attribution}
          </p>
        ) : null}
        <div className="mt-10 space-y-6 border-t border-[#d9caec] pt-10 text-[17px] leading-8 text-[#352c40]">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <a
          className="mt-10 inline-block text-base font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4 transition-colors hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
          href={article.sourceUrl}
          rel="noreferrer"
          target="_blank"
        >
          {article.sourceLabel}
        </a>
        {article.references?.length ? (
          <section className="mt-10 border-t border-[#d9caec] pt-8">
            <h2 className="text-xl font-bold text-[#251a35]">
              Sources and further reading
            </h2>
            <ul className="mt-4 space-y-3">
              {article.references.map((reference) => (
                <li key={reference.url}>
                  <a
                    className="text-base font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4 transition-colors hover:text-[#251a35]"
                    href={reference.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {reference.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
    </main>
  );
}
