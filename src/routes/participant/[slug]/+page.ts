import { error } from '@sveltejs/kit';
import participants from '$lib/participant.json';

export function load({ params }) {
	const theme = participants.themes.find((theme) => theme.slug === params.slug);

	if (!theme) throw error(404);

	const themeIndex = participants.themes.indexOf(theme);
	let nextSlug;
	if (themeIndex + 1 == participants.themes.length) {
		nextSlug = undefined;
	} else {
		nextSlug = participants.themes[themeIndex + 1].slug;
	}

	return {
		theme,
		themeIndex,
		nextSlug
	};
}
