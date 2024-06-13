<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import organiserAnswers from '$lib/stores/organiserAnswers.js';
	import svg from '$lib/svg/welcome.svg';
	import OrganiserOverview from '$lib/components/OrganiserOverview.svelte';
	import Legend from '$lib/components/Legend.svelte';

	export let data;

	let openResetDialog: boolean = false;
</script>

<div class="grid-container">
	<div style="margin-bottom:1rem">
		<h2>{data.pagesContent[$lang].organiserOverview.title}</h2>
		<p style="margin-bottom: 2rem">
			{@html micromark(data.pagesContent[$lang].organiserOverview.content)}
		</p>

		<OrganiserOverview {data} />
		<Legend {data} />

		<button
			on:click={() => {
				goto(base + '/organiser/print');
			}}
			class="outline">{data.pagesContent[$lang].organiserOverview.print}</button
		>
		<button
			on:click={() => {
				openResetDialog = true;
			}}
			class="secondary outline">{data.pagesContent[$lang].organiserOverview.reset}</button
		>
	</div>

	<img
		src={svg}
		alt="Welcome"
		style="width: 100%;
		max-width: 800px;"
	/>
</div>

<dialog open={openResetDialog}>
	<article>
		<h2>{data.pagesContent[$lang].organiserOverview.reset}</h2>
		<footer>
			<button
				on:click={() => {
					openResetDialog = false;
				}}
				class="secondary outline">{data.pagesContent[$lang].organiserOverview.cancel}</button
			>
			<button
				on:click={() => {
					organiserAnswers.set({});
					openResetDialog = false;
				}}
				class="outline">{data.pagesContent[$lang].organiserOverview.confirm}</button
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
