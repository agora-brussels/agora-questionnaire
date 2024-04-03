import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
	const { organiserContent } = await parent();

	const theme = organiserContent.themes.find((theme: any) => theme.slug === params.themeSlug);

	if (!theme) throw error(404, 'Theme not found');

	const themeIndex = organiserContent.themes.indexOf(theme);
	let nextThemeSlug;
	let nextThemeNextQuestionSlug;
	if (themeIndex + 1 == organiserContent.themes.length) {
		nextThemeSlug = undefined;
	} else {
		nextThemeSlug = organiserContent.themes[themeIndex + 1].slug;
		nextThemeNextQuestionSlug = organiserContent.themes[themeIndex + 1].questions[0].slug;
	}

	const question = theme.questions.find((question: any) => question.slug === params.questionSlug);

	if (!question) throw error(404, 'Question not found');

	const questionIndex = theme.questions.indexOf(question);
	let nextQuestionSlug;
	if (questionIndex + 1 == theme.questions.length) {
		nextQuestionSlug = undefined;
	} else {
		nextQuestionSlug = theme.questions[questionIndex + 1].slug;
	}

	return {
		theme,
		themeIndex,
		nextThemeSlug,
		nextThemeNextQuestionSlug,
		question,
		questionIndex,
		nextQuestionSlug
	};
}
