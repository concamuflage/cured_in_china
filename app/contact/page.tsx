import type { Metadata } from "next";
import { LinkedInLink } from "../linkedin-link";
import { createPageMetadata } from "../seo";
import { EmailReveal } from "./email-reveal";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Lotus Health",
  description:
    "Contact Lotus Health with questions about healthcare, language support, and treatment options in China.",
  path: "/contact",
});

/**
 * Renders the standalone Contact page with an email reveal control.
 *
 * Example: selecting `Reveal email` displays the address and a link that opens
 * the visitor's email application.
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
            reveal our email address to get in touch.
          </p>
          <EmailReveal />
          <div className="mt-5">
            <LinkedInLink />
          </div>
        </div>
      </section>
    </main>
  );
}
