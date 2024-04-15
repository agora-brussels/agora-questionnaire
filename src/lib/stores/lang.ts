import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const lang = writable<string>('fr');
const localStorageItem = 'lang';

export const langs = ['fr', 'nl'];

// Run this code only on client, not e.g. during ssr or pre-rendering
if (browser) {
	// Load previously saved answers from localStorage
	const storedLang = localStorage.getItem(localStorageItem);
	if (storedLang) {
		lang.set(JSON.parse(storedLang));
	}

	// Subscribe to changes in the answers store and save answers to localStorage
	lang.subscribe((value) => {
		localStorage.setItem(localStorageItem, JSON.stringify(value));
	});
}

export default lang;
