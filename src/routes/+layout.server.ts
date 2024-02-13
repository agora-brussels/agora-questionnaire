import { questions } from '$lib/data.js';

import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	return {
		summaries: questions.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}) satisfies LayoutServerLoad;
