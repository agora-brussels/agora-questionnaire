<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';
	import Options from '$lib/components/Options.svelte';

	export let question: any;
	export let audience: string;

	export let data: any;
</script>

<article>
	<header>
		<div
			style="
		display: grid;
		grid-template-columns: 5rem auto;
		grid-column-gap: 1rem;"
		>
			<div style="font-weight:300">
				{data.pagesContent[$lang].general.question}
			</div>
			<div>
				{question.title}
			</div>
		</div>
	</header>
	<main
		class="main-question"
		style="
		margin-top: 2rem;
		"
	>
		<div>{@html micromark(question.content)}</div>
		<Options {audience} {data} questionSlug={question.slug} />
		{#if question.more}
			<div style="margin:1rem; max-width: 600px">
				<p style="margin-bottom:1rem">{data.pagesContent[$lang].general.more}</p>
				<div style="font-size: smaller">{@html micromark(question.more)}</div>
			</div>
		{/if}
	</main>
</article>

<style>
	.main-question {
		margin-left: 6rem;
	}

	@media screen and (max-width: 768px) {
		.main-question {
			margin-left: 1rem;
		}
	}
</style>
