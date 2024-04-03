import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
	const { organiserContent } = await parent();

	const theme = organiserContent.themes.find((theme: any) => theme.slug === params.themeSlug);

	if (!theme) throw error(404, 'Theme not found');

	const themeIndex = organiserContent.themes.indexOf(theme);
	let previousThemeSlug;
	if (themeIndex == 0) {
		previousThemeSlug = undefined;
	} else {
		previousThemeSlug = organiserContent.themes[themeIndex - 1].slug;
	}
	let nextThemeSlug;
	if (themeIndex + 1 == organiserContent.themes.length) {
		nextThemeSlug = undefined;
	} else {
		nextThemeSlug = organiserContent.themes[themeIndex + 1].slug;
	}

	return {
		theme,
		themeIndex,
		previousThemeSlug,
		nextThemeSlug
	};
}
