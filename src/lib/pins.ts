// Pinterest pin schedule: which guides have been released to the pin feed so far.
import { getPublishedPosts, type Post } from './posts';
import { getCategory } from '../data/categories';
import { cleanText, type PinInput } from './pin-image';
import SCHEDULE from '../data/pins.json';
import MANUAL from '../data/pins-manual.json';

/** Pin id = "<category>/<slug>", the same as the guide's URL path. */
export const pinId = (p: Post) => `${p.data.category}/${p.id}`;

/** Pins uploaded by hand (.csv): they get images but stay out of the RSS feed so Pinterest never pins them twice. */
export const manualPins = new Set(MANUAL as string[]);

const DAY = 864e5;
/** Today's date in India (the schedule and the 09:00 IST daily rebuild use IST days). */
export const todayIST = () => process.env.PIN_TODAY || new Date(Date.now() + 5.5 * 3600e3).toISOString().slice(0, 10); // PIN_TODAY=YYYY-MM-DD for previews
const ymd = (d: Date) => d.toISOString().slice(0, 10);

/** Release date of a guide's pin: from src/data/pins.json, otherwise the day after the guide went live. */
export function pinDate(p: Post): string {
  const sched = SCHEDULE as Record<string, string>;
  const live = p.data.reviewedDate && p.data.reviewedDate > p.data.pubDate ? p.data.reviewedDate : p.data.pubDate;
  return sched[pinId(p)] ?? ymd(new Date(+live + DAY));
}

/** Released pins, newest first. */
export async function pinQueue(): Promise<{ post: Post; date: string }[]> {
  const t = todayIST();
  return (await getPublishedPosts())
    .map((post) => ({ post, date: pinDate(post) }))
    .filter((p) => p.date <= t)
    .sort((a, b) => b.date.localeCompare(a.date) || pinId(a.post).localeCompare(pinId(b.post)));
}

const DIFF = { easy: 'Easy', moderate: 'Moderate', hard: 'Advanced' } as const;

/** What goes on a guide's pin image. */
export function pinInput(p: Post): PinInput {
  const cat = getCategory(p.data.category)!;
  const time = cleanText(p.data.time).replace(/\bmin\b/, 'minutes');
  const first = p.data.fixcheck ? `${DIFF[p.data.difficulty]} fix, ${time}` : `${DIFF[p.data.difficulty]} guide, ${time}`;
  return {
    title: p.data.title,
    category: cat.name,
    color: cat.color,
    description: p.data.description.replace(/\s*\([^)]*\)/g, ''),
    ticks: [first, 'Diagrams and safety tips', 'Reviewed by an engineer'],
  };
}

// ---- Second pin per guide (design B) for the category board feeds ----
/** Board groups: one RSS feed per Pinterest board. Pinterest allows a limited number of feeds, so categories are grouped. */
export const BOARDS = [
  { slug: 'hvac-appliances', name: 'HVAC and Appliance Repair', cats: ['hvac', 'appliances'] },
  { slug: 'electrical-power', name: 'Electrical DIY and Home Power', cats: ['electrical', 'solar-power', 'ev-charging', 'home-safety', 'tools'] },
  { slug: 'tech-fixes', name: 'Wi-Fi, Computer and Phone Fixes', cats: ['networking', 'pc-laptops', 'gadgets', 'phones-tablets', 'tv-audio'] },
  { slug: 'plumbing-smart-home', name: 'Plumbing and Smart Home Fixes', cats: ['plumbing', 'smart-home'] },
];
/** The second pin goes out this many days after the first, to a different board, with a different image. */
export const B_DELAY_DAYS = 7;
const addDays = (d: string, n: number) => ymd(new Date(+new Date(d + 'T00:00:00Z') + n * DAY));

export async function pinBQueue(): Promise<{ post: Post; date: string }[]> {
  const t = todayIST();
  return (await getPublishedPosts())
    .map((post) => ({ post, date: addDays(pinDate(post), B_DELAY_DAYS) }))
    .filter((p) => p.date <= t)
    .sort((a, b) => b.date.localeCompare(a.date) || pinId(a.post).localeCompare(pinId(b.post)));
}

/** The first 3 numbered section headings of a guide ("## 1. Check the filter") become the pin's checklist. */
export function pinBInput(p: Post) {
  const cat = getCategory(p.data.category)!;
  const heads = [...(p.body ?? '').matchAll(/^##\s+\d+\.\s+(.+)$/gm)].map((m) => m[1].replace(/[*_`]/g, '').replace(/\s*\([^)]*\)/g, '').trim());
  const checks = heads.length >= 3 ? heads.slice(0, 3) : ['Find the cause step by step', 'Follow the diagrams', 'Know when to call a pro'];
  return {
    title: p.data.title,
    category: cat.name,
    color: cat.color,
    checks: checks.map((c) => (c.length > 58 ? c.slice(0, c.lastIndexOf(' ', 56)) : c)),
    label: p.data.fixcheck ? '3 quick checks' : '3 key steps',
    more: heads.length > 3 ? `Plus ${heads.length - 3} more ${p.data.fixcheck ? 'fixes' : 'steps'}, diagrams and safety tips` : 'With diagrams and safety tips',
  };
}
