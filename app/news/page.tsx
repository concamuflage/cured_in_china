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
 * Example: selecting the RNZ cancer-treatment story opens the original RNZ
 * report, while the Wall Street Journal story opens its complete on-site entry.
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
            <a
              className="block border-b border-[#d9caec] py-6 text-[#4f2478] transition-colors hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
              href="https://www.japantimes.co.jp/news/2026/06/11/asia-pacific/china-medical-tourism-health/"
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="text-xl font-semibold leading-8">
                China Lures Foreign Patients With Cutting-Edge, Cheap Medical
                Care
              </h2>
              <p className="mt-2 text-base leading-7 text-[#4b3f5a]">
                China is distinguishing itself from established medical-tourism
                destinations through advanced procedures offered at lower costs.
                Reported by The Japan Times.
              </p>
            </a>
            <a
              className="block border-b border-[#d9caec] py-6 text-[#4f2478] transition-colors hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
              href="https://www.rnz.co.nz/news/health/573472/the-fly-in-fly-out-cancer-patients-spending-hundreds-of-thousands-on-cutting-edge-therapy"
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="text-xl font-semibold leading-8">
                The &apos;Fly In, Fly Out&apos; Cancer Patients Spending Hundreds
                of Thousands on Cutting-Edge Therapy
              </h2>
              <p className="mt-2 text-base leading-7 text-[#4b3f5a]">
                New Zealand cancer patients describe traveling to China for
                advanced CAR-T therapy when their options at home were limited.
                Reported by RNZ.
              </p>
            </a>
            <a
              className="block border-b border-[#d9caec] py-6 text-[#4f2478] transition-colors hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
              href="https://www.mirror.co.uk/news/real-life-stories/nhs-waiting-list-china-tiktok-36283474"
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="text-xl font-semibold leading-8">
                I&apos;m Flying to China for Treatment Instead of Using the NHS
              </h2>
              <p className="mt-2 text-base leading-7 text-[#4b3f5a]">
                A British woman says long waits led her to consider seeking
                faster medical treatment in China. Reported by The Mirror.
              </p>
            </a>
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
