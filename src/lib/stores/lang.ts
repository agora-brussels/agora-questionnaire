import { writable } from 'svelte/store';

const lang = writable<string>('fr');
export default lang;

export const langs = ['fr', 'nl'];
