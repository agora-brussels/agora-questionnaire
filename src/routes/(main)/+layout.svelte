<script lang="ts">
	import { base } from '$app/paths';
	import lang from '$lib/stores/lang.js';

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
				<a href="{base}/participant/about" class="secondary"
					>{data.pagesContent[$lang].general.about}</a
				>
			</li>
			<li>
				<Lang />
			</li>
		</ul>
	</nav>
</header>

<slot />
