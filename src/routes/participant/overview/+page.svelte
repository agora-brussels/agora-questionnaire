<script lang="ts">
	import answers from '$lib/store.js';
	import Indicator from '../../../components/Indicator.svelte';

	export let data;

	function reset() {
		answers.set({});
	}
</script>

<h1>Overview of your answers</h1>

<table>
	{#each data.participant.themes as theme (theme.slug)}
		<tr>
			<td><b>{theme.title}</b></td>
			{#each theme.questions as question (question.slug)}
				<td><Indicator questionSlug={question.slug} /> {question.title}</td>
			{/each}
		</tr>
	{/each}
</table>

<!-- <div>
	{JSON.stringify($answers)}
</div> -->

<button on:click={reset} class="secondary outline">Reset my answers</button>

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
</style>
