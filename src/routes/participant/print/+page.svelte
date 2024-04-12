<script lang="ts">
	import { micromark } from 'micromark';
	import { onMount } from 'svelte';

	import lang from '$lib/stores/lang.js';
	import Question from '$lib/components/Question.svelte';
	import Title from '$lib/components/Title.svelte';
	import ParticipantOverview from '$lib/components/ParticipantOverview.svelte';

	export let data;

	onMount(() => {
		window.print();
	});
</script>

<div class="print-grid-container">
	<div>
		<h6>{data.pagesContent[$lang].home.pretitle}</h6>
		<h1>{data.pagesContent[$lang].home.title}</h1>
		<p>{@html micromark(data.pagesContent[$lang].home.content)}</p>
	</div>

	<div>
		{#each data.participantContent[$lang].themes as theme (theme.slug)}
			<div style="margin-top: 4rem; margin-bottom: 4rem">
				<Title themeTitle={theme.title} themeContent={theme.content} {data} />

				{#each theme.questions as question (question.slug)}
					<Question audience="participant" {question} {data} />
				{/each}
			</div>
		{/each}
	</div>

	<div>
		<h2>{data.pagesContent[$lang].participantOverview.title}</h2>
		<p>{@html micromark(data.pagesContent[$lang].participantOverview.content)}</p>
	</div>

	<ParticipantOverview {data} />

	<hr />

	<div>
		<h2>{data.pagesContent[$lang].participantAbout.title}</h2>
		<p>{@html micromark(data.pagesContent[$lang].participantAbout.content)}</p>
	</div>
</div>

<style>
	.print-grid-container {
		display: grid;
		grid-template-columns: 1f;
		grid-column-gap: 1rem;
	}
</style>
