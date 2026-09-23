import type { Metadata } from "next";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Healthcare Resources in China",
  description:
    "Independent healthcare resources for patients researching treatment options and prices in China.",
  path: "/resources",
});

/**
 * Renders the Resources page with topic navigation and independent links.
 *
 * Example: selecting `Hospitals` moves the visitor to providers grouped by
 * specialty, while `Dental` moves to the external price-list resource.
 */
export default function ResourcesPage() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
          Resources
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
          Healthcare resources in China
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b3f5a]">
          Use these independent resources as a starting point when researching
          providers, services, and published prices in China.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <nav
              aria-label="Resource topics"
              className="flex gap-2 overflow-x-auto rounded-[8px] border border-[#e8def8] bg-[#fbf9ff] p-3 lg:flex-col lg:overflow-visible"
            >
              <a
                className="whitespace-nowrap rounded-[8px] bg-[#5b2c83] px-4 py-3 text-left text-sm font-bold text-white"
                href="#hospitals"
              >
                Hospitals
              </a>
              <a
                className="whitespace-nowrap rounded-[8px] px-4 py-3 text-left text-sm font-semibold text-[#5d4d70] hover:bg-white hover:text-[#4b217c]"
                href="#dental"
              >
                Dental
              </a>
            </nav>
          </aside>

          <div className="space-y-6">
            <aside
              aria-label="Resource disclaimer"
              className="border-l-4 border-[#6c3a99] bg-[#f5f0fb] px-5 py-4 text-base leading-7 text-[#3f334d]"
            >
              Resources listed on this page are provided for general
              informational purposes. Their inclusion does not mean that Lotus
              Health has verified, recommended, or endorsed the provider,
              service, pricing, or information presented.
            </aside>

            <section
              className="scroll-mt-6 rounded-[8px] border border-[#e8def8] bg-white p-6"
              id="hospitals"
            >
              <h2 className="text-2xl font-bold tracking-normal text-[#251a35]">
                Hospitals
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#4b3f5a]">
                Browse hospitals and healthcare networks by specialties they
                identify as areas of focus. Always confirm whether a provider
                is appropriate for your diagnosis and treatment needs.
              </p>

              <div className="mt-6 border-t border-[#e8def8] pt-5">
                <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
                  CAR-T Cell Therapy
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#251a35]">
                  SinoUnited Health, Shanghai
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-[#4b3f5a]">
                  According to its international website, SinoUnited Health
                  offers CAR-T cell therapy and identifies hematology and
                  oncology among its flagship specialties. Confirm eligibility,
                  the proposed treatment protocol, total cost, and follow-up
                  requirements directly with its clinical team.
                </p>
                <a
                  className="mt-5 inline-flex items-center rounded-[6px] border border-[#6c3a99] px-4 py-3 text-base font-semibold text-[#4f2478] transition-colors hover:bg-[#f5f0fb] hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
                  href="https://www.suhhealth.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit SinoUnited Health
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </section>

            <section
              className="scroll-mt-6 rounded-[8px] border border-[#e8def8] bg-white p-6"
              id="dental"
            >
              <h2 className="text-2xl font-bold tracking-normal text-[#251a35]">
                Dental
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[#4b3f5a]">
                Review a published price list for dental services in Beijing.
                Prices and availability may change, so confirm all details
                directly with the provider before making decisions.
              </p>
              <a
                className="mt-5 inline-flex items-center rounded-[6px] border border-[#6c3a99] px-4 py-3 text-base font-semibold text-[#4f2478] transition-colors hover:bg-[#f5f0fb] hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
                href="https://www.dentalbeijing.com/prices/"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Dental Beijing prices
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
