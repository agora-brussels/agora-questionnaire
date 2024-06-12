<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';
	import img from '$lib/img/32-100.jpg';

	export let data;
</script>

<div class="grid-container">
	<div style="margin-bottom: 1rem">
		<h6>{data.pagesContent[$lang].home.pretitle}</h6>
		<h1>{data.pagesContent[$lang].home.title}</h1>
		<p>{@html micromark(data.pagesContent[$lang].home.content)}</p>
		<p>
			<a href="participant/accessibility"><button>{data.pagesContent[$lang].home.button}</button></a
			>
		</p>
		<small style="margin-top: 1rem">
			{data.pagesContent[$lang].home.alt}
			<a href="organiser">{data.pagesContent[$lang].home.alt_button}</a>
		</small>
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
