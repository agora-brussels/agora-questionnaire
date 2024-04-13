<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';
	import licence from '$lib/img/by-nd.png';
	import agora from '$lib/img/agora.jpg';

	export let data;
</script>

<div class="grid-container">
	<div>
		<h2>{data.pagesContent[$lang].participantAbout.title}</h2>
		<p>{@html micromark(data.pagesContent[$lang].participantAbout.content)}</p>
		<img src={licence} alt="by-nd" width="200" />
	</div>
	<img style="margin-top: 2rem; max-width: 300px; border-radius:0px" src={agora} alt="People" />
</div>

<style>
	p {
		max-width: 600px;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-column-gap: 2rem;
	}

	@media screen and (max-width: 1024px) {
		.grid-container {
			grid-template-columns: 1fr;
		}
	}
</style>
