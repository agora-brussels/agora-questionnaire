<script lang="ts">
	import answers from '$lib/store.js';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Options from '../../../components/Options.svelte';

	export let data;

	const themeSlug: string = $page.params.themeSlug;

	const previous = () => {
		goto(data.previousThemeSlug ? '/participant/' + data.previousThemeSlug : '/participant/');
	};
	const next = () => {
		goto(data.nextThemeSlug ? '/participant/' + data.nextThemeSlug : '/overview/');
	};
</script>

<div style="margin-bottom: 50px; margin-top: 10px">
	<nav>
		<button class="outline" on:click={previous}>◀︎</button>
		<!-- <select name="select" aria-label="Select" required>
			{#each data.participant.themes as themeItem}
				<option disabled={themeItem.slug === themeSlug} selected={themeItem.slug === themeSlug}
					>{themeItem.title}</option
				>
			{/each}
		</select> -->
		<hgroup>
			<h1>{data.theme.title}</h1>
			<p>{@html data.theme.content}</p>
		</hgroup>
		<button class="outline" on:click={next}>►</button>
	</nav>
</div>

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

<nav>
	<button class="outline" on:click={previous}>◀︎</button>
	<button class="outline" on:click={next}>►</button>
</nav>

<p>At theme: {themeSlug}</p>
<p>Store: {JSON.stringify($answers)}</p>