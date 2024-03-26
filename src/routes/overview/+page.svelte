<script lang="ts">
	import answers from '$lib/store.js';
	function reset() {
		answers.set({});
	}
</script>

<h1>Overview of the answers</h1>

<ul>
	{JSON.stringify($answers)}
</ul>

<button on:click={reset} class="secondary outline">Reset my answers</button>
