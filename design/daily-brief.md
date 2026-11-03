# Daily guide run (4 guides per day)

Run this once per day. Work in the repo clone at /home/claude/zentafixit.

## 1. Set up
1. `cd /home/claude/zentafixit && git pull && npm ci`
2. Read `AUTHORING.md` and `design/batch2-brief.md` (the writing rules) in full, and two example posts: `src/content/blog/gfci-outlet-keeps-tripping.md` and `src/content/blog/breaker-keeps-tripping.md`.
3. Verified external link lists: `design/calc-urls.txt` and `design/ib-urls.txt` (use these paths instead of the /home/claude/... paths mentioned in older briefs). Internal links: only to guides that exist in `src/content/blog/` (URL `/<category>/<slug>/`).

## 2. Pick today's topics
Take the first 4 unchecked lines in `design/topic-queue.md`. If fewer than 4 remain, add new high-search-volume US home and tech problems to the queue first (spread across categories, slugs must not clash with existing guides or subcategory slugs).

## 3. Write each guide
For each topic: the `.md` guide, 2 diagrams in `public/images/posts/<slug>-<name>.svg`, and a featured image `design/featured/<slug>.svg`, exactly as the rules say. Troubleshooting posts keep the default; explainer or how-to posts get `fixcheck: false`. Never add `reviewedBy` or `reviewedDate`. Set `pubDate` to today.

## 4. Render and check
1. `node design/render-featured.cjs`, then convert each new PNG in `public/images/featured/` to `.webp` (quality 82) and `.jpg` (quality 85) with Pillow, and delete the PNGs.
2. No em or en dashes in any new file.
3. `rm -rf .astro node_modules/.astro && SHOW_DRAFTS=1 npx astro build --outDir dist-preview` must succeed.
4. Serve dist-preview, open each new guide in Playwright, and check: 2 diagrams, featured image, troubleshooter buttons, no text running past a diagram edge or overlapping other text. Fix anything you find.
5. Tick the 4 topics `[x]` in `design/topic-queue.md`.

## 5. Push as drafts
Commit with message `Add 4 draft guides: <slugs>` and push to main. Drafts stay hidden on the live site until Santaji approves them (approval adds `reviewedBy: Santaji Gadepatil` and `reviewedDate`).

## 6. Report
Send Santaji a short message: the 4 titles, the GitHub links to review them (`https://github.com/santajigade/zentafixit/blob/main/src/content/blog/<slug>.md`), and any facts worth checking. Keep it short and use no dashes.
