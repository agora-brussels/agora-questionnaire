<script lang="ts">
	import { micromark } from 'micromark';

	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import Options from '$lib/components/Options.svelte';

	import img from '$lib/img/14-100.jpg';

	export let data;
</script>

<div>
	{#if data.participantContent.hint}
		<div style="display: grid; grid-template-columns: auto 6rem">
			<article style="max-width: 400px; margin-left: 3rem; margin-bottom: 3rem; justify-self: end;">
				<div style="display: flex">
					<div style="margin-top: 0.3rem; margin-right: 1rem">💡</div>
					<div style="font-size:smaller; color:gray">
						{data.participantContent.hint}
					</div>
				</div>
			</article>
			<img src={img} alt="People" style="height: 150px; margin-left: 2rem" />
		</div>
	{/if}
	<hgroup style="margin-left: 2rem; margin-bottom: 3rem">
		<h3>{data.pagesContent.general.theme}: {data.theme.title}</h3>
		<p>{@html micromark(data.theme.content)}</p>
	</hgroup>
</div>

{#each data.theme.questions as question (question.slug)}
	<article>
		<header>
			{question.title}
		</header>
		<main>
			<div>{@html micromark(question.content)}</div>
			<Options audience="participant" bind:questionSlug={question.slug} />
		</main>
	</article>
{/each}

<nav style="margin-top: 2rem; margin-bottom: 4rem">
	<div>
		<button
			class="outline"
			style="margin-right:1rem"
			on:click={() => {
				goto(data.previousThemeSlug ? base + '/participant/' + data.previousThemeSlug : '/');
			}}
			>◀︎ {data.previousThemeSlug
				? data.pagesContent.general.previousTheme
				: data.pagesContent.general.home}</button
		>
	</div>
	<p style="margin-top:0.75rem">
		{data.themeIndex + 1}/{data.participantContent.themes.length}
	</p>
	<div>
		<button
			class="outline"
			style="margin-left:1rem"
			on:click={() => {
				goto(
					data.nextThemeSlug
						? base + '/participant/' + data.nextThemeSlug
						: '/participant/overview/'
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

	nav button {
		font-size: smaller;
	}
</style>
