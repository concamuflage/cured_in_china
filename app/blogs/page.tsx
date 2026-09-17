import type { Metadata } from "next";
import { blogPosts } from "../site-data";
import { BlogFilter } from "./blog-filter";

export const metadata: Metadata = {
  title: "Blogs | Lotus Health",
  description:
    "Patient planning articles for Americans considering affordable medical treatment in China.",
};

/**
 * Renders the standalone Blogs page.
 *
 * Example: `/blogs` uses the topic rail to filter the visible collapsed blog
 * cards, such as showing only `Healthcare Comparison` posts.
 */
export default function BlogsPage() {
  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <BlogFilter posts={blogPosts} />
        </div>
      </section>
    </main>
  );
}
