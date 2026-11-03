// Inlines post diagrams (<img src="/images/posts/*.svg">) into the HTML at build time,
// so the drawings use the page's own font (Open Sans) and colours.
import fs from 'node:fs';
import path from 'node:path';

const FONT = "'Open Sans Variable', 'Open Sans', Arial, sans-serif";

function walk(node, fn, parent) {
  fn(node, parent);
  if (node.children) for (const c of [...node.children]) walk(c, fn, node);
}

function inline(src, alt) {
  const file = path.join(process.cwd(), 'public', src);
  if (!fs.existsSync(file)) throw new Error(`Diagram not found: ${src}`);
  const id = path.basename(src, '.svg');
  return fs.readFileSync(file, 'utf8').trim()
    .replace(/font-family="[^"]*"/g, `font-family="${FONT}"`)
    .replace(/id="([^"]+)"/g, `id="${id}-$1"`)
    .replace(/url\(#([^)]+)\)/g, `url(#${id}-$1)`)
    .replace('<svg ', `<svg class="diagram" role="img" aria-label="${alt.replace(/"/g, '&quot;')}" `);
}

const IMG = /<img\s+[^>]*src="(\/images\/posts\/[^"]+\.svg)"[^>]*>/g;

export default function rehypeInlineSvg() {
  return (tree) => {
    walk(tree, (node) => {
      // Raw HTML written in Markdown (our <figure><img ...></figure> blocks)
      if (node.type === 'raw' && node.value.includes('/images/posts/')) {
        node.value = node.value.replace(IMG, (tag, src) => inline(src, (tag.match(/alt="([^"]*)"/) ?? [, ''])[1]));
      }
    });
    walk(tree, (node, parent) => {
      if (node.type !== 'element' || node.tagName !== 'img' || !parent) return;
      const src = String(node.properties?.src ?? '');
      if (!src.startsWith('/images/posts/') || !src.endsWith('.svg')) return;
      parent.children[parent.children.indexOf(node)] = { type: 'raw', value: inline(src, String(node.properties?.alt ?? '')) };
    });
  };
}
