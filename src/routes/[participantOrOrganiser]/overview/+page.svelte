<script lang="ts">
	import { micromark } from 'micromark';

	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import answers from '$lib/stores/answers.js';
	import img from '$lib/img/31-100.jpg';
	import Indicator from '$lib/components/Indicator.svelte';

	export let data;

	let openResetDialog: boolean = false;
</script>

<div class="grid-container">
	<div>
		<h2>{data.pagesContent.overview.title}</h2>
		<p>{@html micromark(data.pagesContent.overview.content)}</p>

		<div class="overview-grid-container">
			{#each data.participantOrOrganiserContent.themes as theme (theme.slug)}
				<div>
					<p><a href="{base}/participant/{theme.slug}">{theme.title}</a></p>
					{#each theme.questions as question (question.slug)}
						<div style="display: flex; margin: 0.5rem">
							<div style="width: 1.5rem">
								<Indicator questionSlug={question.slug} />
							</div>
							<div style="width: 8rem">
								{question.title}
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>

		<button
			on:click={() => {
				goto(base + '/participant/print');
			}}
			class="outline">{data.pagesContent.overview.print}</button
		>
		<button
			on:click={() => {
				openResetDialog = true;
			}}
			class="secondary outline">{data.pagesContent.overview.reset}</button
		>
	</div>

	<img
		src={img}
		alt="People"
		style="width: 100%;
		max-width: 800px;"
	/>
</div>

<dialog open={openResetDialog}>
	<article>
		<h2>{data.pagesContent.overview.reset}</h2>
		<footer>
			<button
				on:click={() => {
					openResetDialog = false;
				}}
				class="secondary outline">{data.pagesContent.overview.cancel}</button
			>
			<button
				on:click={() => {
					answers.set({});
					openResetDialog = false;
				}}
				class="outline">{data.pagesContent.overview.confirm}</button
			>
		</footer>
	</article>
</dialog>

<style>
	p {
		max-width: 600px;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1rem;
	}

	@media screen and (max-width: 1024px) {
		.grid-container {
			grid-template-columns: 1fr;
		}
	}

	.overview-grid-container {
		margin-top: 2rem;
		margin-bottom: 2rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
	@media screen and (max-width: 768px) {
		.overview-grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
