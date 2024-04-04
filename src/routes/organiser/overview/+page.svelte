<script lang="ts">
	import { micromark } from 'micromark';

	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import organiserAnswers from '$lib/stores/organiserAnswers.js';
	import img from '$lib/img/31-100.jpg';
	import OrganiserNav from '$lib/components/OrganiserNav.svelte';

	export let data;

	let openResetDialog: boolean = false;
</script>

<div class="grid-container">
	<div>
		<h2>{data.pagesContent.overview.title}</h2>
		<p>{@html micromark(data.pagesContent.overview.content)}</p>

		<OrganiserNav {data} />

		<button
			on:click={() => {
				goto(base + '/organiser/print');
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
					organiserAnswers.set({});
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
</style>
