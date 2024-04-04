<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import OrganiserOverview from '$lib/components/OrganiserOverview.svelte';
	import Title from '$lib/components/Title.svelte';
	import Question from '$lib/components/Question.svelte';
	import NavButton from '$lib/components/NavButton.svelte';

	export let data;
</script>

<Title
	chapterTitle={data.question.chapterTitle}
	themeTitle={data.question.themeTitle}
	themeContent={data.question.themeContent}
	{data}
/>

{#key data.question.slug}
	<Question audience="organiser" question={data.question} {data} />
{/key}

<nav style="margin-top: 2rem; margin-bottom: 4rem">
	<NavButton
		content={data.previousThemeSlug
			? data.pagesContent.general.previousTheme
			: data.pagesContent.general.home}
		direction="left"
		onClick={() => {
			goto(
				data.nextQuestionSlug
					? base +
							'/organiser/' +
							data.previousThemeSlug +
							'/' +
							data.previousThemeFirstQuestionSlug
					: base + '/organiser/'
			);
		}}
	/>
	<NavButton
		content={data.pagesContent.general.deeperTheme}
		disabled={data.nextQuestionSlug ? false : true}
		direction="down"
		onClick={() => {
			goto(
				data.nextQuestionSlug
					? base + '/organiser/' + data.question.themeSlug + '/' + data.nextQuestionSlug
					: '/organiser/overview/'
			);
		}}
	/>
	<NavButton
		content={data.nextThemeSlug
			? data.pagesContent.general.nextTheme
			: data.pagesContent.general.overview}
		direction="right"
		onClick={() => {
			goto(
				data.nextThemeSlug
					? base + '/organiser/' + data.nextThemeSlug + '/' + data.nextThemeFirstQuestionSlug
					: '/organiser/overview/'
			);
		}}
	/>
</nav>

<OrganiserOverview {data} currentQuestionSlug={data.question.slug} />
