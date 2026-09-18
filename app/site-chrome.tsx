/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors prevent the confirmed vinext production prefetch crash. */

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/blogs", label: "Blogs" },
  { href: "/news", label: "News" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const brandTagline =
  "Language barrier shouldn't make healthcare expensive.";

/**
 * Renders the supplied Lotus Health artwork as a compact horizontal lockup.
 *
 * Example: the header displays the original purple lotus beside the original
 * `Lotus Health` wordmark from `/lotus-health-logo.png`.
 */
export function BrandLogo() {
  return (
    <span className="brand-logo" aria-label="Lotus Health">
      <span className="brand-logo__art brand-logo__art--lotus" aria-hidden="true" />
      <span
        className="brand-logo__art brand-logo__art--wordmark"
        aria-hidden="true"
      />
    </span>
  );
}

/**
 * Renders the shared site header and primary navigation.
 *
 * Example: the brand lockup displays `Lotus Health` beside links to About Us,
 * Blogs, News, FAQs, and Contact.
 */
export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-[#eee8f5] bg-white">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-5"
      >
        {/* Native anchors avoid vinext's production RSC prefetch failure. */}
        <a className="min-w-0" href="/">
          <BrandLogo />
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-[#5d4d70] lg:flex">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <details className="mobile-nav lg:hidden">
          <summary
            aria-label="Open navigation menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center text-[#4f2478]"
          >
            <span className="sr-only">Open navigation menu</span>
            <span className="mobile-nav__icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </summary>
          <div className="absolute right-4 top-[calc(100%+1px)] w-[min(260px,calc(100vw-2rem))] border border-[#e8def8] bg-white p-2 shadow-[0_14px_35px_rgba(37,26,53,0.14)] sm:right-5">
            {navItems.map((item) => (
              <a
                className="block px-4 py-3 text-base font-semibold text-[#4f2478] hover:bg-[#f5f0fb] hover:text-[#251a35]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}

/**
 * Renders the shared footer with the brand slogan.
 *
 * Example: `/faqs` ends with `Language barrier shouldn't make healthcare
 * expensive.` centered in the footer.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-[#e8def8] bg-[#251a35] px-5 py-4 text-white">
      <div className="mx-auto flex max-w-6xl justify-center">
        <p className="text-center text-base font-semibold leading-7 text-[#d9caec]">
          {brandTagline}
        </p>
      </div>
    </footer>
  );
}
