import { error } from '@sveltejs/kit';
import participants from '$lib/participants.json';

export function load({ params }) {
	const theme = participants.themes.find((theme) => theme.slug === params.slug);

	if (!theme) throw error(404);

	return {
		theme
	};
}
