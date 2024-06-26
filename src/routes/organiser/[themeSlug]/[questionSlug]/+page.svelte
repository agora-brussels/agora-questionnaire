<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import lang from '$lib/stores/lang.js';
	import OrganiserOverview from '$lib/components/OrganiserOverview.svelte';
	import Title from '$lib/components/Title.svelte';
	import Question from '$lib/components/Question.svelte';
	import NavButton from '$lib/components/NavButton.svelte';

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

	$: organiserContentLangImproved = data.improveOrganiserContentLang(data.organiserContent[$lang]);
	$: theme = organiserContentLangImproved.themes.find(
		(theme: any) => theme.slug === data.params.themeSlug
	);

	$: themeIndex = organiserContentLangImproved.themes.indexOf(theme);

	let previousThemeSlug: string | undefined;
	let previousThemeFirstQuestionSlug: string | undefined;
	$: if (themeIndex == 0) {
		previousThemeSlug = undefined;
	} else {
		previousThemeSlug = organiserContentLangImproved.themes[themeIndex - 1].slug;
		previousThemeFirstQuestionSlug =
			organiserContentLangImproved.themes[themeIndex - 1].questions[0].slug;
	}

	let nextThemeSlug: string | undefined;
	let nextThemeFirstQuestionSlug: string | undefined;
	$: if (themeIndex + 1 == organiserContentLangImproved.themes.length) {
		nextThemeSlug = undefined;
	} else {
		nextThemeSlug = organiserContentLangImproved.themes[themeIndex + 1].slug;
		nextThemeFirstQuestionSlug =
			organiserContentLangImproved.themes[themeIndex + 1].questions[0].slug;
	}

	$: question = theme.questions.find((question: any) => question.slug === data.params.questionSlug);

	$: questionIndex = theme.questions.indexOf(question);

	let nextQuestionSlug: string | undefined;
	$: if (questionIndex + 1 == theme.questions.length) {
		nextQuestionSlug = undefined;
	} else {
		nextQuestionSlug = theme.questions[questionIndex + 1].slug;
	}

	$: svg = svgs.find((svg) => svg.name == theme.slug)?.svg || '';
</script>

<Title
	chapterTitle={question.chapterTitle}
	chapterContent={question.chapterContent}
	themeTitle={question.themeTitle}
	themeContent={question.themeContent}
	{data}
/>

{#key question.slug}
	<Question audience="organiser" {question} {data} img={svg} />
{/key}

<nav style="margin-top: 2rem; margin-bottom: 4rem">
	<NavButton
		content={previousThemeSlug
			? data.pagesContent[$lang].general.previousTheme
			: data.pagesContent[$lang].general.home}
		direction="left"
		onClick={() => {
			goto(
				nextQuestionSlug
					? base + '/organiser/' + previousThemeSlug + '/' + previousThemeFirstQuestionSlug
					: base + '/organiser/'
			);
		}}
	/>
	<NavButton
		content={data.pagesContent[$lang].general.deeperTheme}
		disabled={nextQuestionSlug ? false : true}
		direction="down"
		onClick={() => {
			goto(
				nextQuestionSlug
					? base + '/organiser/' + question.themeSlug + '/' + nextQuestionSlug
					: '/organiser/overview/'
			);
		}}
	/>
	<NavButton
		content={nextThemeSlug
			? data.pagesContent[$lang].general.nextTheme
			: data.pagesContent[$lang].general.overview}
		direction="right"
		onClick={() => {
			goto(
				nextThemeSlug
					? base + '/organiser/' + nextThemeSlug + '/' + nextThemeFirstQuestionSlug
					: '/organiser/overview/'
			);
		}}
	/>
</nav>

<OrganiserOverview {data} currentQuestionSlug={question.slug} />
