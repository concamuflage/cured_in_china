"use client";

import { useMemo, useState } from "react";

type BlogPost = {
  category: string;
  topic: string;
  title: string;
  excerpt: string;
  images?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  sourceLabel?: string;
  sourceUrl?: string;
  body: string[];
};

type BlogFilterProps = {
  posts: BlogPost[];
};

/**
 * Renders filterable blog topic navigation with collapsed article cards.
 *
 * Example: clicking `Patient Experiences` hides unrelated posts and shows the
 * article with Reddit screenshots and a source link.
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
          <details
            className="blog-accordion rounded-[8px] border border-[#e8def8] bg-white p-5"
            key={post.title}
          >
            <summary className="cursor-pointer list-none">
              <span className="block text-xl font-bold leading-7 text-[#251a35]">
                {post.title}
              </span>
              {post.excerpt ? (
                <span className="mt-4 block text-sm leading-6 text-[#625371]">
                  {post.excerpt}
                </span>
              ) : null}
            </summary>
            <div className="mt-5 space-y-4 border-t border-[#e8def8] pt-5">
              {post.images?.map((image) => (
                <figure
                  className="rounded-[8px] border border-[#e8def8] bg-white p-3"
                  key={image.src}
                >
                  <img
                    alt={image.alt}
                    className="w-full rounded-[8px] border border-[#efe7f8]"
                    src={image.src}
                  />
                  <figcaption className="mt-3 text-sm leading-6 text-[#625371]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
              {post.body.map((paragraph) => (
                <p className="text-sm leading-7 text-[#5d4d70]" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {post.sourceUrl ? (
                <p className="pt-2 text-sm font-semibold">
                  <a className="text-[#5b2c83] underline" href={post.sourceUrl}>
                    Source: {post.sourceLabel ?? post.sourceUrl}
                  </a>
                </p>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
