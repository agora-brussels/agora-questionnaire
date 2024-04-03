import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
	const { organiserContent } = await parent();

	const question = organiserContent.questions.find(
		(questions: any) => questions.slug === params.questionSlug
	);

	if (!question) throw error(404, 'Question not found');

	// const themeIndex = organiserContent.themes.indexOf(theme);
	// let previousThemeSlug;
	// if (themeIndex == 0) {
	// 	previousThemeSlug = undefined;
	// } else {
	// 	previousThemeSlug = organiserContent.themes[themeIndex - 1].slug;
	// }
	// let nextThemeSlug;
	// if (themeIndex + 1 == organiserContent.themes.length) {
	// 	nextThemeSlug = undefined;
	// } else {
	// 	nextThemeSlug = organiserContent.themes[themeIndex + 1].slug;
	// }

	return {
		question
		// themeIndex,
		// previousThemeSlug,
		// nextThemeSlug
	};
}
