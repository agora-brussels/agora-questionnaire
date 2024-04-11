<script lang="ts">
	import lang, { langs } from '$lib/stores/lang.js';
	import { base } from '$app/paths';

	export let data;
</script>

<header class="container">
	<nav style="margin-bottom: 30px;">
		<ul>
			<li>
				<strong>
					<a href="{base}/" class="secondary">{data.pagesContent[$lang].general.home}</a>
				</strong>
			</li>
		</ul>
		<ul>
			<li>
				<a href="{base}/organiser/about" class="secondary"
					>{data.pagesContent[$lang].general.about}</a
				>
			</li>
			<li>
				<a href="{base}/organiser/overview" class="secondary"
					>{data.pagesContent[$lang].general.overview}</a
				>
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

<slot />
