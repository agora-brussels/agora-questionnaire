<script lang="ts">
	import { micromark } from 'micromark';

	import lang from '$lib/stores/lang.js';
	import licence from '$lib/img/by-nd.png';
	import day from '$lib/img/day.png';

	export let data;

	let licenceLink =
		$lang == 'fr'
			? 'https://creativecommons.org/licenses/by-nd/4.0/deed.fr'
			: 'https://creativecommons.org/licenses/by-nd/4.0/deed.nl';
</script>

<div class="grid-container">
	<div>
		<h2>{@html micromark(data.pagesContent[$lang].organiserDay.title)}</h2>
		<p>{@html micromark(data.pagesContent[$lang].organiserDay.content)}</p>
		<h4 id="reuse">{data.pagesContent[$lang].general.reuse}</h4>
		<p>{@html micromark(data.pagesContent[$lang].organiserDay.reuse)}</p>
		<a href={licenceLink}><img src={licence} alt="by-nd" width="200" /></a>
	</div>
	<img
		style="margin-top: 2rem; max-width: 300px; border-radius:0px"
		src={day}
		alt="Do Agora Yourself"
	/>
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
