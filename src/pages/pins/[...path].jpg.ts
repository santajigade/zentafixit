import type { APIRoute } from 'astro';
import { pinQueue, pinId, pinInput } from '../../lib/pins';
import { pinJpg } from '../../lib/pin-image';

// Tall Pinterest images (/pins/<category>/<slug>.jpg), only for guides already released to the pin feed (keeps builds fast).
export async function getStaticPaths() {
  return (await pinQueue()).map(({ post }) => ({ params: { path: pinId(post) }, props: { o: pinInput(post) } }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await pinJpg((props as any).o)), { headers: { 'Content-Type': 'image/jpeg' } });
