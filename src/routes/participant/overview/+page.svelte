<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import participantAnswers from '$lib/stores/participantAnswers.js';
	import img from '$lib/img/31-100.jpg';
	import ParticipantOverview from '$lib/components/ParticipantOverview.svelte';
	import Legend from '$lib/components/Legend.svelte';

	export let data;

	let openResetDialog: boolean = false;
</script>

<div class="grid-container">
	<div style="margin-bottom:1rem">
		<h2>{data.pagesContent[$lang].participantOverview.title}</h2>
		<p style="margin-bottom: 2rem">
			{@html micromark(data.pagesContent[$lang].participantOverview.content)}
		</p>

		<ParticipantOverview {data} />
		<Legend {data} />

		<button
			on:click={() => {
				goto(base + '/participant/print');
			}}
			class="outline">{data.pagesContent[$lang].participantOverview.print}</button
		>
		<button
			on:click={() => {
				openResetDialog = true;
			}}
			class="secondary outline">{data.pagesContent[$lang].participantOverview.reset}</button
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
		<h2>{data.pagesContent[$lang].participantOverview.reset}</h2>
		<footer>
			<button
				on:click={() => {
					openResetDialog = false;
				}}
				class="secondary outline">{data.pagesContent[$lang].participantOverview.cancel}</button
			>
			<button
				on:click={() => {
					participantAnswers.set({});
					openResetDialog = false;
				}}
				class="outline">{data.pagesContent[$lang].participantOverview.confirm}</button
			>
		</footer>
	</article>
</dialog>

<style>
	p {
		max-width: 600px;
	}

	button {
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
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
</style>
