const linkedinUrl = "https://www.linkedin.com/in/liangmi-z-35106a31/";

/**
 * Renders the founder's LinkedIn profile as an accessible icon link.
 *
 * Example: selecting the LinkedIn icon opens Liangmi Z's profile in a new
 * browser tab.
 */
export function LinkedInLink() {
  return (
    <a
      aria-label="Visit Liangmi Z's LinkedIn profile"
      className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] bg-[#5b2c83] text-white transition-colors hover:bg-[#4b217c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
      href={linkedinUrl}
      rel="noopener noreferrer"
      target="_blank"
      title="LinkedIn profile"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
      </svg>
      <span className="sr-only">LinkedIn profile</span>
    </a>
  );
}
