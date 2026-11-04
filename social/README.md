# Daily social media set

Makes the daily promo for newly published guides. Not part of the website build.

## Output (social/out/YYYY-MM-DD/, git-ignored)
- `zentafixit-new-guides-DATE-1080x1080.mp4`: square, with soundtrack (Instagram, Facebook, LinkedIn)
- `zentafixit-new-guides-DATE-480x480.gif`: square GIF
- `zentafixit-new-guides-DATE-1080x1920-shorts.mp4`: vertical, with soundtrack (YouTube Shorts, Reels)
- `zentafixit-new-guides-DATE-thumbnail-1080x1080.jpg` and `-thumbnail-1080x1920.jpg`
- `caption.txt`: post caption, direct links, Shorts title
- `check/`: contact sheets of key frames, look at them before sending

## Steps
1. `python3 social/pick.py` lists guides whose `reviewedBy:` line was added in the last 24 hours
   (`--hours 48` to widen, `--slugs a,b` to choose). Writes `social/work/guides.json`.
2. Write `social/work/data.json` (see `data.example.json`). For each guide:
   `title` is two lines (line 2 shows in yellow), `tip` is one short tip from the guide's
   quick answer (under 70 characters), `short` is the thumbnail label (under 20 characters),
   `tag` is the category name, `emoji`, `fullTitle`, `url`. Optional `titleVertical`.
3. `python3 social/build.py --stills-only`, check `check/sheet_*.png` and the thumbnails.
4. `python3 social/build.py` renders everything (about 4 minutes).

## Rules
- Brand: navy #0F2240, yellow #FFD23F, Open Sans (fonts/, SIL OFL).
- No em or en dashes in any text. US spelling. Tips must come from the guide itself.
- Music is synthesized by `music.py` (no samples), so it is copyright free.
- Needs Python 3, Playwright with Chromium, ffmpeg and numpy.
