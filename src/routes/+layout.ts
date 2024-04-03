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
	let organiserContentImproved = {
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

	organiserContentImproved.themes = organiserContentImproved.chapters
		.map((chapter: any) => chapter.themes)
		.flat();
	organiserContentImproved.questions = organiserContentImproved.themes
		.map((theme: any) => theme.questions)
		.flat();

	return {
		pagesContent,
		participantContent,
		organiserContent: organiserContentImproved
	};
}) satisfies LayoutLoad;

export const prerender = true;
export const trailingSlash = 'always';
