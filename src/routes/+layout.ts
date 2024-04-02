import pagesContent from '$lib/content/pagesContent.yml';

import type { LayoutLoad } from './$types';

export const load = (async () => {
	return {
		pagesContent
	};
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = 'always';
