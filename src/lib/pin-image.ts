// Tall Pinterest pin images (1000x1500 JPG) rendered at build time with satori + resvg + sharp.
// Rendered images are cached in .og-cache (restored between CI runs) so rebuilds stay fast.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const NM = join(process.cwd(), 'node_modules');
const font = (w: number) => readFileSync(join(NM, `@fontsource/open-sans/files/open-sans-latin-${w}-normal.woff`));
let FONTS: any[] | null = null;
const fonts = () => (FONTS ??= [500, 700, 800].map((w) => ({ name: 'Open Sans', data: font(w), weight: w, style: 'normal' })));

const NAVY = '#0f2240';
const YELLOW = '#ffd23f';
const LOGO = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="5" fill="#ffd23f"/><path d="M8 7H24V11.5L14 20.5H24V25H8V20.5L18 11.5H8Z" fill="#0f2240"/></svg>')}`;

export interface PinInput {
  title: string;
  category: string;
  color: string;
  description: string;
  ticks: [string, string, string];
}

const h = (type: string, style: any, children?: any, extra: any = {}) => ({ type, props: { style, children, ...extra } });

/** Visible text rules: no bracketed text in titles, no em or en dashes, Rs instead of the rupee sign. */
export const cleanTitle = (t: string) =>
  t.replace(/\s*[([][^)\]]*[)\]]/g, '').replace(/\s*[–—]\s*/g, ', ').replace(/₹\s?/g, 'Rs ').replace(/\s{2,}/g, ' ').trim();
export const cleanText = (t: string) => t.replace(/\s*[–—]\s*/g, ', ').replace(/₹\s?/g, 'Rs ').trim();
/** Short description: whole sentence if it fits, otherwise cut at the last comma that fits, ending with a full stop. */
const oneLine = (t: string, max = 92) => {
  const s = cleanText(t);
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const at = Math.max(cut.lastIndexOf(', '), cut.lastIndexOf('? ') + 1, cut.lastIndexOf('. ') + 1);
  return (at > 30 ? cut.slice(0, at) : cut.slice(0, cut.lastIndexOf(' '))).replace(/[,;:\s]+$/, '').replace(/([^.?!])$/, '$1.');
};
const shade = (hex: string, f: number) =>
  '#' + [1, 3, 5].map((i) => Math.round(parseInt(hex.slice(i, i + 2), 16) * f).toString(16).padStart(2, '0')).join('');

function pin(o: PinInput) {
  const t = cleanTitle(o.title);
  const size = t.length > 52 ? 78 : t.length > 36 ? 88 : 100;
  const tick = (x: string) =>
    h('div', { display: 'flex', alignItems: 'center', gap: 20, fontSize: 34, fontWeight: 700 }, [
      h('div', { width: 46, height: 46, borderRadius: 999, background: YELLOW, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
        h('div', { width: 12, height: 22, borderRight: `5px solid ${NAVY}`, borderBottom: `5px solid ${NAVY}`, transform: 'rotate(45deg) translate(-2px,-3px)' })),
      x,
    ]);
  return h('div', {
    width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', padding: '78px 76px 70px', fontFamily: 'Open Sans', color: '#fff',
    backgroundColor: shade(o.color, 0.42),
    backgroundImage: `radial-gradient(circle at 100% 0%, ${o.color} 0%, ${o.color}aa 40%, transparent 72%), radial-gradient(circle at 0% 100%, ${NAVY}cc 0%, transparent 62%)`,
  }, [
    h('div', { display: 'flex', alignItems: 'center', gap: 20 }, [
      h('img', { width: 78, height: 78 }, undefined, { src: LOGO, width: 78, height: 78 }),
      h('div', { display: 'flex', fontSize: 46, fontWeight: 800, letterSpacing: -0.5 }, ['Zenta', h('span', { color: YELLOW }, 'Fixit')]),
    ]),
    h('div', { display: 'flex', alignSelf: 'flex-start', marginTop: 96, fontSize: 28, fontWeight: 800, letterSpacing: 3, padding: '12px 28px', borderRadius: 999, background: 'rgba(255,255,255,0.14)', border: '2px solid rgba(255,255,255,0.35)', textTransform: 'uppercase' }, o.category),
    h('div', { display: 'flex', marginTop: 36, fontSize: size, fontWeight: 800, lineHeight: 1.06, letterSpacing: -1.5 }, t),
    h('div', { display: 'flex', marginTop: 44, fontSize: 42, fontWeight: 500, lineHeight: 1.4, color: 'rgba(255,255,255,0.92)' }, oneLine(o.description)),
    h('div', { display: 'flex', flexDirection: 'column', gap: 24, marginTop: 'auto' }, o.ticks.map(tick)),
    h('div', { display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 56, padding: '28px 0', borderRadius: 999, background: '#fff', color: NAVY, fontSize: 40, fontWeight: 800 }, 'Try it free at zentafixit.com'),
  ]);
}

const CACHE = join(process.cwd(), '.og-cache');
export async function pinJpg(o: PinInput): Promise<Buffer> {
  const key = createHash('sha1').update(JSON.stringify(o) + 'pin-v2').digest('hex');
  const f = join(CACHE, key + '.jpg');
  if (existsSync(f)) return readFileSync(f);
  const svg = await satori(pin(o) as any, { width: 1000, height: 1500, fonts: fonts() });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1000 } }).render().asPng();
  const jpg = await sharp(png).jpeg({ quality: 85, mozjpeg: true }).toBuffer();
  mkdirSync(CACHE, { recursive: true });
  writeFileSync(f, jpg);
  return jpg;
}
