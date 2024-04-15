<script lang="ts">
	import '$lib/styles/pico.cyan.css';
	import '$lib/styles/app.css';

	import { micromark } from 'micromark';

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import lang from '$lib/stores/lang.js';

	import Lang from '$lib/components/Lang.svelte';

	export let data;

	$: participantOrOrganiser = $page.url.pathname.includes('organiser')
		? 'organiser'
		: 'participant';
</script>

<svelte:head>
	<title>Agora Questionnaire</title>
</svelte:head>

<header class="container">
	<nav style="margin-bottom: 30px;">
		<ul>
			<li>
				<a href="{base}/" class="secondary">
					<div
						style="text-decoration: {participantOrOrganiser == 'participant'
							? 'underline'
							: 'none'}"
					>
						{data.pagesContent[$lang].general.participant}
					</div>
				</a>
			</li>
			<li>
				<a href="{base}/organiser" class="secondary">
					<div
						style="text-decoration: {participantOrOrganiser == 'organiser' ? 'underline' : 'none'}"
					>
						{data.pagesContent[$lang].general.organiser}
					</div>
				</a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="{base}/{participantOrOrganiser}/about" class="secondary"
					><div
						style="text-decoration: {$page.url.pathname.includes('/about') ? 'underline' : 'none'}"
					>
						{data.pagesContent[$lang].general.about}
					</div></a
				>
			</li>
			<li>
				<a href="{base}/{participantOrOrganiser}/overview" class="secondary"
					><div
						style="text-decoration: {$page.url.pathname.includes('/overview')
							? 'underline'
							: 'none'}"
					>
						{data.pagesContent[$lang].general.overview}
					</div></a
				>
			</li>
			<li>
				<Lang />
			</li>
		</ul>
	</nav>
</header>

<main class="container">
	<slot />
</main>

<footer class="container">
	<nav
		style="font-size: small;
	margin-top: 100px;"
	>
		<ul></ul>
		<ul>
			<li>{@html micromark(data.pagesContent[$lang].general.footer)}</li>
		</ul>
		<ul></ul>
	</nav>
</footer>
