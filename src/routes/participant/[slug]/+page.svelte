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

<hgroup>
	<h1>{data.theme.title}</h1>
	<p>{@html data.theme.content}</p>
</hgroup>

{#each data.theme.questions as question (question.slug)}
	<article>
		<header>
			{question.title}
		</header>
		<main>
			<div>{@html question.content}</div>

			<Options bind:slug={question.slug} />
		</main>
	</article>
{/each}

<p>
	<button on:click={next}>Next</button>
</p>

<p>At: {slug}</p>
<p>Store: {JSON.stringify($answers)}</p>
