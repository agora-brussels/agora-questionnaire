import pagesContent from '$lib/content/pagesContent.yml';
import participantContent from '$lib/content/participantContent.yml';
import organiserContent from '$lib/content/organiserContent.yml';

import type { LayoutLoad } from './$types';

type OrganiserContent = {
	chapters: any;
	themes: any;
	questions: any;
};

export const load = (async () => {
	function improveOrganiserContentLang(organiserContent: any): OrganiserContent {
		organiserContent = {
			...organiserContent,
			chapters: organiserContent.chapters.map((chapter: any) => {
				return {
					...chapter,
					themes: chapter.themes.map((theme: any) => {
						return {
							...theme,
							chapterSlug: chapter.slug,
							chapterTitle: chapter.title,
							chapterContent: chapter.content,
							questions: theme.questions.map((question: any) => {
								return {
									...question,
									themeSlug: theme.slug,
									themeTitle: theme.title,
									themeContent: theme.content,
									chapterSlug: chapter.slug,
									chapterTitle: chapter.title,
									chapterContent: chapter.content
								};
							})
						};
					})
				};
			})
		} as OrganiserContent;

		organiserContent.themes = organiserContent.chapters
			.map((chapter: any) => chapter.themes)
			.flat();
		organiserContent.questions = organiserContent.themes
			.map((theme: any) => theme.questions)
			.flat();

		return organiserContent;
	}

	return {
		pagesContent,
		participantContent,
		organiserContent,
		improveOrganiserContentLang
	};
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = 'always';
