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
	<main>
		<div>{@html micromark(question.content)}</div>
		<Options {audience} bind:questionSlug={question.slug} />
		{#if question.more}
			<div style="margin:2rem; max-width: 600px">
				<b>{data.pagesContent.general.more}</b>
				<div style="font-size: smaller">{@html micromark(question.more)}</div>
			</div>
		{/if}
	</main>
</article>
