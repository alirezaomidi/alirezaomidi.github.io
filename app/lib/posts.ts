import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string;
  image?: string;
};

const REQUIRED_KEYS = ["title", "publishedAt", "summary"] as const;

function parseFrontmatter(fileContent: string, filePath: string) {
  // Anchored to the start of the file so a `---` used as a horizontal rule in
  // the body is never mistaken for the frontmatter block.
  let frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*(\n|$)/;
  let match = frontmatterRegex.exec(fileContent);
  if (!match) {
    throw new Error(
      `Missing frontmatter in ${filePath}: expected a '---' block at the top of the file.`
    );
  }
  let frontMatterBlock = match[1];
  let content = fileContent.slice(match[0].length).trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let separator = line.indexOf(":");
    if (separator === -1) {
      throw new Error(
        `Malformed frontmatter line in ${filePath}: ${JSON.stringify(line)}`
      );
    }
    let key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key as keyof Metadata] = value;
  });

  for (const key of REQUIRED_KEYS) {
    if (!metadata[key]) {
      throw new Error(`Missing required frontmatter key '${key}' in ${filePath}`);
    }
  }

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent, path.relative(process.cwd(), filePath));
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content"));
}

export function formatDate(date: string | undefined, includeRelative = false) {
  if (!date) {
    return "No date";
  }
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  // Compare against a single elapsed duration; subtracting calendar fields
  // independently reports e.g. "1y ago" for a post eight days old.
  let elapsedDays = Math.floor(
    (currentDate.getTime() - targetDate.getTime()) / 86_400_000
  );

  let formattedDate = "";

  if (elapsedDays < 0) {
    formattedDate = "Scheduled";
  } else if (elapsedDays >= 365) {
    formattedDate = `${Math.floor(elapsedDays / 365)}y ago`;
  } else if (elapsedDays >= 30) {
    formattedDate = `${Math.floor(elapsedDays / 30)}mo ago`;
  } else if (elapsedDays > 0) {
    formattedDate = `${elapsedDays}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
