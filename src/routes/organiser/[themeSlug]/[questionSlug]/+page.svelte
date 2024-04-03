<script lang="ts">
	import { micromark } from 'micromark';

	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import Options from '$lib/components/Options.svelte';
	import OrganiserNav from '$lib/components/OrganiserNav.svelte';

	export let data;
</script>

<hgroup style="margin-left: 2rem; margin-bottom: 3rem">
	<h6 style="margin-bottom: 0.5rem">
		{data.pagesContent.general.chapter}: {data.question.chapterTitle}
	</h6>
	<h3>{data.pagesContent.general.theme}: {data.question.themeTitle}</h3>
	<p>{@html micromark(data.question.themeContent)}</p>
</hgroup>

<article>
	<header>
		{data.question.title}
	</header>
	<main>
		<div>{@html micromark(data.question.content)}</div>
		<details open>
			<summary class="outline">{data.pagesContent.general.more}</summary>
			<div style="font-size: smaller; margin: 1rem">{@html micromark(data.question.more)}</div>
		</details>
		<Options audience="organiser" bind:questionSlug={data.question.slug} />
	</main>
</article>

<nav style="margin-top: 2rem; margin-bottom: 4rem">
	<div>
		<button
			class="outline"
			style="margin-right:1rem"
			on:click={() => {
				goto(
					data.previousThemeSlug
						? base + '/organiser/' + data.previousThemeSlug
						: base + '/organiser/'
				);
			}}
			>◀︎ {data.previousThemeSlug
				? data.pagesContent.general.previousTheme
				: data.pagesContent.general.home}</button
		>
	</div>
	<!-- <p style="margin-top:0.75rem">
		{data.themeIndex + 1}/{data.organiserContent.themes.length}
	</p> -->
	<div>
		<button
			class="outline"
			style="margin-left:1rem"
			disabled={data.nextQuestionSlug ? false : true}
			on:click={() => {
				goto(
					data.nextQuestionSlug
						? base + '/organiser/' + data.question.themeSlug + '/' + data.nextQuestionSlug
						: '/organiser/overview/'
				);
			}}
			>{data.nextQuestionSlug
				? data.pagesContent.general.deeperTheme
				: data.pagesContent.general.overview} ▼</button
		>
	</div>
	<div>
		<button
			class="outline"
			style="margin-left:1rem"
			on:click={() => {
				goto(
					data.nextThemeSlug
						? base + '/organiser/' + data.nextThemeSlug + '/' + data.nextThemeNextQuestionSlug
						: '/organiser/overview/'
				);
			}}
			>{data.nextThemeSlug
				? data.pagesContent.general.nextTheme
				: data.pagesContent.general.overview} ►</button
		>
	</div>
</nav>

<OrganiserNav {data} />

<style>
	nav button {
		font-size: smaller;
	}
</style>
