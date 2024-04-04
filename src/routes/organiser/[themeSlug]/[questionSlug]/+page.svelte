<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import OrganiserNav from '$lib/components/OrganiserNav.svelte';
	import Title from '$lib/components/Title.svelte';
	import Question from '$lib/components/Question.svelte';
	import NavButton from '$lib/components/NavButton.svelte';

	export let data;
</script>

<Title
	chapterTitle={data.question.chapterTitle}
	themeTitle={data.question.title}
	themeContent={data.question.content}
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
		on:click={() => {
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
		content={data.nextQuestionSlug
			? data.pagesContent.general.deeperTheme
			: data.pagesContent.general.overview}
		disabled={data.nextQuestionSlug ? false : true}
		direction="down"
		on:click={() => {
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
		on:click={() => {
			goto(
				data.nextThemeSlug
					? base + '/organiser/' + data.nextThemeSlug + '/' + data.nextThemeFirstQuestionSlug
					: '/organiser/overview/'
			);
		}}
	/>
</nav>

<OrganiserNav {data} />
