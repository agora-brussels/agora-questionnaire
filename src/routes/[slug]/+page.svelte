<script lang="ts">
	import answers from '$lib/store.js';
	import { page } from '$app/stores';
	import Options from '../../components/Options.svelte';

	export let data;

	const slug: string = $page.params.slug;

	let answer: string = $answers[slug];

	// This reactive statement udpates when answer changes
	$: answers.update((answers) => {
		answers[slug] = answer;
		return answers;
	});

	const next = () => {
		console.log('Go to next page');
	};
</script>

<h1>{data.question.title}</h1>
<div>{@html data.question.content}</div>

<Options bind:value={answer} on:submit={next} />

<p>Current answer: {answer}</p>

<p>At: {slug}</p>
<p>Store: {JSON.stringify($answers)}</p>
