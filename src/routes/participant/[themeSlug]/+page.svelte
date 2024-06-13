<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import lang from '$lib/stores/lang.js';

	import Hint from '$lib/components/Hint.svelte';
	import NavButton from '$lib/components/NavButton.svelte';
	import Question from '$lib/components/Question.svelte';
	import Title from '$lib/components/Title.svelte';

	import ParticipantOverview from '$lib/components/ParticipantOverview.svelte';

	import accessibilitySvg from '$lib/svg/accessibility.svg';
	import accompaniementSvg from '$lib/svg/accompaniement.svg';
	import facilitationSvg from '$lib/svg/facilitation.svg';
	import followupSvg from '$lib/svg/followup.svg';
	import informationSvg from '$lib/svg/information.svg';
	import organisationSvg from '$lib/svg/organisation.svg';
	import productSvg from '$lib/svg/product.svg';
	import themeSvg from '$lib/svg/theme.svg';

	const svgs = [
		{ name: 'accessibility', svg: accessibilitySvg },
		{ name: 'accompaniement', svg: accompaniementSvg },
		{ name: 'facilitation', svg: facilitationSvg },
		{ name: 'followup', svg: followupSvg },
		{ name: 'information', svg: informationSvg },
		{ name: 'organisation', svg: organisationSvg },
		{ name: 'product', svg: productSvg },
		{ name: 'theme', svg: themeSvg }
	];

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

	$: svg = svgs.find((svg) => svg.name == theme.slug)?.svg || '';
</script>

<Hint hint={data.pagesContent[$lang].general.participantHint} />

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

{#if svg}
	<div>
		<img
			src={svg}
			alt="People"
			style="display: block;
				margin-left: auto;
				margin-right: auto;
				width: 40%;
				min-width: 20rem;
				transform: scale(1)"
		/>
	</div>
{/if}
