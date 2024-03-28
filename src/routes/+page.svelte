<script lang="ts">
	import img from '$lib/img/32-100.jpg';
	export let data;
</script>

<div class="grid-container">
	<div>
		<h1>{data.pages.home.title}</h1>
		<p>{@html data.pages.home.content}</p>
		<p style="margin-bottom: 10px">
			<a href="participant"><button>{data.pages.home.button}</button></a>
		</p>
		<small>
			{data.pages.home.alt} <a href="organiser">{data.pages.home.alt_button}</a>
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
