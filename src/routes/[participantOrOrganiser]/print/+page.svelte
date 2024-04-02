<script lang="ts">
	import { micromark } from 'micromark';
	import { onMount } from 'svelte';

	onMount(() => {
		window.print();
	});

	import Options from '$lib/components/Options.svelte';

	export let data;
</script>

<div class="print-grid-container">
	<div>
		<h6>{data.pagesContent.home.pretitle}</h6>
		<h1>{data.pagesContent.home.title}</h1>
		<p>{@html micromark(data.pagesContent.home.content)}</p>
	</div>

	<div>
		{#each data.participantOrOrganiserContent.themes as theme (theme.slug)}
			<div style="margin-top: 4rem; margin-bottom: 4rem">
				<hgroup>
					<h3>{theme.title}</h3>
					<p>{@html micromark(theme.content)}</p>
				</hgroup>

				{#each theme.questions as question (question.slug)}
					<article>
						<header>
							{question.title}
						</header>
						<main>
							<div>{@html micromark(question.content)}</div>
							<Options bind:questionSlug={question.slug} />
						</main>
					</article>
				{/each}
			</div>
		{/each}
	</div>

	<div>
		<h2>{data.pagesContent.overview.title}</h2>
		<p>{@html micromark(data.pagesContent.overview.content)}</p>
	</div>

	<hr />

	<div>
		<h2>{data.pagesContent.about.title}</h2>
		<p>{@html micromark(data.pagesContent.about.content)}</p>
	</div>
</div>

<style>
	.print-grid-container {
		display: grid;
		grid-template-columns: 1f;
		grid-column-gap: 1rem;
	}
</style>
