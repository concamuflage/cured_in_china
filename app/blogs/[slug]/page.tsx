/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors avoid the confirmed vinext production prefetch crash. */

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createPageMetadata } from "../../seo";
import { blogPosts, type BlogPost } from "../../site-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

type Comparison = NonNullable<BlogPost["comparison"]>;
type PriceComparison = NonNullable<BlogPost["priceComparison"]>;

/**
 * Renders China and United States healthcare details in parallel sections.
 *
 * Example: `Payment timing` places China's prepayment model beside the U.S.
 * insurance billing model on desktop and stacks the columns on small screens.
 */
function HealthcareComparison({ comparison }: { comparison: Comparison }) {
  return (
    <div className="space-y-6">
      <p className="text-[17px] leading-8 text-[#352c40]">{comparison.intro}</p>
      {comparison.sections.map((section) => (
        <section
          className="overflow-hidden rounded-[8px] border border-[#d9caec]"
          key={section.title}
        >
          <h2 className="bg-[#f5f0fb] px-5 py-4 text-xl font-bold text-[#251a35]">
            {section.title}
          </h2>
          <div className="grid md:grid-cols-2">
            <div className="px-5 py-5">
              <h3 className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
                China
              </h3>
              <div className="mt-3 space-y-3">
                {section.china.map((paragraph) => (
                  <p className="text-base leading-7 text-[#352c40]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="border-t border-[#e8def8] px-5 py-5 md:border-l md:border-t-0">
              <h3 className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
                United States
              </h3>
              <div className="mt-3 space-y-3">
                {section.unitedStates.map((paragraph) => (
                  <p className="text-base leading-7 text-[#352c40]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      <p className="text-sm leading-7 text-[#625371]">{comparison.note}</p>
      <p className="text-[17px] font-semibold leading-8 text-[#251a35]">
        {comparison.conclusion}
      </p>
    </div>
  );
}

/**
 * Renders treatment prices in a three-column China and U.S. comparison table.
 *
 * Example: the `Routine adult cleaning` row highlights `About $14` beside the
 * `$111 average` U.S. fee.
 */
function DentalPriceComparison({
  comparison,
}: {
  comparison: PriceComparison;
}) {
  return (
    <div className="space-y-5">
      <p className="text-base leading-7 text-[#4b3f5a]">{comparison.intro}</p>
      <div className="overflow-hidden rounded-[8px] border border-[#d9caec]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead className="bg-[#5b2c83] text-white">
              <tr>
                <th className="w-[30%] px-5 py-4 text-sm font-bold" scope="col">
                  Treatment
                </th>
                <th className="w-[35%] px-5 py-4 text-sm font-bold" scope="col">
                  China
                </th>
                <th className="w-[35%] px-5 py-4 text-sm font-bold" scope="col">
                  USA
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8def8] bg-white">
              {comparison.rows.map((row) => (
                <tr key={row.treatment}>
                  <th
                    className="px-5 py-5 align-top text-base font-bold text-[#251a35]"
                    scope="row"
                  >
                    {row.treatment}
                  </th>
                  <td className="bg-[#fbf9ff] px-5 py-5 align-top">
                    <strong className="block text-xl font-bold leading-7 text-[#4f2478]">
                      {row.chinaPrice}
                    </strong>
                    <span className="mt-1 block text-xs leading-5 text-[#756780]">
                      {row.chinaDetail}
                    </span>
                  </td>
                  <td className="px-5 py-5 align-top">
                    <strong className="block text-xl font-bold leading-7 text-[#4f2478]">
                      {row.usaPrice}
                    </strong>
                    <span className="mt-1 block text-xs leading-5 text-[#756780]">
                      {row.usaDetail}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <details className="border-t border-[#e8def8] bg-[#fbf9ff] px-5 py-4">
          <summary className="cursor-pointer text-sm font-semibold text-[#5d4d70]">
            About these prices
          </summary>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-[#625371]">
            {comparison.note}
          </p>
        </details>
      </div>
      <p className="text-sm leading-6 text-[#625371]">
        {comparison.conclusion}
      </p>
    </div>
  );
}

/**
 * Returns every blog slug for static generation.
 *
 * Example: the language article produces `{ slug: "overcome-language-barrier-in-china" }`.
 */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/**
 * Builds page-specific search and sharing metadata for a blog article.
 *
 * Example: the healthcare comparison page receives its article title and
 * `/blogs/american-chinese-healthcare-differences` canonical path.
 */
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((candidate) => candidate.slug === slug);

  if (!post) {
    return {};
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt || `Read ${post.title} on Lotus Health.`,
    path: `/blogs/${post.slug}`,
  });
}

/**
 * Renders one complete blog article on its own white reading page.
 *
 * Example: `/blogs/public-private-international-hospitals-china` displays the
 * full hospital-system article instead of expanding it within the blog list.
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((candidate) => candidate.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 bg-white text-[#251a35]">
      <article
        className={
          post.comparison || post.priceComparison
            ? "mx-auto w-full max-w-5xl px-5 py-16"
            : "mx-auto w-full max-w-3xl px-5 py-16"
        }
      >
        <a
          className="text-sm font-semibold text-[#6c3a99] underline decoration-[#bca7d4] underline-offset-4"
          href="/blogs"
        >
          Back to Blogs
        </a>
        <p className="mt-8 text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
          {post.topic}
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
          {post.title}
        </h1>
        {post.excerpt ? (
          <p className="mt-5 text-xl leading-8 text-[#4b3f5a]">
            {post.excerpt}
          </p>
        ) : null}

        <div className="mt-10 space-y-6 border-t border-[#d9caec] pt-10">
          {post.comparison ? (
            <HealthcareComparison comparison={post.comparison} />
          ) : null}
          {post.priceComparison ? (
            <DentalPriceComparison comparison={post.priceComparison} />
          ) : null}
          {post.images?.map((image) => (
            <figure
              className="rounded-[8px] border border-[#e8def8] bg-white p-3"
              key={image.src}
            >
              <Image
                alt={image.alt}
                className="h-auto w-full rounded-[8px] border border-[#efe7f8]"
                height={image.height}
                sizes="(min-width: 768px) 728px, calc(100vw - 64px)"
                src={image.src}
                width={image.width}
              />
              <figcaption className="mt-3 text-sm leading-6 text-[#625371]">
                {image.caption}
              </figcaption>
            </figure>
          ))}
          {post.body.map((paragraph) => (
            <p className="text-[17px] leading-8 text-[#352c40]" key={paragraph}>
              {paragraph}
            </p>
          ))}
          {post.sourceUrl ? (
            <p className="pt-2 text-sm font-semibold">
              <a
                className="text-[#5b2c83] underline"
                href={post.sourceUrl}
                rel="noreferrer"
                target="_blank"
              >
                Source: {post.sourceLabel ?? post.sourceUrl}
              </a>
            </p>
          ) : null}
          {post.sources?.length ? (
            <section className="pt-2">
              <h2 className="text-lg font-bold text-[#251a35]">Sources</h2>
              <ul className="mt-3 space-y-2">
                {post.sources.map((source) => (
                  <li className="text-sm font-semibold" key={source.url}>
                    <a
                      className="text-[#5b2c83] underline decoration-[#bca7d4] underline-offset-4"
                      href={source.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {source.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>
    </main>
  );
}
