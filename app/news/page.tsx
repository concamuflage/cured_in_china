import type { Metadata } from "next";
import { createPageMetadata } from "../seo";
import { cancerTreatmentNews } from "./news-data";

export const metadata: Metadata = createPageMetadata({
  title: "Healthcare in China News",
  description:
    "Healthcare news for Americans following medical treatment, hospital innovation, and patient care developments in China.",
  path: "/news",
});

/**
 * Renders the standalone News page with links to relevant external reporting.
 *
 * Example: selecting `Patients Are Flying to China for the Latest Cancer
 * Treatment` opens the complete on-site news entry.
 */
export default function NewsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#251a35]">
      <section className="mx-auto flex w-full max-w-6xl flex-1 px-5 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
            News
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            Healthcare news and updates
          </h1>
          <div className="mt-8 border-t border-[#d9caec]">
            {/* Use a full page load because vinext RSC prefetch fails in production. */}
            <a
              className="block border-b border-[#d9caec] py-6 text-[#4f2478] transition-colors hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
              href={`/news/${cancerTreatmentNews.slug}`}
            >
              <h2 className="text-xl font-semibold leading-8">
                {cancerTreatmentNews.title}
              </h2>
              <p className="mt-2 text-base leading-7 text-[#4b3f5a]">
                {cancerTreatmentNews.subtitle}
              </p>
            </a>
            <a
              className="block border-b border-[#d9caec] py-6 text-xl font-semibold leading-8 text-[#4f2478] transition-colors hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
              href="https://www.youtube.com/watch?v=7xURh6Z0HvM"
              rel="noreferrer"
              target="_blank"
            >
              Brisbane boy flown to China for brain surgery
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
