<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Options from '$lib/components/Options.svelte';
	import img from '$lib/img/14-100.jpg';

	export let data;

	const themeSlug: string = $page.params.themeSlug;

	const previous = () => {
		goto(data.previousThemeSlug ? '/participant/' + data.previousThemeSlug : '/participant/');
	};
	const next = () => {
		goto(data.nextThemeSlug ? '/participant/' + data.nextThemeSlug : '/participant/overview/');
	};
</script>

<div style="margin-bottom: 20px">
	<!-- <select name="select" aria-label="Select" required>
			{#each data.participant.themes as themeItem}
				<option disabled={themeItem.slug === themeSlug} selected={themeItem.slug === themeSlug}
					>{themeItem.title}</option
				>
			{/each}
		</select> -->
	<div class="container">
		<div class="content">
			<hgroup>
				<h3>{data.theme.title}</h3>
				<p>{@html data.theme.content}</p>
			</hgroup>
		</div>
		<div class="image">
			<!-- <img src={img} alt="People" style="height: 200px; " /> -->
		</div>
	</div>
</div>

{#each data.theme.questions as question (question.slug)}
	<article>
		<header>
			{question.title}
		</header>
		<main>
			<div>{@html question.content}</div>
			<Options bind:questionSlug={question.slug} />
		</main>
	</article>
{/each}

<nav style="margin-bottom: 50px">
	<button class="outline" on:click={previous}>◀︎</button>
	<button class="outline" on:click={next}>►</button>
</nav>

<!-- <p>At theme: {themeSlug}</p>
<p>Store: {JSON.stringify($answers)}</p> -->

<!-- <table>
	{#each data.participant.themes as theme (theme.slug)}
		<tr>
			<td><b>{theme.title}</b></td>
			{#each theme.questions as question (question.slug)}
				<td>{question.title}</td>
			{/each}
		</tr>
	{/each}
</table>

<style>
	table {
		display: table;
		white-space: nowrap;
		font-size: smaller;
	}
	table tr {
		display: table-cell;
	}
	table tr td {
		display: block;
	}
</style> -->

<style>
	.container {
		display: flex;
	}

	.content {
		flex: 3;
	}

	.image {
		flex: 1;
		background-position: center;
		background-size: cover;
	}
</style>
