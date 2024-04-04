<script lang="ts">
	export let direction: string;
	export let disabled = false;
	export let content: string;
</script>

<button
	class="outline"
	style="font-size: smaller; margin: 0 {direction == 'down' || direction == 'up' ? '0.4rem' : 0}"
	{disabled}
>
	{#if direction == 'left'}
		<i class="arrow {direction}"></i>
	{/if}
	{content}
	{#if direction != 'left'}
		<i class="arrow {direction}"></i>
	{/if}
</button>

<style>
	.arrow {
		border: solid #047878;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 3px;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}

	.right {
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}

	.left {
		transform: rotate(135deg);
		-webkit-transform: rotate(135deg);
	}

	.up {
		transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg);
	}

	.down {
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}
</style>
