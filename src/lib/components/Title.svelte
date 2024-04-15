<script lang="ts">
	import lang from '$lib/stores/lang.js';

	export let chapterTitle: string = '';
	export let chapterContent: string = '';
	export let themeTitle: string;
	export let themeContent: string;

	export let data: any;
</script>

<div
	style="
		padding-left: 1rem; 
		margin-bottom: 1rem; 
		display: grid;
		grid-template-columns: 5rem auto;
		grid-column-gap: 0rem;
		align-items: flex-end;
		max-width: 800px"
>
	{#if chapterTitle}
		<h3 class="hchapter qualifier">
			{data.pagesContent[$lang].general.chapter.toLocaleUpperCase()}
		</h3>
		<h3 class="hchapter">
			{chapterTitle.toLocaleUpperCase()}
		</h3>
		<div />
		<p style="font-stretch: expanded; font-weight: 600">{chapterContent}</p>
	{/if}
	<h4 class="htheme qualifier">
		{data.pagesContent[$lang].general.theme.toLocaleUpperCase()}
	</h4>
	<h4 class="htheme">{themeTitle}</h4>
	<div />
	<p style="font-stretch: expanded; font-weight: 600">{themeContent}</p>
</div>

<style>
	.hchapter {
		font-stretch: expanded;
		font-weight: 600;
		margin: 0rem;
	}
	.htheme {
		font-stretch: expanded;
		font-weight: 600;
		margin: 0rem;
	}
	.qualifier {
		font-weight: 300;
		font-stretch: condensed;
		font-size: 1rem;
	}
</style>
