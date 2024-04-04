<script lang="ts">
	import { base } from '$app/paths';
	import Indicator from '$lib/components/Indicator.svelte';

	export let data: any;
</script>

<div class="overview-grid-container">
	{#each data.participantContent.themes as theme (theme.slug)}
		<div>
			<h6>
				<a style="text-decoration:none; color: #646b79" href="{base}/participant/{theme.slug}"
					>{theme.title}</a
				>
			</h6>
			{#each theme.questions as question (question.slug)}
				<div style="display: flex; margin: 0.5rem">
					<div style="width: 1.5rem">
						<Indicator audience="participant" questionSlug={question.slug} />
					</div>
					<div style="width: 8rem">
						{question.title}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
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
