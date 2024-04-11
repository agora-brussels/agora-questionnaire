<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';

	export let data;
</script>

<svelte:head>
	<title>Agora Questionnaire</title>
</svelte:head>

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
