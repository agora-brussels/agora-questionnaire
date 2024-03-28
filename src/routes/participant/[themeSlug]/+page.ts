import { error } from '@sveltejs/kit';
import participants from '$lib/content/participant.yml';

export function load({ params }) {
	const theme = participants.themes.find((theme: any) => theme.slug === params.themeSlug);

	if (!theme) throw error(404);

	const themeIndex = participants.themes.indexOf(theme);
	let previousThemeSlug;
	if (themeIndex == 0) {
		previousThemeSlug = undefined;
	} else {
		previousThemeSlug = participants.themes[themeIndex - 1].slug;
	}
	let nextThemeSlug;
	if (themeIndex + 1 == participants.themes.length) {
		nextThemeSlug = undefined;
	} else {
		nextThemeSlug = participants.themes[themeIndex + 1].slug;
	}

	return {
		theme,
		themeIndex,
		previousThemeSlug,
		nextThemeSlug
	};
}
