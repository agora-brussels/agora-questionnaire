import { error } from '@sveltejs/kit';
import { questions } from '$lib/data.js';

export function load({ params }) {
	const question = questions.find((question) => question.slug === params.slug);

	if (!question) throw error(404);

	return {
		question
	};
}
