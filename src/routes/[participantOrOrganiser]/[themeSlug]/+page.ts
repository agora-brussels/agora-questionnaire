import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
	const { participantOrOrganiserContentThemes } = await parent();

	const theme = participantOrOrganiserContentThemes.find(
		(theme: any) => theme.slug === params.themeSlug
	);

	if (!theme) throw error(404);

	const themeIndex = participantOrOrganiserContentThemes.indexOf(theme);
	let previousThemeSlug;
	if (themeIndex == 0) {
		previousThemeSlug = undefined;
	} else {
		previousThemeSlug = participantOrOrganiserContentThemes[themeIndex - 1].slug;
	}
	let nextThemeSlug;
	if (themeIndex + 1 == participantOrOrganiserContentThemes.length) {
		nextThemeSlug = undefined;
	} else {
		nextThemeSlug = participantOrOrganiserContentThemes[themeIndex + 1].slug;
	}

	return {
		theme,
		themeIndex,
		previousThemeSlug,
		nextThemeSlug
	};
}
