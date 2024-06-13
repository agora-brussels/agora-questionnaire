<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';
	import Options from '$lib/components/Options.svelte';

	export let question: any;
	export let audience: string;
	export let img: string = '';

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
			<div style="font-weight:300; font-stretch: condensed">
				{data.pagesContent[$lang].general.question.toLocaleUpperCase()}
			</div>
			<div style="font-weight:600">
				{question.title}
			</div>
		</div>
	</header>
	<main
		class="main-question"
		style="
		margin-top: 2rem;
		min-height: {img ? '32rem' : undefined}
		"
	>
		<!-- Note: font-weight is not applying -->
		<div style="font-weight:bold; margin-bottom:1rem">
			{@html micromark(question.content)}
		</div>
		<Options {audience} {data} questionSlug={question.slug} />
		{#if img}
			<img
				src={img}
				alt=""
				style="float: right;
				margin-top: 2rem;
				margin-left: 1rem;
				margin-right: -1rem;
				margin-bottom: 1rem;
				min-height: 150px;
				max-height: 20rem;
				min-width: 150px;
				width: 50%;
				transform: scale(1)"
			/>
		{/if}
		{#if question.more}
			<div style="margin-top:2rem; max-width: 600px">
				<!-- <p style="margin-bottom:1rem">{data.pagesContent[$lang].general.more}</p> -->
				<div>{@html micromark(question.more)}</div>
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
