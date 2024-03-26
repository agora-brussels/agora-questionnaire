<script lang="ts">
	import answers from '$lib/store.js';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Options from '../../../components/Options.svelte';

	export let data;

	const slug: string = $page.params.slug;

	if (data.themeIndex + 1 == data.participant.themes.length) {
		data.nextSlug = undefined;
	} else {
		data.nextSlug = data.participant.themes[data.themeIndex + 1].slug;
	}

	const next = () => {
		if (data.nextSlug) {
			goto('/' + 'participant' + '/' + data.nextSlug);
		} else {
			goto('/overview');
		}
	};
</script>

<h1>{data.theme.title}</h1>
<div>{@html data.theme.content}</div>

{#each data.theme.questions as question}
	<h2>{question.title}</h2>
	<div>{@html question.content}</div>

	<Options bind:slug={question.slug} />
{/each}

<p>
	<button on:click={next}>Next</button>
</p>

<p>At: {slug}</p>
<p>Store: {JSON.stringify($answers)}</p>
