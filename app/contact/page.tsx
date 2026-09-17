import type { Metadata } from "next";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Lotus Health",
  description:
    "Contact Lotus Health with questions about healthcare, language support, and treatment options in China.",
  path: "/contact",
});

/**
 * Renders the standalone Contact page with a direct email link.
 *
 * Example: selecting `lotus.health@outlook.com` opens the visitor's email app
 * with the Lotus Health address already filled in.
 */
export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#251a35]">
      <section className="mx-auto flex w-full max-w-6xl flex-1 px-5 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            Contact Lotus Health
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#4b3f5a]">
            For questions about healthcare and treatment options in China,
            email us at:
          </p>
          <a
            className="mt-5 inline-block text-xl font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4 transition-colors hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
            href="mailto:lotus.health@outlook.com"
          >
            lotus.health@outlook.com
          </a>
        </div>
      </section>
    </main>
  );
}
