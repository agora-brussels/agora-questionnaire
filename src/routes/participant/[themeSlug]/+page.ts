import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
	const { participantContent } = await parent();

	const theme = participantContent.themes.find((theme: any) => theme.slug === params.themeSlug);

	if (!theme) throw error(404, 'Theme not found');

	const themeIndex = participantContent.themes.indexOf(theme);
	let previousThemeSlug;
	if (themeIndex == 0) {
		previousThemeSlug = undefined;
	} else {
		previousThemeSlug = participantContent.themes[themeIndex - 1].slug;
	}
	let nextThemeSlug;
	if (themeIndex + 1 == participantContent.themes.length) {
		nextThemeSlug = undefined;
	} else {
		nextThemeSlug = participantContent.themes[themeIndex + 1].slug;
	}

	return {
		theme,
		themeIndex,
		previousThemeSlug,
		nextThemeSlug
	};
}
