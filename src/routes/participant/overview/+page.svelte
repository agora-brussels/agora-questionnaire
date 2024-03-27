<script lang="ts">
	import { base } from '$app/paths';
	import answers from '$lib/stores/answers.js';
	import Indicator from '$lib/components/Indicator.svelte';
	import img from '$lib/img/31-100.jpg';

	export let data;

	function reset() {
		answers.set({});
	}
</script>

<h2>{data.pages.overview.title}</h2>

<p>{@html data.pages.overview.content}</p>

<table>
	{#each data.participant.themes as theme (theme.slug)}
		<tr>
			<td><b><a href="{base}/participant/{theme.slug}">{theme.title}</a></b></td>
			{#each theme.questions as question (question.slug)}
				<td><Indicator questionSlug={question.slug} /> {question.title}</td>
			{/each}
		</tr>
	{/each}
</table>

<!-- <div>
	{JSON.stringify($answers)}
</div> -->

<button on:click={reset} class="secondary outline">{data.pages.overview.reset}</button>

<img src={img} alt="People" />

<style>
	table {
		display: table;
		white-space: nowrap;
	}
	table tr {
		display: table-cell;
	}
	table tr td {
		display: block;
	}

	p {
		max-width: 600px;
	}
</style>
