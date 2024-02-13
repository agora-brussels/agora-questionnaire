import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Initialise store
const answers = writable<any>({});

console.log('browser', browser);

if (browser) {
	// Load previously saved answers from localStorage
	const storedAnswers = localStorage.getItem('answers');
	if (storedAnswers) {
		console.log('loading localStorage', storedAnswers);
		answers.set(JSON.parse(storedAnswers));
	}

	// Subscribe to changes in the answers store and save answers to localStorage
	answers.subscribe((value) => {
		console.log('updating localStorage', value);
		localStorage.setItem('answers', JSON.stringify(value));
	});
}

export default answers;
