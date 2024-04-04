<script lang="ts">
	import participantAnswers from '$lib/stores/participantAnswers.js';
	import organiserAnswers from '$lib/stores/organiserAnswers.js';
	import { createEventDispatcher } from 'svelte';

	export let audience: string = '';
	export let questionSlug: string = '';

	export let data: any;

	const options = ['yes', 'unsure', 'no'];
	const optionsTranslated = new Map([
		['yes', data.pagesContent.general.yes],
		['unsure', data.pagesContent.general.unsure],
		['no', data.pagesContent.general.no]
	]);

	// Define answer and look up existing answer in store
	let answers = audience == 'participant' ? participantAnswers : organiserAnswers;
	let answer: string = $answers[questionSlug] ? $answers[questionSlug] : undefined;

	// Select function to change the answer variable on click
	const dispatch = createEventDispatcher();
	const select = (option: string) => () => {
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
			>{optionsTranslated.get(option)}</button
		>
	{/each}
</div>
