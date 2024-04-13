<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';

	export let chapterTitle: string = '';
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
		grid-column-gap: 1rem;"
>
	{#if chapterTitle}
		<h6 style="font-weight:300">{data.pagesContent[$lang].general.chapter}</h6>
		<h6 style="margin-bottom: 0.5rem">
			{chapterTitle}
		</h6>
	{/if}
	<h3 style="font-weight:300">{data.pagesContent[$lang].general.theme}</h3>
	<h3>{themeTitle}</h3>
	<div />
	<p><em>{@html micromark(themeContent)}</em></p>
</div>
