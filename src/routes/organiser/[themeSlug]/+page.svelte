<script lang="ts">
	import { micromark } from 'micromark';

	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import Options from '$lib/components/Options.svelte';

	export let data;
</script>

<hgroup style="margin-left: 2rem; margin-bottom: 3rem">
	<h6 style="margin-bottom: 0.5rem">
		{data.pagesContent.general.chapter}: {data.theme.chapterTitle}
	</h6>
	<h3>{data.pagesContent.general.theme}: {data.theme.title}</h3>
	<p>{@html micromark(data.theme.content)}</p>
</hgroup>

{#each data.theme.questions as question (question.slug)}
	<article>
		<header>
			{question.title}
		</header>
		<main>
			<div>{@html micromark(question.content)}</div>
			<details>
				<summary class="outline">{data.pagesContent.general.more}</summary>
				<small>{@html micromark(question.more)}</small>
			</details>
			<Options bind:questionSlug={question.slug} />
		</main>
	</article>
{/each}

<nav style="margin-top: 2rem; margin-bottom: 4rem">
	<div>
		<button
			class="outline"
			style="margin-right:1rem"
			on:click={() => {
				goto(data.previousThemeSlug ? base + '/organiser/' + data.previousThemeSlug : '/');
			}}
			>◀︎ {data.previousThemeSlug
				? data.pagesContent.general.previousTheme
				: data.pagesContent.general.home}</button
		>
	</div>
	<p style="margin-top:0.75rem">
		{data.themeIndex + 1}/{data.organiserContent.themes.length}
	</p>
	<div>
		<button
			class="outline"
			style="margin-left:1rem"
			on:click={() => {
				goto(
					data.nextThemeSlug ? base + '/organiser/' + data.nextThemeSlug : '/organiser/overview/'
				);
			}}
			>{data.nextThemeSlug
				? data.pagesContent.general.nextTheme
				: data.pagesContent.general.overview} ►</button
		>
	</div>
</nav>

<style>
	/* details summary {
		margin-top: 10px;
	}
	details summary::after {
		float: left;
	} */
</style>
