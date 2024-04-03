<script lang="ts">
	import { micromark } from 'micromark';

	import img from '$lib/img/32-100.jpg';

	export let data;
</script>

<div class="grid-container">
	<div>
		<h6>{data.pagesContent.home.pretitle}</h6>
		<h1>{data.pagesContent.home.title}</h1>
		<p>{@html micromark(data.pagesContent.home.content)}</p>
		<p>
			<a href="participant/accessibility"><button>{data.pagesContent.home.button}</button></a>
		</p>
		<small style="margin-top: 1rem">
			{data.pagesContent.home.alt} <a href="organiser">{data.pagesContent.home.alt_button}</a>
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
