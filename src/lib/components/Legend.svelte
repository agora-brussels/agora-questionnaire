<script lang="ts">
	import lang from '$lib/stores/lang.js';
	import Indicator from '$lib/components/Indicator.svelte';

	export let data: any;

	const options = ['yes', 'unsure', 'no'];
	$: optionsTranslated = new Map([
		['yes', data.pagesContent[$lang].general.yes],
		['unsure', data.pagesContent[$lang].general.unsure],
		['no', data.pagesContent[$lang].general.no]
	]);
</script>

<div
	class="legend-container"
	style="
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;"
>
	<h6>{data.pagesContent[$lang].general.legend}</h6>
	<div style="display: flex;">
		{#each options as option}
			<div style="display: flex; margin: 0.5rem">
				<div style="width: 1.5rem">
					<Indicator forcedAnswer={option} />
				</div>
				<div style="width: 4rem; font-size: smaller ">
					{optionsTranslated.get(option)}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.legend-container {
		border-style: none none none solid;
	}
	@media print {
		.legend-container {
			border-style: none;
		}
	}
</style>
