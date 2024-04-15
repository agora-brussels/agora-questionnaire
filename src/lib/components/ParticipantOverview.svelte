<script lang="ts">
	import lang from '$lib/stores/lang.js';
	import { base } from '$app/paths';
	import Indicator from '$lib/components/Indicator.svelte';

	export let currentThemeSlug = '';

	export let data: any;

	$: participantContentLang = data.participantContent[$lang];
</script>

<div class="overview-grid-container">
	{#each participantContentLang.themes as theme (theme.slug)}
		<div>
			<h6 style="font-size:smaller">
				<a
					style="text-decoration:none; color: var(--pico-text-color)"
					href="{base}/participant/{theme.slug}"
					><div
						style="
						display: flex; 
						margin: 0.0rem; 
						margin-top: 0.5rem; 
						padding-top: 0.5rem; 
						padding-left: 0.5rem; 
						padding-right: 0.5rem; 
						padding-bottom: 0.5rem; 
						border-radius: 0px; 
						border-width: 0.0625rem;
						border-color: var(--pico-secodary);
						border-style:solid;
						color: {currentThemeSlug == theme.slug ? 'var(--pico-primary)' : undefined};
						font-weight: {currentThemeSlug == theme.slug ? '600' : undefined};
						"
					>
						{theme.title}
					</div></a
				>
			</h6>
			{#each theme.questions as question (question.slug)}
				<div style="display: flex; margin: 0.5rem">
					<div style="width: 1.5rem">
						<Indicator audience="participant" questionSlug={question.slug} />
					</div>
					<div style="width: 8rem; font-size:smaller">
						{question.title}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.overview-grid-container {
		margin-top: 1rem;
		margin-bottom: 1rem;
		padding: 1rem;
		border-style: solid;
		border-width: 1px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
	}
	@media screen and (max-width: 768px) {
		.overview-grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media print {
		.overview-grid-container {
			border-style: none;
		}
	}
</style>
