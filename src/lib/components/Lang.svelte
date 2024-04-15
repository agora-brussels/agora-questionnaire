<script lang="ts">
	import lang, { langs } from '$lib/stores/lang.js';
</script>

<!-- bind:value={$lang} -->

<div style="display: flex; margin: 0px" role="group">
	{#each langs as l}
		<button
			class={$lang == l ? '' : 'outline'}
			style="font-stretch: condensed; "
			on:click={() => {
				$lang = l;
			}}>{l.toUpperCase()}</button
		>
	{/each}
</div>
