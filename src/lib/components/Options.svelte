<script lang="ts">
	import answers from '$lib/stores/answers.js';
	import { createEventDispatcher } from 'svelte';

	const options = ['yes', 'unsure', 'no'];
	const optionsTranslated = new Map([
		['yes', 'Oui'],
		['unsure', 'Incertain'],
		['no', 'Non']
	]);

	// Read audience
	export let audience: string = '';

	// Read slug
	export let questionSlug: string = '';

	// Define answer and look up existing answer in store
	let answer: string = $answers[audience] ? $answers[audience][questionSlug] : undefined;

	// Select function to change the answer variable on click
	const dispatch = createEventDispatcher();
	const select = (option: string) => () => {
		answer = answer == option ? '' : option;
		dispatch('submit'); // Not used anymore
	};

	// Update store when answer changes
	$: answers.update((answers) => {
		if (!answers[audience]) {
			answers[audience] = {};
		}
		answers[audience][questionSlug] = answer;
		return answers;
	});
</script>

<div style="margin-top: 20px; max-width: 600px" role="group">
	{#each options as option}
		<button class={answer === option ? '' : 'outline'} on:click={select(option)}
			>{optionsTranslated.get(option)}</button
		>
	{/each}
</div>
