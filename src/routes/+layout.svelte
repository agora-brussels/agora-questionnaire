<script lang="ts">
	import { base } from '$app/paths';
	import lang, { langs } from '$lib/stores/lang.js';

	export let data;
</script>

<header class="container">
	<nav style="margin-bottom: 30px;">
		<ul>
			<li>
				<strong>
					<a href="{base}/" class="secondary">{data.pages.general.home}</a>
					<!-- > <a href="{base}/participant" class="contrast">{data.pages.participant.subtitle}</a> -->
				</strong>
			</li>
		</ul>
		<ul>
			<li><a href="{base}/about" class="secondary">{data.pages.general.about}</a></li>
			<li>
				<a href="{base}/participant/overview" class="secondary">{data.pages.general.overview}</a>
			</li>
			<li>
				<select bind:value={$lang}>
					{#each langs as l}
						<option value={l}>{l.toUpperCase()}</option>
					{/each}
				</select>
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
			<li>{@html data.pages.general.footer}</li>
		</ul>
		<ul></ul>
	</nav>
</footer>
