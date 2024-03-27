import pages from '$lib/pages.json';
import participant from '$lib/participant.json';

import type { LayoutLoad } from './$types';

export const load = (async () => {
	return {
		pages,
		participant
	};
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = 'always';
