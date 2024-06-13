<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';
	import { base } from '$app/paths';

	import svg from '$lib/svg/welcome.svg';

	export let data;
</script>

<div class="grid-container">
	<div style="margin-bottom:1rem">
		<h2>{data.pagesContent[$lang].organiser.title}</h2>
		<p style="margin-bottom:2rem">{@html micromark(data.pagesContent[$lang].organiser.content)}</p>
		<a href="{base}/organiser/accessibility/database"
			><button>{data.pagesContent[$lang].organiser.button}</button></a
		>
	</div>
	<img src={svg} alt="Welcome" />
</div>

<style>
	p {
		max-width: 600px;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1rem;
	}

	@media screen and (max-width: 1024px) {
		.grid-container {
			grid-template-columns: 1fr;
		}
	}
</style>
