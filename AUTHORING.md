# ZentaFixit post authoring guide

Every post follows the GFCI post (`src/content/blog/gfci-outlet-keeps-tripping.md`) and the laptop post (`src/content/blog/laptop-plugged-in-not-charging.md`). Read both before writing.

## Audience and voice
- US homeowners and renters with no trade background. US spelling, US units (°F, inches, gallons, 120/240 V), US product names and prices in $.
- Plain English, second person, short sentences. Accurate and safety-first. Never invent statistics, model-specific menu paths you are not sure of, or code requirements. If unsure, say "check your manual" or leave it out.
- **No dashes between phrases.** Never use em dash (—) or en dash (–). Use commas, colons, full stops or brackets. Ranges use "to" (`10 to 30 min`, `$15 to $30`). Hyphens inside words are fine (worn-out, step-by-step, non-contact, USB-C, Wi-Fi).

## File
`src/content/blog/<slug>.md`. The slug is the URL, lowercase with hyphens, matching the main search phrase (e.g. `ac-not-cooling`). It must not equal any subcategory slug in its category (subcategories have their own pages at `/<category>/<subcategory>/`); the build stops if it does.

## Front matter (all fields)
```yaml
---
title: "Problem Phrase? N Causes and Fixes"     # max 70 chars, starts with the exact search phrase
description: "..."                               # max 160 chars, no dashes
pubDate: 2026-11-03
category: hvac                                   # slug from src/data/categories.ts
subcategory: air-conditioners                    # slug from src/data/categories.ts
tags: [ac, cooling, ...]
image: { src: /images/featured/<slug>.webp, alt: "..." }
difficulty: easy | moderate | hard
time: 10 to 30 min
risk: low | caution | danger                     # electrical, gas, refrigerant, ladders = caution or danger
tools: [Tool one, Tool two]
symptoms:                                        # 4 to 6 "what are you seeing?" buttons
  - { label: "Short symptom", to: "heading-anchor" }
faq:                                             # 4 to 6 real questions people search
  - q: "..."
    a: "..."
---
```
Do NOT add `reviewedBy` or `reviewedDate`. Those are added only after the human review.

`symptoms[].to` must equal the anchor Astro generates from a `##` heading: lowercase, spaces become hyphens, punctuation removed. Examples: `## 1. Moisture in an outlet or box` gives `1-moisture-in-an-outlet-or-box`; `## GFCI won't reset at all?` gives `gfci-wont-reset-at-all`; `## 6. Reinstall the battery driver (Windows)` gives `6-reinstall-the-battery-driver-windows`. The build fails if an anchor is wrong.

## Body structure (in this order)
1. Two short intro paragraphs: what is happening and the most common causes in bold.
2. A diagram (`<figure>`, see below).
3. `<div class="key"><strong>Quick answer</strong><p>2 to 3 sentences.</p></div>`
4. For risky jobs, a safety blockquote: `> **Safety first:** ...`
5. `## How to tell what's causing it: quick test` (or a similar diagnosis section) with a numbered list of 3 to 5 steps. Top-level numbered lists become tickable checklists.
6. Numbered cause or fix sections: `## 1. ...`, `## 2. ...` (5 to 9 of them). Each: 1 to 2 explanation sentences, then `**Fix:**` with bullets or numbered steps. Headings that start with a number get a "Did this fix it?" widget automatically.
7. A second diagram somewhere in the middle where it helps.
8. A worst-case section (e.g. `## Won't turn on at all?`).
9. `## When to call a pro` (or "an electrician", "an HVAC technician", "a plumber").
Length: 1,200 to 1,800 words. Tables are welcome for brand or model comparisons.

## Links (only when genuinely relevant, 0 to 3 per post, in normal sentences)
Use ONLY URLs from these verified lists, never invent or guess one:
- `design/calc-urls.txt` (zentacalculator.com calculators)
- `design/ib-urls.txt` (instrumentationblog.in articles)
Internal links to other ZentaFixit posts: `/electrical/gfci-outlet-keeps-tripping/`, `/pc-laptops/laptop-plugged-in-not-charging/` (and others in `src/content/blog/`, URL `/<category>/<slug>/`).

## Diagrams (2 per post)
Original SVG files in `public/images/posts/<slug>-<name>.svg`, embedded in Markdown as:
```html
<figure><img src="/images/posts/<file>.svg" alt="Full description of what it shows" width="640" height="H" loading="lazy" /><figcaption>One short sentence.</figcaption></figure>
```
Leave a blank line before and after the figure. The build inlines the SVG so it uses the article font.
- `viewBox="0 0 640 H"` and a first `<rect width="640" height="H" fill="#f3f6fa"/>`. `width`/`height` on the img must match the viewBox.
- `font-family="Open Sans, Arial, sans-serif"` on the root. Title text 17px bold `#0f2240`; labels 13 to 14px `#14202c`; notes 12 to 13px `#566475`.
- Colours only: navy `#0f2240`, ink `#14202c`, muted `#566475`, line `#d5dee8`, white `#fff`, yellow fill `#ffd23f` (use `fill-opacity=".45"` with stroke `#c9a10a` for highlight boxes), blue `#1d5fae` / `#dfe9f7`, red `#d9442b`, green `#1f8a5b`.
- Keep every label at least 20px from the right edge. Open Sans is about 7.5px per character at 13px, 8px at 14px, 9.5px at 17px bold. Measure every line against its box. Boxes: stroke 2, rx 8. Arrows: a `<marker>` with an id unique within the file.
- Good diagram types: a diagnosis flowchart, labelled parts of the device, a wiring or connection view, a comparison chart. No invented numbers.

## Featured image (1 per post)
`design/featured/<slug>.svg`, 1200×630, blueprint style. Copy the structure of `design/featured/gfci-outlet-keeps-tripping.svg`: navy `#0f2240` background, the two grid patterns, a simple flat illustration of the device in white/`#f3f6fa` with navy `#0f2240` outlines, one or two yellow `#ffd23f` accents, optional dashed dimension lines in `#9fc4f0`, and the yellow bar `<rect x="0" y="606" width="1200" height="24" fill="#ffd23f"/>` at the bottom. No text, no logos, no real brands.
