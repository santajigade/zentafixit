"""List guides published (approved) recently that have no video yet, and write social/work/guides.json.

Guides already promoted are listed in social/posted.txt (one slug per line) and are skipped.

A guide counts as published when a commit adds its `reviewedBy:` line.
usage: python3 social/pick.py [--hours 168] [--slugs a,b,c]
Needs git history for the window (clone with --shallow-since="10 days ago" or deeper).
"""
import argparse, json, os, re, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(ROOT, "src", "content", "blog")

ap = argparse.ArgumentParser()
ap.add_argument("--hours", type=float, default=168)
ap.add_argument("--slugs", default="")
a = ap.parse_args()

if a.slugs:
    slugs = [s.strip() for s in a.slugs.split(",") if s.strip()]
else:
    log = subprocess.run(["git", "-C", ROOT, "log", f"--since={int(a.hours * 60)} minutes ago", "--reverse", "-p",
                          "--format=@@COMMIT %H", "--", "src/content/blog/"], capture_output=True, text=True).stdout
    slugs, cur = [], None
    for line in log.splitlines():
        m = re.match(r"^\+\+\+ b/src/content/blog/(.+)\.md$", line)
        if m: cur = m.group(1); continue
        if cur and line.startswith("+reviewedBy:") and cur not in slugs:
            slugs.append(cur)

posted_f = os.path.join(ROOT, "social", "posted.txt")
posted = set(open(posted_f).read().split()) if os.path.exists(posted_f) else set()
if not a.slugs:
    slugs = [s for s in slugs if s not in posted]

cats = {}
src = open(os.path.join(ROOT, "src", "data", "categories.ts"), encoding="utf-8").read()
for m in re.finditer(r"slug:\s*'([^']+)',\s*name:\s*'([^']+)'", src):
    cats.setdefault(m.group(1), m.group(2))

def fm(text, key):
    m = re.search(rf'^{key}:\s*"?(.*?)"?\s*$', text, re.M)
    return m.group(1) if m else ""

out = []
for s in slugs:
    p = os.path.join(BLOG, s + ".md")
    if not os.path.exists(p): continue
    t = open(p, encoding="utf-8").read()
    if not re.search(r"^reviewedBy:", t, re.M): continue  # still a draft
    qa = re.search(r'<strong>Quick answer</strong><p>(.*?)</p>', t, re.S)
    cat = fm(t, "category")
    out.append({
        "slug": s, "title": fm(t, "title"), "description": fm(t, "description"),
        "category": cat, "categoryName": cats.get(cat, cat),
        "url": f"https://zentafixit.com/{cat}/{s}/",
        "quickAnswer": re.sub(r"<[^>]+>", "", qa.group(1)) if qa else "",
        "hasFeatured": os.path.exists(os.path.join(ROOT, "design", "featured", s + ".svg")),
    })
out.reverse()  # newest first
os.makedirs(os.path.join(ROOT, "social", "work"), exist_ok=True)
json.dump(out, open(os.path.join(ROOT, "social", "work", "guides.json"), "w"), indent=2)
print(json.dumps(out, indent=2))
print(f"{len(out)} guide(s)")
