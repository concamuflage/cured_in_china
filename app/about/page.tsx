import type { Metadata } from "next";
import { AboutContent } from "../about-content";

export const metadata: Metadata = {
  title: "About Us | Lotus Health",
  description:
    "Learn why Lotus Health helps Americans overcome language barriers and compare affordable treatment options in China.",
};

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
