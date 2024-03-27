<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
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

<!-- <nav>
	<ul>
		{#each data.participant.themes as theme (theme.slug)}
			<li>
				<small>
					<a href="{base}/participant/{theme.slug}" class="secondary">{theme.title}</a>
				</small>
			</li>
		{/each}
	</ul>
</nav> -->

<div style="margin-bottom: 20px">
	<div class="container">
		<div class="content">
			<hgroup>
				<h3>{data.theme.title}</h3>
				<p>{@html data.theme.content}</p>
			</hgroup>
		</div>
		<div class="image">
			<img src={img} alt="People" style="height: 200px; " />
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
			<!-- <article style="margin-top: 20px"> -->
			<details>
				<summary class="outline">En lire plus</summary>
				<p>...</p>
			</details>
			<!-- </article> -->
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

	details summary {
		margin-top: 10px;
	}

	details summary::after {
		float: left;
	}
</style>
