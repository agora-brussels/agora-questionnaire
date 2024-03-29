<script lang="ts">
	import { micromark } from 'micromark';

	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	import Options from '$lib/components/Options.svelte';

	import img from '$lib/img/14-100.jpg';

	export let data;
</script>

<nav>
	<ul>
		{#each data.participant.themes as theme (theme.slug)}
			<li>
				<small>
					<a href="{base}/participant/{theme.slug}" class="secondary">{theme.title}</a>
				</small>
			</li>
		{/each}
	</ul>
</nav>

<div
	style="
	display: grid;
	grid-template-columns: 4fr 1fr;"
>
	<p>{data.participant.hint}</p>
	<hgroup>
		<h3>{data.pages.general.theme}: {data.theme.title}</h3>
		<p>{@html micromark(data.theme.content)}</p>
	</hgroup>
	<img src={img} alt="People" style="width: 100px; " />
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
			on:click={() => {
				goto(data.previousThemeSlug ? base + '/participant/' + data.previousThemeSlug : '/');
			}}>◀︎</button
		>
		{data.previousThemeSlug ? data.pages.general.previousTheme : data.pages.general.home}
	</div>
	<p>{data.themeIndex + 1}/{data.participant.themes.length}</p>
	<div>
		{data.nextThemeSlug ? data.pages.general.nextTheme : data.pages.general.overview}
		<button
			class="outline"
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
