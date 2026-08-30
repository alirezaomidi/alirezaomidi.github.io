import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";

export const metadata = {
  title: "Blog",
  description: "Alireza Omidi's Blog",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog",
    description: "Alireza Omidi's Blog",
    url: `${metaData.baseUrl}/blog`,
  },
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Blog</h1>
      <ul className="flex flex-col space-y-4 list-none p-0">
        {allBlogs
          // Returns 0 for equal dates, so posts sharing a date keep a stable
          // order across builds instead of an engine-dependent one.
          .sort(
            (a, b) =>
              new Date(b.metadata.publishedAt).getTime() -
              new Date(a.metadata.publishedAt).getTime()
          )
          .map((post) => (
            <li key={post.slug}>
              <Link
                className="group transition-opacity duration-200 hover:opacity-80"
                href={`/blog/${post.slug}`}
              >
                <div className="flex justify-between items-baseline gap-8">
                  <p className="text-black dark:text-white tracking-tight group-hover:underline decoration-neutral-400 dark:decoration-neutral-600">
                    {post.metadata.title}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm shrink-0">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
