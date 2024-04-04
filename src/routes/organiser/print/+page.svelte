<script lang="ts">
	import { micromark } from 'micromark';
	import { onMount } from 'svelte';

	onMount(() => {
		window.print();
	});

	import Title from '$lib/components/Title.svelte';
	import Question from '$lib/components/Question.svelte';
	import OrganiserOverview from '$lib/components/OrganiserOverview.svelte';

	export let data;
</script>

<div class="print-grid-container">
	<div>
		{#if data.pagesContent.organiser.pretitle}
			<h6>{data.pagesContent.organiser.pretitle}</h6>
		{/if}
		<h1>{data.pagesContent.organiser.title}</h1>
		<p>{@html micromark(data.pagesContent.organiser.content)}</p>
	</div>

	<hr />

	<div>
		{#each data.organiserContent.themes as theme (theme.slug)}
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
		<h2>{data.pagesContent.overview.title}</h2>
		<p>{@html micromark(data.pagesContent.overview.content)}</p>
	</div>

	<OrganiserOverview {data} />

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
