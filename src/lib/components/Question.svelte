<script lang="ts">
	import { micromark } from 'micromark';

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
				{data.pagesContent.general.question}
			</div>
			<div>
				{question.title}
			</div>
		</div>
	</header>
	<main style="margin-left:6rem; margin-top: 2rem">
		<div>{@html micromark(question.content)}</div>
		<Options {audience} {data} questionSlug={question.slug} />
		{#if question.more}
			<div style="margin:1rem; max-width: 600px">
				<p style="margin-bottom:1rem">{data.pagesContent.general.more}</p>
				<div style="font-size: smaller">{@html micromark(question.more)}</div>
			</div>
		{/if}
	</main>
</article>
