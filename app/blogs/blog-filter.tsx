"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "../site-data";

type BlogFilterProps = {
  posts: BlogPost[];
};

/**
 * Renders filterable blog topic navigation with links to article pages.
 *
 * Example: clicking `Patient Experiences` hides unrelated posts and shows the
 * card linking to `/blogs/patient-experiences-medical-trips-to-china`.
 */
export function BlogFilter({ posts }: BlogFilterProps) {
  const allTopicsLabel = "All Topics";
  const [activeTopic, setActiveTopic] = useState(allTopicsLabel);
  const topics = useMemo(
    () => [allTopicsLabel, ...Array.from(new Set(posts.map((post) => post.topic)))],
    [posts],
  );
  const visiblePosts =
    activeTopic === allTopicsLabel
      ? posts
      : posts.filter((post) => post.topic === activeTopic);

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <nav
          aria-label="Blog topics"
          className="flex gap-2 overflow-x-auto rounded-[8px] border border-[#e8def8] bg-[#fbf9ff] p-3 lg:flex-col lg:overflow-visible"
        >
          {topics.map((topic) => {
            const isActive = topic === activeTopic;

            return (
              <button
                aria-pressed={isActive}
                className={
                  isActive
                    ? "whitespace-nowrap rounded-[8px] bg-[#5b2c83] px-4 py-3 text-left text-sm font-bold text-white"
                    : "whitespace-nowrap rounded-[8px] px-4 py-3 text-left text-sm font-semibold text-[#5d4d70] hover:bg-white hover:text-[#4b217c]"
                }
                key={topic}
                onClick={() => setActiveTopic(topic)}
                type="button"
              >
                {topic}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="space-y-5">
        {visiblePosts.map((post) => (
          <article
            className="rounded-[8px] border border-[#e8def8] bg-white p-5"
            key={post.slug}
          >
            <h2 className="text-xl font-bold leading-7 text-[#251a35]">
              <a
                className="hover:text-[#5b2c83] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6c3a99]"
                href={`/blogs/${post.slug}`}
              >
                {post.title}
              </a>
            </h2>
            {post.excerpt ? (
              <p className="mt-4 text-sm leading-6 text-[#625371]">
                {post.excerpt}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
