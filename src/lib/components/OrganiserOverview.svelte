<script lang="ts">
	import { base } from '$app/paths';
	import Indicator from '$lib/components/Indicator.svelte';

	export let currentQuestionSlug = '';

	console.log(currentQuestionSlug);

	export let data: any;
</script>

<div class="chapter-overview-grid-container">
	{#each data.organiserContent.chapters as chapter (chapter.slug)}
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
								><div style="display: flex; margin: 0.5rem">
									<div style="width: 1.5rem">
										<Indicator audience="organiser" questionSlug={question.slug} />
									</div>
									<div
										style="width: 7rem; font-size:smaller; font-weight:{currentQuestionSlug ==
										question.slug
											? 650
											: undefined}; color:{currentQuestionSlug == question.slug
											? '#047878'
											: undefined}"
									>
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
		margin-top: 2rem;
		margin-bottom: 2rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
	}
	@media screen and (max-width: 768px) {
		.chapter-overview-grid-container {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.theme-overview-grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 0.5rem;
		grid-row-gap: 0.5rem;
	}
	@media screen and (max-width: 768px) {
		.theme-overview-grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
