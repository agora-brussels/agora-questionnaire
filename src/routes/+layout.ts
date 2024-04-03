import pagesContent from '$lib/content/pagesContent.yml';
import participantContent from '$lib/content/participantContent.yml';
import organiserContent from '$lib/content/organiserContent.yml';

import type { LayoutLoad } from './$types';

export const load = (async () => {
	const organiserContentWithThemes = {
		...organiserContent,
		themes: organiserContent.chapters
			.map((chapter: any) =>
				chapter.themes.map((theme: any) => {
					return {
						...theme,
						chapterSlug: chapter.slug,
						chapterTitle: chapter.title,
						chapterContent: chapter.content
					};
				})
			)
			.flat()
	};
	const organiserContentWithThemesAndQuestions = {
		...organiserContentWithThemes,
		questions: organiserContentWithThemes.themes
			.map((theme: any) =>
				theme.questions.map((question: any) => {
					return {
						...question,
						themeSlug: theme.slug,
						themeTitle: theme.title,
						themeContent: theme.content,
						chapterSlug: theme.chapterSlug,
						chapterTitle: theme.chapterTitle,
						chapterContent: theme.chapterContent
					};
				})
			)
			.flat()
	};

	return {
		pagesContent,
		participantContent,
		organiserContent: organiserContentWithThemesAndQuestions
	};
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = 'always';
