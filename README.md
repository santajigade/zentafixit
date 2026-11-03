# ZentaFixit

Static blog for zentafixit.com, built with [Astro](https://astro.build) and hosted on Cloudflare Pages.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Build the live site into `dist/` |
| `SHOW_DRAFTS=1 npm run build` | Build a review preview that includes unreviewed and future posts |

## Writing a post

Add a Markdown file to `src/content/blog/` — the file name becomes the URL slug.

```yaml
---
title: "Why Does My GFCI Outlet Keep Tripping? 7 Causes and Fixes"
description: "Under 160 characters."
pubDate: 2026-11-10          # goes live on this date
category: electrical         # slug from src/data/categories.ts
subcategory: outlets-and-gfci
tags: [gfci, outlets]
reviewedBy: Santaji Gadepatil  # add these two ONLY after a real review
reviewedDate: 2026-11-08
faq:
  - q: Question?
    a: Answer.
---
```

## Publishing rules

A post is live only when **all** are true:

1. `draft` is not `true`
2. `pubDate` is today or earlier
3. `reviewedDate` is set (`requireReview` in `src/data/site.ts`)

A daily GitHub Action (`.github/workflows/daily-publish.yml`) triggers a Cloudflare rebuild so scheduled posts appear on their date.

## Cloudflare Pages setup

- Framework preset: **Astro** · Build command: `npm run build` · Output: `dist`
- Environment variable: `NODE_VERSION` = `22`
- Optional preview branch `review` with `SHOW_DRAFTS=1` for reviewing posts before they go live
