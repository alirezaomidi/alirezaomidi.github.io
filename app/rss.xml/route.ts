import { getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";

// A static export can't run route handlers on demand, so this is prerendered
// once at build time into out/rss.xml.
export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(
    /[<>&'"]/g,
    (c) =>
      ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[
        c
      ]!)
  );
}

export async function GET() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const items = posts
    .map((post) => {
      const link = `${metaData.baseUrl}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.metadata.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(post.metadata.summary ?? "")}</description>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(metaData.title)}</title>
    <link>${metaData.baseUrl}</link>
    <description>${escapeXml(metaData.description)}</description>
    <language>en-us</language>
    <atom:link href="${metaData.baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
