<script lang="ts">
	// import type { LayoutData } from './$types';
	// export let data: LayoutData;

	import answers from '$lib/store.js';
	function reset() {
		answers.set({});
	}

	export const prerender = true;
</script>

<nav>
	<li><a href="/">home</a></li>
	<!-- {#each data.summaries as { slug, title }}
		<li><a href="/{slug}">{title}</a></li>
	{/each} -->
	<button on:click={reset}> Reset answers </button>
</nav>

<slot />
