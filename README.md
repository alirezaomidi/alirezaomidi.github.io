# alirezaomidi.github.io

Personal academic site for [Alireza Omidi](https://alirezaomidi.github.io) — Ph.D. candidate in Bioinformatics at UBC, working in the [Gsponer Lab](https://www.msl.ubc.ca/people/dr-joerg-gsponer/) at Michael Smith Laboratories.

Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), statically exported and deployed to GitHub Pages.

## Technologies

- Framework: [Next.js](https://nextjs.org/) 14 (App Router, `output: 'export'`)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Typography: [Geist](https://vercel.com/font)
- Content: [MDX](https://mdxjs.com/) via [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- Theming: [next-themes](https://github.com/pacocoursey/next-themes)
- Deployment: GitHub Pages, via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

## Features

- **Publications list** driven by a single source of truth in [`app/publications/publication-data.tsx`](app/publications/publication-data.tsx), with a companion MDX post per paper in [`content/`](content).
- **Scholarly metadata**: Highwire Press `citation_*` tags for Google Scholar indexing, `ScholarlyArticle` JSON-LD carrying the full author list and DOI, and `Person` JSON-LD on the homepage.
- **SEO**: sitemap, robots.txt, per-page canonicals and Open Graph, RSS feed at `/rss.xml`.
- **Light and dark mode** with a system-preference default.
- **Interactive embeds**: tweets, YouTube videos, and LinkedIn posts, plus captions and image grids.

## Development

Requires Node 20+ and npm.

```
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

```
npm run build    # static export into out/
npm run lint
```

## Configuration

1. Site metadata and social links live in [`app/config.ts`](app/config.ts).
2. Education entries live in [`app/education-data.tsx`](app/education-data.tsx).
3. Publications live in [`app/publications/publication-data.tsx`](app/publications/publication-data.tsx). Each entry's `slug` must match a file in [`content/`](content).
4. Blog and publication posts live in [`content/`](content) as MDX.

### Adding a publication

Add an entry to `publication-data.tsx` and a matching `content/<slug>.mdx`. The `slug` field is explicit rather than derived from the title, so retitling a paper does not break its link.

Images are **not** optimized at request time — `output: 'export'` requires `images.unoptimized`, so every file ships exactly as committed. Resize figures to at most 1280px wide before adding them, and generate a 256px square thumbnail into `public/photos/publications/thumbs/` for the homepage list.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which runs `npm ci`, builds the static export, and publishes `out/` to GitHub Pages.

Note that tweet embeds are fetched at build time. If X rate-limits the runner the build fails rather than shipping a broken card — re-running the job usually clears it.

## Credits

Originally based on the [Nextfolio](https://github.com/1msirius/Nextfolio) template.

## License

See [LICENSE](LICENSE).
