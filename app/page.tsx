import type { Metadata } from "next";
import { AboutContent } from "./about-content";
import { brandTagline } from "./site-chrome";

export const metadata: Metadata = {
  title: "Lotus Health | Affordable Treatment in China",
  description: `${brandTagline} Patient-centered care coordination for Americans seeking affordable treatment options in China.`,
};

/**
 * Renders the Lotus Health home page with the About Us story as its index.
 *
 * Example: visiting `/` shows the same founder story and education-cost
 * comparison that appears on `/about`.
 */
export default function Home() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <AboutContent />
    </main>
  );
}
