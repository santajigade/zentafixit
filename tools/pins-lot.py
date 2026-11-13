"""Release "a lot now": the next N scheduled pins, for a manual Pinterest bulk upload (.csv).

What it does:
1. Picks the next N pins in src/data/pins.json that are not released yet and not already in pins-manual.json.
2. Moves their release date to today (IST) so the build generates their images, and adds them to
   src/data/pins-manual.json so they stay OUT of the RSS feed (never pinned twice).
3. Writes pins-lot-<date>.csv for pinterest.com/settings/bulk-create-pins.

Usage: python3 tools/pins-lot.py [N=10] [BOARD="Fix It Yourself: Home and Tech"]
Then commit, push and wait for the deploy before uploading the .csv (Pinterest fetches the images).
"""
import sys, re, json, csv, glob, datetime

N = int(sys.argv[1]) if len(sys.argv) > 1 else 10
BOARD = sys.argv[2] if len(sys.argv) > 2 else 'Fix It Yourself: Home and Tech'
SITE = 'https://zentafixit.com'
today = (datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=5, minutes=30)).date().isoformat()

sched = json.load(open('src/data/pins.json'))
manual = json.load(open('src/data/pins-manual.json'))
pick = [k for k, d in sorted(sched.items(), key=lambda kv: kv[1]) if d > today and k not in manual][:N]

def front(pid):
    cat, slug = pid.split('/')
    s = open(f'src/content/blog/{slug}.md', encoding='utf-8').read()
    fm = s.split('---', 2)[1]
    get = lambda k: (re.search(rf'^{k}:\s*"?(.*?)"?\s*$', fm, re.M) or [None, ''])[1]
    tags = re.search(r'^tags:\s*\[(.*?)\]', fm, re.M)
    return get('title'), get('description'), [t.strip() for t in tags.group(1).split(',')] if tags else []

cats = {m[0]: m[1] for m in re.findall(r"slug: '([a-z-]+)', color: '#\w+', name: '([^']+)'", open('src/data/categories.ts').read())}
clean = lambda t: re.sub(r'\s*[–—]\s*', ', ', re.sub(r'\s*[(\[][^)\]]*[)\]]', '', t)).replace('₹', 'Rs ').strip()

rows = []
for pid in pick:
    title, desc, tags = front(pid)
    cat = cats[pid.split('/')[0]]
    hashtags = ' '.join('#' + re.sub(r'[^A-Za-z0-9]', '', x) for x in [cat.replace('&', 'And'), 'HomeRepair', 'DIY', 'FixItYourself'])
    rows.append({
        'Title': clean(title)[:100],
        'Media URL': f'{SITE}/pins/{pid}.jpg',
        'Pinterest board': BOARD,
        'Thumbnail': '',
        'Description': f'{clean(desc)} Free step-by-step guide with diagrams and safety tips. {hashtags}'[:500],
        'Link': f'{SITE}/{pid}/?utm_source=pinterest&utm_medium=social&utm_campaign=pins',
        'Publish date': '',
        'Keywords': ', '.join(dict.fromkeys([cat.lower()] + [t.lower() for t in tags[:6]])),
    })
    sched[pid] = today
    manual.append(pid)

open('src/data/pins.json', 'w').write('{\n' + ',\n'.join(f'"{k}": "{v}"' for k, v in sched.items()) + '\n}\n')
open('src/data/pins-manual.json', 'w').write('[\n' + ',\n'.join(f'"{m}"' for m in manual) + '\n]\n')
out = f'pins-lot-{today}.csv'
with open(out, 'w', newline='', encoding='utf-8') as f:
    w = csv.DictWriter(f, fieldnames=['Title', 'Media URL', 'Pinterest board', 'Thumbnail', 'Description', 'Link', 'Publish date', 'Keywords'])
    w.writeheader(); w.writerows(rows)
print(f'{len(rows)} pins released today and added to pins-manual.json; wrote {out}')
