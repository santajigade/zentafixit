# ZentaFixit

Static blog for zentafixit.com, built with [Astro](https://astro.build) and hosted on Hostinger.

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

The GitHub Action `.github/workflows/deploy.yml` builds the site and uploads `dist/` to Hostinger by FTP on every push and once a day, so scheduled posts appear on their date.

## Hostinger setup

Add these GitHub secrets (Settings → Secrets and variables → Actions): `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` — from hPanel → Files → FTP Accounts. The FTP account is rooted at `public_html`, so files upload to its root.

## Featured images

Each post has a 1200×630 featured image. Source SVGs live in `design/featured/<slug>.svg`.
Render them with `node design/render-featured.cjs` (needs Playwright), then convert each PNG to
`public/images/featured/<slug>.webp` (shown on the page) and `<slug>.jpg` (used for social sharing).

## Traffic plumbing

**IndexNow** (Bing, ChatGPT search, DuckDuckGo, Yahoo): key file `public/<32-hex>.txt`. After every deploy, `tools/indexnow.py changed` submits only sitemap pages whose HTML changed since the previous deploy (page hashes are kept in the GitHub Actions cache). It never fails the deploy. The first deploy, and the manual workflow **IndexNow: submit all pages**, submit everything.

**Pinterest**
- Verification: paste the `p:domain_verify` value into `pinterestVerify` in `src/data/site.ts`. Profile link: `social.pinterest`.
- Pin images: `/pins/<category>/<slug>.jpg` (1000x1500), rendered at build time with satori, resvg and sharp, cached in `.og-cache`. Only pins already released get an image. Colours come from `color` in `src/data/categories.ts`.
- Schedule: `src/data/pins.json` (pin id to release date, 4 a day, built by `tools/pins-schedule.py`). Guides added later are pinned the day after they go live. Preview a future day with `PIN_TODAY=YYYY-MM-DD npx astro build`.
- Feed: `/pins/feed.xml` (RSS 2.0 with media namespace, latest 60). The daily 09:00 IST rebuild releases each day's pins.
- Manual uploads: `python3 tools/pins-lot.py 10 "BOARD_NAME"` releases the next 10 pins today, adds them to `src/data/pins-manual.json` (kept out of the feed) and writes a bulk-upload .csv.
