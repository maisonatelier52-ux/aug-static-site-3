# The Meridian Times

A JavaScript-only, JSON-driven Next.js news publication modeled on a dense editorial newspaper layout. It includes reusable home sections, category archives, author profiles, category-aware story detail pages, sticky side rails, a sticky table of contents, SEO metadata, JSON-LD, sitemap, robots, and responsive Tailwind CSS styling.

Article pages use `app/[category]/[slug]/page.jsx`. Content is stored in `json/articel.json` and `json/author.json`.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The project uses `output: "export"`, so the production-ready static site is written to `out/`.
