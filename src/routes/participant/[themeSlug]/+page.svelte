<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import Hint from '$lib/components/Hint.svelte';
	import Title from '$lib/components/Title.svelte';
	import Question from '$lib/components/Question.svelte';

	import img from '$lib/img/14-100.jpg';

	export let data;
</script>

<Hint hint={data.participantContent.hint} {img} />

<Title themeTitle={data.theme.title} themeContent={data.theme.content} {data} />

{#each data.theme.questions as question (question.slug)}
	<Question audience="participant" {question} {data} />
{/each}

<nav style="margin-top: 2rem; margin-bottom: 4rem">
	<div>
		<button
			class="outline"
			style="margin-right:1rem; font-size: smaller;"
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
			style="margin-left:1rem; font-size: smaller;"
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
