import type { Metadata } from "next";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQs",
  description:
    "Questions and answers about Lotus Health and exploring treatment options in China.",
  path: "/faqs",
  index: false,
});

/**
 * Renders the standalone FAQs page without placeholder questions.
 *
 * Example: `/faqs` can later show patient questions after they are written
 * specifically for Lotus Health.
 */
export default function FaqsPage() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
            FAQs
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            Clear answers before you take the next step
          </h1>
        </div>
      </section>
    </main>
  );
}
