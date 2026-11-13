import type { APIRoute } from 'astro';
import { pinBQueue, pinId, pinBInput } from '../../../lib/pins';
import { pinBJpg } from '../../../lib/pin-image';

// Second pin image per guide (/pins/b/<category>/<slug>.jpg), only once it is released to a board feed.
export async function getStaticPaths() {
  return (await pinBQueue()).map(({ post }) => ({ params: { path: pinId(post) }, props: { o: pinBInput(post) } }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await pinBJpg((props as any).o)), { headers: { 'Content-Type': 'image/jpeg' } });
