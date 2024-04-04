<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import Hint from '$lib/components/Hint.svelte';
	import NavButton from '$lib/components/NavButton.svelte';
	import Question from '$lib/components/Question.svelte';
	import Title from '$lib/components/Title.svelte';

	import img from '$lib/img/14-100.jpg';

	export let data;
</script>

<Hint hint={data.participantContent.hint} {img} />

<Title themeTitle={data.theme.title} themeContent={data.theme.content} {data} />

{#each data.theme.questions as question (question.slug)}
	<Question audience="participant" {question} {data} />
{/each}

<nav style="margin-top: 2rem; margin-bottom: 4rem">
	<NavButton
		content={data.previousThemeSlug
			? data.pagesContent.general.previousTheme
			: data.pagesContent.general.home}
		direction="left"
		on:click={() => {
			goto(data.previousThemeSlug ? base + '/participant/' + data.previousThemeSlug : '/');
		}}
	/>
	<p style="margin-top:0.75rem">
		{data.themeIndex + 1}/{data.participantContent.themes.length}
	</p>
	<NavButton
		content={data.nextThemeSlug
			? data.pagesContent.general.nextTheme
			: data.pagesContent.general.overview}
		direction="right"
		on:click={() => {
			goto(
				data.nextThemeSlug ? base + '/participant/' + data.nextThemeSlug : '/participant/overview/'
			);
		}}
	/>
</nav>
