import { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";
import { metaData } from "./config";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts = getBlogPosts();

  let blogs = posts.map((post) => ({
    url: `${BaseUrl}blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  // Derived from the newest post so these don't claim to change on every deploy.
  let lastContentUpdate = posts
    .map((post) => post.metadata.publishedAt)
    .sort()
    .at(-1)!;

  let routes = [
    { path: "", priority: 1.0 },
    { path: "publications", priority: 0.9 },
    { path: "blog", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${BaseUrl}${path}`,
    lastModified: lastContentUpdate,
    changeFrequency: "monthly" as const,
    priority,
  }));

  return [...routes, ...blogs];
}
