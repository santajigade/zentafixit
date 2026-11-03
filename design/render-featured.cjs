const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
(async () => {
  const src = require('path').join(__dirname, 'featured'), out = require('path').join(__dirname, '../public/images/featured');
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const f of fs.readdirSync(src).filter((x) => x.endsWith('.svg'))) {
    await p.setContent(`<html><body style="margin:0">${fs.readFileSync(path.join(src, f), 'utf8')}</body></html>`);
    await p.screenshot({ path: path.join(out, f.replace('.svg', '.png')), clip: { x: 0, y: 0, width: 1200, height: 630 } });
  }
  await b.close();
})();
