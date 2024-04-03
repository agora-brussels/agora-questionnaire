import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Initialise store
const answers = writable<any>({});

// Run this code only on client, not e.g. during ssr or pre-rendering
if (browser) {
	console.log('browser');
	// Load previously saved answers from localStorage
	const storedAnswers = localStorage.getItem('answers');
	if (storedAnswers) {
		const parsedAnswers = JSON.parse(storedAnswers);
		console.log('parsedAnswers', parsedAnswers);
		if (parsedAnswers.participant || parsedAnswers.organiser) answers.set(parsedAnswers);
	}

	// Subscribe to changes in the answers store and save answers to localStorage
	answers.subscribe((value) => {
		localStorage.setItem('answers', JSON.stringify(value));
	});
}

export default answers;
