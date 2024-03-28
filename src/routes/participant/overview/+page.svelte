<script lang="ts">
	import { micromark } from 'micromark';

	import { base } from '$app/paths';
	import answers from '$lib/stores/answers.js';
	import img from '$lib/img/31-100.jpg';
	import Indicator from '$lib/components/Indicator.svelte';

	export let data;

	let openResetDialog: boolean = false;
</script>

<h2>{data.pages.overview.title}</h2>

<p>{@html micromark(data.pages.overview.content)}</p>

<div class="grid-container">
	{#each data.participant.themes as theme (theme.slug)}
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

<!-- <div>
	{JSON.stringify($answers)}
</div> -->

<button
	on:click={() => {
		console.log(print);
	}}
	class="outline">{data.pages.overview.print}</button
>
<button
	on:click={() => {
		openResetDialog = true;
	}}
	class="secondary outline">{data.pages.overview.reset}</button
>

<dialog open={openResetDialog}>
	<article>
		<h2>{data.pages.overview.reset}</h2>
		<footer>
			<button
				on:click={() => {
					openResetDialog = false;
				}}
				class="secondary outline">{data.pages.overview.cancel}</button
			>
			<button
				on:click={() => {
					answers.set({});
					openResetDialog = false;
				}}
				class="outline">{data.pages.overview.confirm}</button
			>
		</footer>
	</article>
</dialog>

<div>
	<img
		src={img}
		alt="People"
		style="width: 100%;
    max-width: 800px;"
	/>
</div>

<style>
	.grid-container {
		margin-top: 2rem;
		margin-bottom: 2rem;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}

	@media screen and (max-width: 1280px) {
		.grid-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media screen and (max-width: 768px) {
		.grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
