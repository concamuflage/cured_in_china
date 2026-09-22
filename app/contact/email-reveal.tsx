"use client";

import { useState } from "react";

const localPart = "lotus.health";
const domain = "outlook.com";

/**
 * Reveals the contact address only after a visitor requests it.
 *
 * Example: the initial state shows `Reveal email`; after activation, it shows
 * the assembled address and makes it available as an email link.
 */
export function EmailReveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  // Character code 64 keeps a complete scrape-ready address out of initial HTML.
  const address = isRevealed
    ? [localPart, domain].join(String.fromCharCode(64))
    : "";

  if (!isRevealed) {
    return (
      <button
        className="mt-5 rounded-[8px] bg-[#5b2c83] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#4b217c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
        onClick={() => setIsRevealed(true)}
        type="button"
      >
        Reveal email
      </button>
    );
  }

  return (
    <div aria-live="polite" className="mt-5">
      <a
        className="inline-block text-xl font-semibold text-[#4f2478] underline decoration-[#bca7d4] underline-offset-4 transition-colors hover:text-[#251a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
        href={`mailto:${address}`}
      >
        {address}
      </a>
    </div>
  );
}
