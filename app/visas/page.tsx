import type { Metadata } from "next";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "China Visas for American Medical Travelers",
  description:
    "Understand which Chinese visa American patients and accompanying family members may need when traveling to mainland China for medical treatment.",
  path: "/visas",
});

/**
 * Renders current visa-planning guidance for U.S. patients visiting mainland
 * China for treatment.
 *
 * Example: a patient planning a 30-day hospital visit is directed to confirm
 * S2 eligibility, while a stay over 180 days points the patient to S1 guidance.
 */
export default function VisasPage() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
          Visas
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-normal sm:text-5xl">
          Visas for Americans seeking care in China
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#3f334d]">
          U.S. passport holders generally need an appropriate Chinese visa
          before traveling to mainland China. When medical treatment is the
          main purpose of the trip, confirm the correct category with the
          Chinese embassy or consulate responsible for where you live.
        </p>

        <section className="mt-10" aria-labelledby="visa-options-heading">
          <h2
            className="text-2xl font-bold tracking-normal"
            id="visa-options-heading"
          >
            Which visa should you ask about?
          </h2>
          <ul className="mt-5 w-full divide-y divide-[#e8def8] border-y border-[#d9caec]">
            <li className="py-6">
              <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
                Short-term private affairs
              </p>
              <h3 className="mt-2 text-2xl font-bold">S2 visa</h3>
              <p className="mt-3 text-base leading-7 text-[#3f334d]">
                S2 covers{" "}
                <strong className="font-bold text-[#4f2478]">
                  short-term private affairs
                </strong>{" "}
                for an intended stay of no more than 180 days. {" "}
                <strong className="font-bold text-[#4f2478]">
                  Chinese missions&apos; published instructions include medical
                  treatment and accompanying a patient within this category.
                </strong>{" "}
                The 180-day figure describes the S2 category, not a guaranteed
                length of stay. The visa issued and the entry decision
                determine how long a traveler may remain.
              </p>
            </li>

            <li className="py-6">
              <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
                Long-term private affairs
              </p>
              <h3 className="mt-2 text-2xl font-bold">S1 visa</h3>
              <p className="mt-3 text-base leading-7 text-[#3f334d]">
                S1 covers other private affairs when the intended stay in China
                exceeds 180 days. For a long medical treatment plan, contact
                the Chinese embassy or consulate before applying to confirm
                whether S1 is appropriate and which supporting documents are
                required.
              </p>
            </li>

            <li className="py-6">
              <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
                Tourism
              </p>
              <h3 className="mt-2 text-2xl font-bold">L visa</h3>
              <p className="mt-3 text-base leading-7 text-[#3f334d]">
                An L visa is issued for tourism. If treatment is the primary
                reason for the trip, do not assume that a tourist visa is the
                right category. Describe the trip accurately and ask the
                consular office whether an S2 application is required.
              </p>
            </li>

            <li className="py-6">
              <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
                Transit
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Visa-free transit is limited
              </h3>
              <p className="mt-3 text-base leading-7 text-[#3f334d]">
                Eligible Americans may use China&apos;s 240-hour visa-free transit
                policy only when traveling through China to a third country or
                region with a confirmed onward ticket and while remaining
                within the permitted areas. It is not a dependable substitute
                for the correct visa when treatment is the purpose of the trip
                or the recovery timeline is uncertain.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-12 border-t border-[#e8def8] pt-8">
          <h2 className="text-2xl font-bold">Official information</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-base">
            <li>
              <a
              className="font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4 hover:text-[#251a35]"
              href="https://us.china-embassy.gov.cn/eng/lsfw/zj/notice/202509/t20250920_11712385.htm"
              rel="noopener noreferrer"
              target="_blank"
            >
              Chinese Embassy visa requirements
              <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
              className="font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4 hover:text-[#251a35]"
              href="https://consular.mfa.gov.cn/VISA/"
              rel="noopener noreferrer"
              target="_blank"
            >
              China online visa application
              <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
              className="font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4 hover:text-[#251a35]"
              href="https://en.nia.gov.cn/n147418/n147463/c183412/content.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              China immigration transit rules
              <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
              className="font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4 hover:text-[#251a35]"
              href="https://travel.state.gov/en/international-travel/travel-advisories/china.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              U.S. travel information for China
              <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
