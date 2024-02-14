import { questions } from '$lib/data.js';

import type { LayoutLoad } from './$types';

export const load = (async () => {
	return {
		summaries: questions.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = 'always';
