<script lang="ts">
	import answers from '$lib/store.js';
	import { createEventDispatcher } from 'svelte';

	const options = ['yes', 'unsure', 'no'];

	// Read slug
	export let questionSlug: string = '';

	// Define answer and look up existing answer in store
	let answer: string = $answers[questionSlug];

	// Select function to change the answer variable on click
	const dispatch = createEventDispatcher();
	const select = (option: string) => () => {
		console.log('selecting');
		answer = answer == option ? '' : option;
		dispatch('submit'); // Not used anymore
	};

	// Update store when answer changes
	$: answers.update((answers) => {
		answers[questionSlug] = answer;
		return answers;
	});
</script>

<div style="margin-top: 20px; max-width: 600px" role="group">
	{#each options as option}
		<button class={answer === option ? '' : 'outline'} on:click={select(option)}
			>{option.toUpperCase()}</button
		>
	{/each}
</div>
