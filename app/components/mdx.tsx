import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { TweetComponent } from "./tweet";
import { LinkedInComponent } from "./linkedin";
import { CaptionComponent } from "./caption";
import { YouTubeComponent } from "./youtube";
import { ImageGrid } from "./image-grid";

function CustomLink(props) {
  let href = props.href;
  if (typeof href !== "string") {
    // e.g. <a name="fig1"> used as an anchor target — render it as-is.
    return <a {...props} />;
  }
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// Pairs an image with its caption inside a real <figure>/<figcaption>, so the
// two are programmatically associated rather than merely adjacent.
function Figure({
  src,
  alt,
  caption,
  width = 800,
  height = 400,
  ...props
}) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 640px) 100vw, 640px"
        className="rounded-lg w-full h-auto"
        style={{ backgroundColor: "white" }}
        {...props}
      />
      {caption ? (
        <figcaption className="block w-full text-xs mt-3 font-mono text-gray-600 dark:text-gray-400 text-center leading-normal">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr className="text-left">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function Strikethrough(props) {
  return <del {...props} />;
}

function Callout(props) {
  return (
    <div className="px-4 py-3 bg-[#F7F7F7] dark:bg-[#181818] rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout leading-relaxed">{props.children}</div>
    </div>
  );
}

// MDX passes heading children as a node array when the heading contains any
// formatting, so flatten to text before slugifying rather than calling
// toString() on the array (which yields "[object Object]").
function toPlainText(node): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toPlainText).join("");
  if (React.isValidElement(node)) {
    return toPlainText((node.props as { children?: React.ReactNode }).children);
  }
  return "";
}

let headingIds = 0;

function slugify(str) {
  const slug = toPlainText(str)
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    // Strip combining marks so "Résumé" slugs as "resume" rather than "rsum".
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, "-and-")
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
  // A fully non-alphanumeric heading would otherwise emit id="" and href="#".
  return slug || `section-${++headingIds}`;
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      React.createElement("a", {
        href: `#${slug}`,
        key: `link-${slug}`,
        className: "anchor",
      }),
      children
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  Figure,
  ImageGrid,
  a: CustomLink,
  StaticTweet: TweetComponent,
  StaticLinkedIn: LinkedInComponent,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  code: Code,
  Table,
  del: Strikethrough,
  Callout,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
