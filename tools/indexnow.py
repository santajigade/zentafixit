"""Tell IndexNow engines (Bing, ChatGPT search, DuckDuckGo, Yahoo) which pages changed in this publish.

Usage:
  python3 tools/indexnow.py changed <previous_manifest.json> <dist_dir> <new_manifest.json>
      Hash every sitemap page in dist_dir, compare with the manifest saved by the previous deploy,
      and submit only new or changed URLs. With no previous manifest (first run) every URL is submitted.
      Writes the new manifest for the next deploy.
  python3 tools/indexnow.py all [sitemap_url]
      Submit every URL in the live sitemap (default https://zentafixit.com/sitemap-0.xml).

Never fails the deploy: any error is printed and the script exits 0.
"""
import sys, os, re, json, glob, hashlib, urllib.request, urllib.error

HOST = 'zentafixit.com'
ENDPOINT = 'https://api.indexnow.org/indexnow'
KEY = next((os.path.basename(p)[:-4] for p in glob.glob('public/*.txt') if re.fullmatch(r'[0-9a-f]{32}\.txt', os.path.basename(p))), None)
UA = {'User-Agent': 'ZentaFixit-IndexNow/1.0'}


def submit(urls):
    if not urls or not KEY:
        print('IndexNow: nothing to submit' if urls == [] else 'IndexNow: no key file in public/'); return
    for i in range(0, len(urls), 10000):
        body = json.dumps({'host': HOST, 'key': KEY, 'keyLocation': f'https://{HOST}/{KEY}.txt', 'urlList': urls[i:i + 10000]}).encode()
        req = urllib.request.Request(ENDPOINT, data=body, headers={'Content-Type': 'application/json; charset=utf-8', **UA})
        with urllib.request.urlopen(req, timeout=30) as r:
            print(f'IndexNow: submitted {len(urls[i:i + 10000])} URLs, response HTTP {r.status}')


def sitemap_urls(xml):
    return re.findall(r'<loc>(https://[^<]+)</loc>', xml)


def changed(prev_path, site, out_path):
    xml = ''.join(open(f, encoding='utf-8').read() for f in glob.glob(f'{site}/sitemap-*.xml') if 'index' not in f)
    urls = sitemap_urls(xml)
    prev = json.load(open(prev_path)) if os.path.exists(prev_path) else None
    now = {}
    for u in urls:
        rel = u.split(HOST, 1)[1].strip('/')
        p = os.path.join(site, rel, 'index.html') if rel else os.path.join(site, 'index.html')
        if os.path.exists(p):
            now[u] = hashlib.sha1(open(p, 'rb').read()).hexdigest()
    os.makedirs(os.path.dirname(out_path) or '.', exist_ok=True)
    json.dump(now, open(out_path, 'w'), indent=0, sort_keys=True)
    todo = list(now) if prev is None else [u for u, h in now.items() if prev.get(u) != h]
    print(f'IndexNow: {len(todo)} of {len(now)} sitemap URLs are new or changed' + (' (first run: all)' if prev is None else ''))
    submit(todo)


def all_live(sitemap):
    with urllib.request.urlopen(urllib.request.Request(sitemap, headers=UA), timeout=30) as r:
        urls = sitemap_urls(r.read().decode('utf-8'))
    print(f'IndexNow: {len(urls)} URLs in {sitemap}')
    submit(urls)


try:
    if sys.argv[1] == 'changed':
        changed(*sys.argv[2:5])
    elif sys.argv[1] == 'all':
        all_live(sys.argv[2] if len(sys.argv) > 2 else f'https://{HOST}/sitemap-0.xml')
except urllib.error.HTTPError as e:
    print('IndexNow skipped:', e, e.read()[:300])
except Exception as e:
    print('IndexNow skipped:', e)
sys.exit(0)
