<script lang="ts">
	import { micromark } from 'micromark';
	import img from '$lib/img/29-100.jpg';
	export let data;
</script>

<div style="max-width: 400px"></div>

<div class="grid-container">
	<div>
		<h2>{data.pages.about.title}</h2>
		<p>{@html micromark(data.pages.about.content)}</p>
		<img
			src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-nd.png"
			alt="by-nc-nd"
			width="200"
		/>
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
