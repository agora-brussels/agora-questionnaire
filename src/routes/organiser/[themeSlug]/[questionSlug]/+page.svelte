<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import OrganiserNav from '$lib/components/OrganiserNav.svelte';
	import Title from '$lib/components/Title.svelte';
	import Question from '$lib/components/Question.svelte';

	export let data;
</script>

<Title
	chapterTitle={data.question.chapterTitle}
	themeTitle={data.question.title}
	themeContent={data.question.content}
	{data}
/>

<Question audience="organiser" question={data.question} {data} />

<nav style="margin-top: 2rem; margin-bottom: 4rem">
	<div>
		<button
			class="outline"
			style="margin-right:1rem; font-size: smaller;"
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
	<div>
		<button
			class="outline"
			style="margin-left:1rem; font-size: smaller;"
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
			style="margin-left:1rem; font-size: smaller;"
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
