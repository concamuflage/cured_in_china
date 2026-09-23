import type { Metadata } from "next";
import { createPageMetadata } from "../seo";
import { HospitalDirectory } from "./hospital-directory";

export const metadata: Metadata = createPageMetadata({
  title: "Hospital Specialty Rankings in China",
  description:
    "Browse translated 2023 Fudan hospital reputation rankings by medical specialty, with hospital names and cities.",
  path: "/hospitals",
});

/**
 * Renders the hospital specialty ranking directory and source information.
 *
 * Example: `/hospitals` opens with Pathology and lets visitors select any of
 * the 45 translated specialties from the left navigation.
 */
export default function HospitalsPage() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
          Hospitals
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-normal sm:text-5xl">
          Hospital rankings by specialty
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b3f5a]">
          Explore the top ten hospitals in each specialty from the 2023 China
          Hospital Specialty Reputation Rankings published by the Fudan
          University Hospital Management Institute.
        </p>

        <aside
          aria-label="Ranking information"
          className="my-8 border-l-4 border-[#6c3a99] bg-[#f5f0fb] px-5 py-4 text-sm leading-6 text-[#3f334d]"
        >
          Only formally ranked hospitals are included; nominated hospitals are
          excluded. Rankings reflect professional reputation and do not
          constitute a Lotus Health endorsement or a recommendation for a
          specific patient. English names are provided for convenience, with
          the original Chinese names shown for reference.
          <a
            className="ml-1 font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4"
            href="https://www.fdygs.com/news2023-1.aspx"
            rel="noopener noreferrer"
            target="_blank"
          >
            View the original ranking
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </aside>

        <HospitalDirectory />
      </section>
    </main>
  );
}
