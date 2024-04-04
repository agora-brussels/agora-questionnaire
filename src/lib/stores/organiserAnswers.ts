import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Initialise store
const organiserAnswers = writable<any>({});
const localStorageItem = 'organiserAnswers';

// Run this code only on client, not e.g. during ssr or pre-rendering
if (browser) {
	// Load previously saved answers from localStorage
	const storedAnswers = localStorage.getItem(localStorageItem);
	if (storedAnswers) {
		organiserAnswers.set(JSON.parse(storedAnswers));
	}

	// Subscribe to changes in the answers store and save answers to localStorage
	organiserAnswers.subscribe((value) => {
		localStorage.setItem(localStorageItem, JSON.stringify(value));
	});
}

export default organiserAnswers;
