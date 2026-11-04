# Daily social media set (one guide per day)

Makes a promo video set for ONE published guide per day. Not part of the website build.

## Output (social/out/YYYY-MM-DD/, git-ignored)
- `zentafixit-SLUG-DATE-1080x1080.mp4`: square, with soundtrack (Instagram, Facebook, LinkedIn)
- `zentafixit-SLUG-DATE-480x480.gif`: square GIF
- `zentafixit-SLUG-DATE-1080x1920-shorts.mp4`: vertical, with soundtrack (YouTube Shorts, Reels)
- `zentafixit-SLUG-DATE-thumbnail-1080x1080.jpg` and `-thumbnail-1080x1920.jpg`
- `caption.txt`: post caption, the checks, guide link, Shorts title
- `check/`: contact sheets of key frames, look at them before sending

Video scenes: hook question, guide card with featured image, 3 or 4 numbered quick checks,
safety note (optional), end card with zentafixit.com. About 25 seconds.

## Steps
1. `python3 social/pick.py` lists guides approved in the last 7 days that are not in
   `social/posted.txt`, newest first. Writes `social/work/guides.json`.
2. Choose ONE guide: prefer the newest, and among those the one with the widest US appeal and
   best timing for the season. Read its markdown in src/content/blog/.
3. Write `social/work/data.json` like `data.example.json`. Fields of `guide`:
   - `title`: 2 lines (line 2 in yellow), `titleVertical` optional
   - `hook`: short question for the opening (under 30 characters), `hookSub`: one line under it
   - `checksTitle`, `checksSub`, `checks`: 3 or 4 short steps (under 50 characters each), taken from the guide
   - `safetyTitle`, `safety`: one warning from the guide (under 90 characters), or leave `safety` out
   - `short`, `thumbTitle` (2 short lines for the thumbnail), `tag`, `emoji`, `fullTitle`, `url`
   - top level: `date`, `dateLabel`, `shortsTitle`, `captionIntro`, `hashtags`
4. `python3 social/build.py --stills-only`, check `check/sheet_*.png` and the thumbnails.
5. `python3 social/build.py` renders everything (about 4 minutes).
6. Add the slug to `social/posted.txt` and push only that file.

## Rules
- Brand: navy #0F2240, yellow #FFD23F, Open Sans (fonts/, SIL OFL).
- No em or en dashes in any text. US spelling. Every fact must come from the guide.
- Music is synthesized by `music.py` (no samples), so it is copyright free.
- Needs Python 3, Playwright with Chromium, ffmpeg and numpy.
