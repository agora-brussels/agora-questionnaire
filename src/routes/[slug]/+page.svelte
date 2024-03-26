<script lang="ts">
	import answers from '$lib/store.js';
	import { page } from '$app/stores';
	import Options from '../../components/Options.svelte';

	export let data;

	const slug: string = $page.params.slug;

	const next = () => {
		console.log('Go to next page');
	};
</script>

<h1>{data.theme.title}</h1>
<div>{@html data.theme.content}</div>

{#each data.theme.questions as question}
	<h2>{question.title}</h2>
	<div>{@html question.content}</div>

	<Options bind:slug={question.slug} on:submit={next} />
{/each}

<p>At: {slug}</p>
<p>Store: {JSON.stringify($answers)}</p>
