<script lang="ts">
	import lang from '$lib/stores/lang.js';
	import { base } from '$app/paths';

	import Lang from '$lib/components/Lang.svelte';

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
				<Lang />
			</li>
		</ul>
	</nav>
</header>

<slot />
