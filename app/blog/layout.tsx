import { GeistMono } from "geist/font/mono";

// Scoped here rather than to the root layout: monospace is only used by code
// blocks and figure captions inside posts, so other routes shouldn't preload it.
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={GeistMono.variable}>{children}</div>;
}
