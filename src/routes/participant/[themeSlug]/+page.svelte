<script lang="ts">
	import { micromark } from 'micromark';

	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import Options from '$lib/components/Options.svelte';

	import img from '$lib/img/14-100.jpg';

	export let data;
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

<div>
	<div
		style="
	display: grid;
	grid-template-columns: auto 6rem"
	>
		<article style="max-width: 400px; margin-left: 3rem; margin-bottom: 3rem; justify-self: end;">
			<div style="display: flex">
				<div style="margin-top: 0.3rem; margin-right: 1rem">💡</div>
				<div style="font-size:smaller; color:gray">
					{data.participant.hint}
				</div>
			</div>
		</article>
		<img src={img} alt="People" style="height: 150px; margin-left: 2rem" />
	</div>
	<hgroup style="margin-left: 2rem">
		<h3>{data.pages.general.theme}: {data.theme.title}</h3>
		<p>{@html micromark(data.theme.content)}</p>
	</hgroup>
</div>

{#each data.theme.questions as question (question.slug)}
	<article>
		<header>
			{question.title}
		</header>
		<main>
			<div>{@html micromark(question.content)}</div>
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
	<div>
		<button
			class="outline"
			style="margin-right:1rem"
			on:click={() => {
				goto(data.previousThemeSlug ? base + '/participant/' + data.previousThemeSlug : '/');
			}}>◀︎</button
		>
		{data.previousThemeSlug ? data.pages.general.previousTheme : data.pages.general.home}
	</div>
	<p style="margin-top:0.75rem">{data.themeIndex + 1}/{data.participant.themes.length}</p>
	<div>
		{data.nextThemeSlug ? data.pages.general.nextTheme : data.pages.general.overview}
		<button
			class="outline"
			style="margin-left:1rem"
			on:click={() => {
				goto(
					data.nextThemeSlug
						? base + '/participant/' + data.nextThemeSlug
						: '/participant/overview/'
				);
			}}>►</button
		>
	</div>
</nav>

<style>
	details summary {
		margin-top: 10px;
	}
	details summary::after {
		float: left;
	}
</style>
