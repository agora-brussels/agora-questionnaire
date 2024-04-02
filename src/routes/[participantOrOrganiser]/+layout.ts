import pagesContent from '$lib/content/pagesContent.yml';
import participantContent from '$lib/content/participantContent.yml';
import organiserContent from '$lib/content/organiserContent.yml';

import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
	const participantOrOrganiser = params.participantOrOrganiser;

	const participantOrOrganiserContent =
		participantOrOrganiser == 'participant' ? participantContent : organiserContent;
	const participantOrOrganiserContentThemes =
		participantOrOrganiser == 'participant'
			? participantContent.themes
			: organiserContent.chapters.map((chapter: any) => chapter.themes).flat();

	const participantOrOrganiserPagesContent =
		participantOrOrganiser == 'participant' ? pagesContent.participant : pagesContent.organiser;

	return {
		participantOrOrganiser,
		participantOrOrganiserContent,
		participantOrOrganiserContentThemes,
		participantOrOrganiserPagesContent,
		participantContent,
		organiserContent
	};
}) satisfies LayoutLoad;
