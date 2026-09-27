import type { Metadata } from "next";
import { createPageMetadata } from "../seo";
import { HospitalDirectory } from "./hospital-directory";

export const metadata: Metadata = createPageMetadata({
  title: "Hospital Rankings in China",
  description:
    "Browse translated 2023 Fudan overall and specialty hospital rankings, with official English hospital names and cities.",
  path: "/hospitals",
});

/**
 * Renders the overall and specialty hospital ranking directory.
 *
 * Example: `/hospitals` opens the five-grade overall ranking and also lets
 * visitors browse 45 translated specialty rankings.
 */
export default function HospitalsPage() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
          Hospitals
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-normal sm:text-5xl">
          Hospital rankings in China
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4b3f5a]">
          Explore the 2023 China Hospital Overall Ranking and the top ten
          hospitals in each specialty, published by the Fudan University
          Hospital Management Institute.
        </p>

        <aside
          aria-label="Ranking information"
          className="my-8 border-l-4 border-[#6c3a99] bg-[#f5f0fb] px-5 py-4 text-sm leading-6 text-[#3f334d]"
        >
          Hospitals in the same overall grade are not ordered against one
          another. Only formally ranked specialty hospitals are included;
          nominated hospitals are excluded. Rankings do not constitute a Lotus
          Health endorsement or a recommendation for a specific patient.
          <a
            className="ml-1 font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4"
            href="https://www.fdygs.com/news2023-2.aspx"
            rel="noopener noreferrer"
            target="_blank"
          >
            View the original overall ranking
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <span aria-hidden="true"> · </span>
          <a
            className="font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4"
            href="https://www.fdygs.com/news2023-1.aspx"
            rel="noopener noreferrer"
            target="_blank"
          >
            View the original specialty ranking
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </aside>

        <HospitalDirectory />
      </section>
    </main>
  );
}
