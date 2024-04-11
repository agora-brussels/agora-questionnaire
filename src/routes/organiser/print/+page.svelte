<script lang="ts">
	import { micromark } from 'micromark';
	import { onMount } from 'svelte';

	import lang from '$lib/stores/lang.js';
	import Title from '$lib/components/Title.svelte';
	import Question from '$lib/components/Question.svelte';
	import OrganiserOverview from '$lib/components/OrganiserOverview.svelte';

	onMount(() => {
		window.print();
	});

	export let data;
</script>

<div class="print-grid-container">
	<div>
		{#if data.pagesContent[$lang].organiser.pretitle}
			<h6>{data.pagesContent[$lang].organiser.pretitle}</h6>
		{/if}
		<h1>{data.pagesContent[$lang].organiser.title}</h1>
		<p>{@html micromark(data.pagesContent[$lang].organiser.content)}</p>
	</div>

	<hr />

	<div>
		{#each data.organiserContent[$lang].themes as theme (theme.slug)}
			<div style="margin-top: 2rem; margin-bottom: 2rem">
				<Title
					chapterTitle={theme.chapterTitle}
					themeTitle={theme.title}
					themeContent={theme.content}
					{data}
				/>

				{#each theme.questions as question (question.slug)}
					<Question audience="organiser" {question} {data} />
				{/each}
			</div>
		{/each}
	</div>

	<div>
		<h2>{data.pagesContent[$lang].organiserOverview.title}</h2>
		<p>{@html micromark(data.pagesContent[$lang].organiserOverview.content)}</p>
	</div>

	<OrganiserOverview {data} />

	<hr />

	<div>
		<h2>{data.pagesContent[$lang].organiserAbout.title}</h2>
		<p>{@html micromark(data.pagesContent[$lang].organiserAbout.content)}</p>
	</div>
</div>

<style>
	.print-grid-container {
		display: grid;
		grid-template-columns: 1f;
		grid-column-gap: 1rem;
	}
</style>
