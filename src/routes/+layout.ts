import participants from '$lib/participants.json';

import type { LayoutLoad } from './$types';

export const load = (async () => {
	return {
		themes: participants.themes.map((theme) => ({
			slug: theme.slug,
			title: theme.title
		}))
	};
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = 'always';
