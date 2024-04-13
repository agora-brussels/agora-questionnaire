<script lang="ts">
	import lang from '$lib/stores/lang.js';
	import { base } from '$app/paths';
	import Indicator from '$lib/components/Indicator.svelte';

	export let currentQuestionSlug = '';

	export let data: any;

	$: organiserContentLangImproved = data.improveOrganiserContentLang(data.organiserContent[$lang]);
</script>

<div class="chapter-overview-grid-container">
	{#each organiserContentLangImproved.chapters as chapter (chapter.slug)}
		<div>
			<h5>{chapter.title}</h5>
			<div class="theme-overview-grid-container">
				{#each chapter.themes as theme (theme.slug)}
					<div>
						<h6>{theme.title}</h6>
						{#each theme.questions as question (question.slug)}
							<a
								style="text-decoration:none; color: #373c44"
								href="{base}/organiser/{theme.slug}/{question.slug}"
								><div
									style="
										display: flex; 
										margin: 0.1rem; 
										padding-top: 0.2rem; 
										padding-left: 0.25rem; 
										border-radius: 0px; 
										border-width: 0.0625rem;
  										border-color: rgba(24, 28, 37, 0.5);
  										border-style:{currentQuestionSlug == question.slug ? 'solid' : undefined};
										"
								>
									<div style="width: 1.5rem">
										<Indicator audience="organiser" questionSlug={question.slug} />
									</div>
									<div style="width: 8.2rem; font-size:smaller">
										{question.title}
									</div>
								</div></a
							>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.chapter-overview-grid-container {
		margin-top: 1rem;
		margin-bottom: 1rem;
		padding: 1rem;
		border-style: none none solid solid;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 0.3rem;
		grid-row-gap: 0.3rem;
	}
	@media screen and (max-width: 768px) {
		.chapter-overview-grid-container {
			grid-template-columns: repeat(1, 1fr);
		}
	}
	@media print {
		.chapter-overview-grid-container {
			border-style: none;
		}
	}

	.theme-overview-grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 0rem;
		grid-row-gap: 0.3rem;
	}
	@media screen and (max-width: 768px) {
		.theme-overview-grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
