import pages from '$lib/content/pages.yml';
import participant from '$lib/content/participant.yml';

import type { LayoutLoad } from './$types';

export const load = (async () => {
	return {
		pages,
		participant
	};
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = 'always';
