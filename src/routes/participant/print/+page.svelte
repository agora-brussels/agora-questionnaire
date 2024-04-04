<script lang="ts">
	import { micromark } from 'micromark';
	import { onMount } from 'svelte';

	onMount(() => {
		window.print();
	});

	import Question from '$lib/components/Question.svelte';
	import Title from '$lib/components/Title.svelte';
	import ParticipantOverview from '$lib/components/ParticipantOverview.svelte';

	export let data;
</script>

<div class="print-grid-container">
	<div>
		<h6>{data.pagesContent.home.pretitle}</h6>
		<h1>{data.pagesContent.home.title}</h1>
		<p>{@html micromark(data.pagesContent.home.content)}</p>
	</div>

	<div>
		{#each data.participantContent.themes as theme (theme.slug)}
			<div style="margin-top: 4rem; margin-bottom: 4rem">
				<Title themeTitle={theme.title} themeContent={theme.content} {data} />

				{#each theme.questions as question (question.slug)}
					<Question audience="participant" {question} {data} />
				{/each}
			</div>
		{/each}
	</div>

	<div>
		<h2>{data.pagesContent.overview.title}</h2>
		<p>{@html micromark(data.pagesContent.overview.content)}</p>
	</div>

	<ParticipantOverview {data} />

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
