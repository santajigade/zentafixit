"""Render the daily social set from social/work/data.json into social/out/<date>/.

Outputs: square MP4 (1080x1080, audio), GIF (480x480), vertical Shorts MP4 (1080x1920, audio),
square and vertical thumbnails, caption.txt, and check/ contact sheets to look at before sending.
usage: python3 social/build.py [--stills-only]
"""
import json, os, subprocess, sys
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
WORK = os.path.join(HERE, "work")
D = json.load(open(os.path.join(WORK, "data.json"), encoding="utf-8"))
N = len(D["guides"])
assert 1 <= N <= 6, "use 1 to 6 guides"
for g in D["guides"]:
    for k in ("slug", "tag", "title", "tip", "short", "emoji", "fullTitle", "url"):
        assert k in g, f"{g.get('slug')}: missing {k}"
    for f in [g["tip"], g["fullTitle"]] + g["title"] + g.get("titleVertical", []):
        assert "—" not in f and "–" not in f, "no em or en dashes"
open(os.path.join(WORK, "data.js"), "w", encoding="utf-8").write("window.DATA=" + json.dumps(D) + ";")
OUT = os.path.join(HERE, "out", D["date"])
CHK = os.path.join(OUT, "check")
os.makedirs(CHK, exist_ok=True)
NAME = f"zentafixit-new-guides-{D['date']}"
T0, SEG = 3.0, 4.2
DUR = T0 + N * SEG + 4.0
FPS = 30

def page(pw, tpl, h, hsh):
    b = pw.chromium.launch()
    pg = b.new_page(viewport={"width": 1080, "height": h})
    pg.goto("file://" + os.path.join(HERE, "templates", tpl) + hsh)
    pg.evaluate("document.fonts.ready"); pg.wait_for_timeout(500)
    if tpl == "promo.html": pg.evaluate("fitTitles()")
    return b, pg

def video(h, hsh, out):
    from playwright.sync_api import sync_playwright
    with sync_playwright() as pw:
        b, pg = page(pw, "promo.html", h, hsh)
        tmp = out.replace(".mp4", ".tmp.mp4")
        ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(FPS), "-c:v", "mjpeg",
                               "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", tmp],
                              stdin=subprocess.PIPE)
        for i in range(round(DUR * FPS)):
            pg.evaluate(f"render({i / FPS})")
            ff.stdin.write(pg.screenshot(type="jpeg", quality=92))
        ff.stdin.close()
        assert ff.wait() == 0
        os.replace(tmp, out)
        b.close()

def stills():
    from playwright.sync_api import sync_playwright
    times = [1.8] + [T0 + i * SEG + 2.5 for i in range(N)] + [DUR - 1.3]
    with sync_playwright() as pw:
        for lay, h, hsh in (("square", 1080, ""), ("vertical", 1920, "#v")):
            b, pg = page(pw, "promo.html", h, hsh)
            files = []
            for k, t in enumerate(times):
                pg.evaluate(f"render({t})"); f = os.path.join(CHK, f"{lay}_{k}.png"); pg.screenshot(path=f); files.append(f)
            b.close()
            ins = sum([["-i", f] for f in files], [])
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", *ins, "-filter_complex",
                            f"{''.join(f'[{i}]' for i in range(len(files)))}hstack={len(files)},scale=-1:{540 if lay=='square' else 800}",
                            os.path.join(CHK, f"sheet_{lay}.png")], check=True)
            for f in files: os.remove(f)
        for lay, h in (("s", 1080), ("v", 1920)):
            b = pw.chromium.launch(); pg = b.new_page(viewport={"width": 1080, "height": h})
            pg.goto("file://" + os.path.join(HERE, "templates", "thumb.html") + "#" + lay)
            pg.evaluate("document.fonts.ready"); pg.wait_for_timeout(500)
            pg.screenshot(path=os.path.join(OUT, f"{NAME}-thumbnail-1080x{h}.jpg"), type="jpeg", quality=92)
            b.close()

stills()
if "--stills-only" in sys.argv:
    print("stills in", CHK); sys.exit()

wav = os.path.join(WORK, "music.wav")
subprocess.run([sys.executable, os.path.join(HERE, "music.py"), str(N), wav], check=True)
jobs = {"sq": (1080, ""), "gif": (1080, "#gif"), "vt": (1920, "#v")}
with ThreadPoolExecutor(3) as ex:
    list(ex.map(lambda k: video(jobs[k][0], jobs[k][1], os.path.join(WORK, f"{k}.mp4")), jobs))
for k, n in (("sq", "1080x1080"), ("vt", "1080x1920-shorts")):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", os.path.join(WORK, f"{k}.mp4"), "-i", wav, "-map", "0:v", "-map", "1:a",
                    "-c:v", "copy", "-af", "loudnorm=I=-14:TP=-1.5:LRA=11", "-ar", "48000", "-c:a", "aac", "-b:a", "192k",
                    "-shortest", "-movflags", "+faststart", os.path.join(OUT, f"{NAME}-{n}.mp4")], check=True)
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", os.path.join(WORK, "gif.mp4"), "-vf",
                "fps=12,scale=480:480:flags=lanczos,split[a][b];[a]palettegen=max_colors=64:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle",
                "-loop", "0", os.path.join(OUT, f"{NAME}-480x480.gif")], check=True)

g = D["guides"]
tags = " ".join(D.get("hashtags", ["#DIY", "#HomeRepair", "#FixIt", "#Homeowners"]))
cap = [f"{N} new fix-it guide{'s' if N > 1 else ''} on ZentaFixit today 🔧", ""]
cap += [f"{x['emoji']} {x['fullTitle']}" for x in g]
cap += ["", "Step-by-step, safety first, free to read.", "👉 zentafixit.com", "", tags, "", "Direct links:"]
cap += [x["url"] for x in g]
cap += ["", "YouTube Shorts title:", D.get("shortsTitle", "") + " #Shorts"]
open(os.path.join(OUT, "caption.txt"), "w", encoding="utf-8").write("\n".join(cap) + "\n")
for k in jobs: os.remove(os.path.join(WORK, f"{k}.mp4"))
print("done:", OUT)
for f in sorted(os.listdir(OUT)): print(" ", f)
