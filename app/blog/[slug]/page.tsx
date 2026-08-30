import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import { publications } from "app/publications/publication-data";

const UBC = "University of British Columbia";

function publicationFor(slug: string) {
  return publications.find((pub) => pub.slug === slug);
}

/**
 * Highwire Press tags. Google Scholar's crawler keys on these almost
 * exclusively, so without them the posts are invisible to it.
 */
function citationTags(slug: string, publishedAt: string) {
  const pub = publicationFor(slug);
  if (!pub) return {};

  const tags: Record<string, string | string[]> = {
    citation_title: pub.title,
    citation_author: pub.authors.split(",").map((name) => name.trim()),
    citation_publication_date: publishedAt.replaceAll("-", "/"),
    citation_journal_title: pub.journal,
  };
  if (pub.doi) tags.citation_doi = pub.doi;
  if (pub.abstract) tags.citation_abstract = pub.abstract;
  return tags;
}

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  // Always absolute, and always a file that exists in the static export.
  let ogImage = `${metaData.baseUrl}${image || metaData.ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${metaData.baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    other: citationTags(post.slug, publishedTime),
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  let pub = publicationFor(post.slug);

  // These posts are papers, not blog entries, so ScholarlyArticle is the
  // accurate type — and it carries the full author list and the DOI.
  let jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": pub ? "ScholarlyArticle" : "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    description: post.metadata.summary,
    image: `${metaData.baseUrl}${post.metadata.image || metaData.ogImage}`,
    url: `${metaData.baseUrl}/blog/${post.slug}`,
    author: pub
      ? pub.authors.split(",").map((name) => ({
          "@type": "Person",
          name: name.trim(),
          ...(name.trim() === metaData.name
            ? {
                affiliation: { "@type": "Organization", name: UBC },
                url: metaData.baseUrl,
              }
            : {}),
        }))
      : { "@type": "Person", name: metaData.name },
  };
  if (pub) {
    jsonLd.headline = pub.title;
    jsonLd.publication = pub.journal;
    if (pub.abstract) jsonLd.abstract = pub.abstract;
    if (pub.doi) {
      jsonLd.identifier = `https://doi.org/${pub.doi}`;
      jsonLd.sameAs = [`https://doi.org/${pub.doi}`, pub.url];
    } else {
      jsonLd.sameAs = [pub.url];
    }
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="title mb-3 font-medium text-2xl tracking-tight">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-medium">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
