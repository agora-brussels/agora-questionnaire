<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import lang from '$lib/stores/lang.js';

	import Hint from '$lib/components/Hint.svelte';
	import NavButton from '$lib/components/NavButton.svelte';
	import Question from '$lib/components/Question.svelte';
	import Title from '$lib/components/Title.svelte';

	import img from '$lib/img/14-100.jpg';
	import ParticipantOverview from '$lib/components/ParticipantOverview.svelte';

	export let data;

	$: theme = data.participantContent[$lang].themes.find(
		(theme: any) => theme.slug === data.params.themeSlug
	);

	$: themeIndex = data.participantContent[$lang].themes.indexOf(theme);

	let previousThemeSlug: string | undefined;
	$: if (themeIndex == 0) {
		previousThemeSlug = undefined;
	} else {
		previousThemeSlug = data.participantContent[$lang].themes[themeIndex - 1].slug;
	}

	let nextThemeSlug: string | undefined;
	$: if (themeIndex + 1 == data.participantContent[$lang].themes.length) {
		nextThemeSlug = undefined;
	} else {
		nextThemeSlug = data.participantContent[$lang].themes[themeIndex + 1].slug;
	}
</script>

<Hint hint={data.pagesContent[$lang].general.participantHint} {img} />

<Title themeTitle={theme.title} themeContent={theme.content} {data} />

{#each theme.questions as question (question.slug)}
	<Question audience="participant" {question} {data} />
{/each}

<nav style="margin-top: 2rem; margin-bottom: 4rem">
	<NavButton
		content={previousThemeSlug
			? data.pagesContent[$lang].general.previousTheme
			: data.pagesContent[$lang].general.home}
		direction="left"
		onClick={() => {
			goto(previousThemeSlug ? base + '/participant/' + previousThemeSlug : '/');
		}}
	/>
	<p style="margin-top:0.75rem">
		{themeIndex + 1}/{data.participantContent[$lang].themes.length}
	</p>
	<NavButton
		content={nextThemeSlug
			? data.pagesContent[$lang].general.nextTheme
			: data.pagesContent[$lang].general.overview}
		direction="right"
		onClick={() => {
			goto(nextThemeSlug ? base + '/participant/' + nextThemeSlug : '/participant/overview/');
		}}
	/>
</nav>

<ParticipantOverview {data} currentThemeSlug={theme.slug} />
