<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const options = ['yes', 'unsure', 'no'];

	export let value: string = '';

	const dispatch = createEventDispatcher();
	const select = (option: string) => () => {
		value = value == option ? '' : option;
		dispatch('submit');
	};
</script>

<div class="options">
	{#each options as option}
		<button aria-current={value === option} on:click={select(option)}>{option.toUpperCase()}</button
		>
	{/each}
</div>
