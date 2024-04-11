<script lang="ts">
	import { base } from '$app/paths';
	import { micromark } from 'micromark';
	import img from '$lib/img/31-100.jpg';

	export let data;
</script>

<div class="grid-container">
	<div>
		<h2>{data.pagesContent.organiser.title}</h2>
		<p>{@html micromark(data.pagesContent.organiser.content)}</p>
		<a href="{base}/organiser/accessibility/database"
			><button>{data.pagesContent.organiser.button}</button></a
		>
	</div>
	<img src={img} alt="People" />
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
