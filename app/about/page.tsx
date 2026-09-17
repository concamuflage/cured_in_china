import type { Metadata } from "next";
import { AboutContent } from "../about-content";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn why Lotus Health helps Americans overcome language barriers and compare affordable treatment options in China.",
  path: "/about",
  canonicalPath: "/",
});

/**
 * Renders the standalone About Us page.
 *
 * Example: `/about` shares the founder's Boston University experience and why
 * Lotus Health helps patients overcome language and cost barriers.
 */
export default function AboutPage() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <AboutContent />
    </main>
  );
}
