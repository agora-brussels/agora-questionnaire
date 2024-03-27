<script lang="ts">
	import img from '$lib/img/32-100.jpg';
	export let data;
</script>

<div style="max-width: 400px"></div>

<h1>{data.pages.home.title}</h1>
<p>{@html data.pages.home.content}</p>
<p style="margin-bottom: 10px">
	<a href="participant"><button>{data.pages.home.button}</button></a>
</p>
<small>
	{data.pages.home.alt} <a href="organiser">{data.pages.home.alt_button}</a>
</small>

<img src={img} alt="People" />

<style>
	p {
		max-width: 600px;
	}
</style>
