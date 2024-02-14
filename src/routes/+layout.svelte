<script lang="ts">
	import { base } from '$app/paths';
	// import type { LayoutData } from './$types';
	// export let data: LayoutData;

	import answers from '$lib/store.js';
	function reset() {
		answers.set({});
	}
</script>

<nav>
	<li><a href="{base}/">home</a></li>
	<li><a href="{base}/overview">overview</a></li>
	<!-- {#each data.summaries as { slug, title }}
		<li><a href="/{slug}">{title}</a></li>
	{/each} -->
	<button on:click={reset}> Reset answers </button>
</nav>

<slot />
