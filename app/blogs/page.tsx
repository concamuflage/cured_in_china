import type { Metadata } from "next";
import { createPageMetadata } from "../seo";
import { blogPosts } from "../site-data";
import { BlogFilter } from "./blog-filter";

export const metadata: Metadata = createPageMetadata({
  title: "Medical Treatment in China Blog",
  description:
    "Practical articles about China's healthcare system, language support, patient experiences, and medical care for Americans considering treatment in China.",
  path: "/blogs",
});

/**
 * Renders the standalone Blogs page.
 *
 * Example: `/blogs` uses the topic rail to filter linked blog cards, such as
 * showing only `Healthcare Comparison` posts.
 */
export default function BlogsPage() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="sr-only">Medical Treatment in China Blog</h1>
          <BlogFilter posts={blogPosts} />
        </div>
      </section>
    </main>
  );
}
