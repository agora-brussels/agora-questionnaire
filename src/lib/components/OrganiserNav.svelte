<script lang="ts">
	import Indicator from '$lib/components/Indicator.svelte';

	export let data: any;
	// export let questionSlug: string = '';
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
							<div style="display: flex; margin: 0.5rem">
								<div style="width: 1.5rem">
									<Indicator audience="organiser" questionSlug={question.slug} />
								</div>
								<div style="width: 7rem; font-size:smaller">
									{question.title}
								</div>
							</div>
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
