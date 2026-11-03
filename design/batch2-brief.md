# Writer brief (batch 2)

You are writing guides for ZentaFixit (zentafixit.com), a US home and tech fix-it site built with Astro in /home/claude/zentafixit.

## Read first, in full
1. `/home/claude/zentafixit/AUTHORING.md`: the rules. Follow every one.
2. Two finished examples: `src/content/blog/gfci-outlet-keeps-tripping.md` (a troubleshooting post) and `src/content/blog/how-to-test-an-outlet-with-a-multimeter.md` (a how-to post with `fixcheck: false`).
3. Example diagrams in `public/images/posts/`: `gfci-diagnosis-flow.svg`, `gfci-anatomy.svg`, `ac-running-not-cooling-flow.svg`, `how-to-test-an-outlet-with-a-multimeter-readings.svg`.
4. Example featured image: `design/featured/gfci-outlet-keeps-tripping.svg`.
5. Category and subcategory slugs: `src/data/categories.ts`.

## What to make for EACH post you are given
- `src/content/blog/<slug>.md`
- 2 diagrams: `public/images/posts/<slug>-<name>.svg`
- 1 featured image: `design/featured/<slug>.svg`

## Post types
- **Troubleshooting post** ("X not working"): numbered cause/fix sections, `## When to call a pro` at the end, default `fixcheck` (leave it out).
- **Guide/how-to/explainer post** (marked GUIDE in your list): add `fixcheck: false` to the front matter. Numbered sections are steps or topics. Symptoms become "jump to" topics (labels like "Which size do I need?"). Still include a Quick answer box, 2 diagrams, an FAQ, and a safety note where relevant.

## Hard rules
- US audience: °F, inches, gallons, 120/240 V, $ prices only as broad ranges. Accuracy and safety first. Never invent statistics, model-specific menu paths, error-code meanings or code sections you are not sure of. Say "check your manual/label" instead.
- No em dash (—) and no en dash (–) anywhere: text, alt text, FAQ, figure captions, SVG labels. Use commas, colons, full stops, brackets; ranges use "to". Hyphens inside words (Wi-Fi, step-by-step) are fine.
- Every `symptoms[].to` must exactly equal a generated `##` heading anchor (see AUTHORING.md).
- External links: only URLs listed in `/home/claude/calc-urls.txt` or `/home/claude/ib-urls.txt`, only if genuinely relevant. Never invent a URL. It is fine to have none.
- Internal links: you may link 1 or 2 closely related ZentaFixit guides using the exact paths in `design/batch2-slugs.txt`. Never link a path not in that list.
- Do NOT add `reviewedBy` or `reviewedDate`.
- Diagram labels must sit at least 20px from the right edge of the 640 viewBox and fit inside their boxes (Open Sans is about 7.5px per character at 13px, 8px at 14px, 9.5px at 17px bold). Arrow marker ids must be unique within the file.
- Featured image: no text, no logos, no real brand names or shapes.
- Do NOT run npm, astro, git or any server. Do not edit any file except the ones you create. Many writers work in this folder at the same time.

## Before you finish
Run and fix anything it prints:
```
python3 -c "import glob;[print(f) for f in glob.glob('/home/claude/zentafixit/src/content/blog/*.md')+glob.glob('/home/claude/zentafixit/public/images/posts/*.svg')+glob.glob('/home/claude/zentafixit/design/featured/*.svg') if '—' in open(f).read() or '–' in open(f).read()]"
```
Also check every `symptoms[].to` against your headings, and that each SVG is valid XML (`python3 -c "import xml.dom.minidom,sys;[xml.dom.minidom.parse(f) for f in sys.argv[1:]]" <files>`).

Reply briefly: your slugs, word counts, links used, and any facts you were unsure about.
