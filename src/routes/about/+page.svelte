<script lang="ts">
	import img from '$lib/img/29-100.jpg';
	export let data;
</script>

<div style="max-width: 400px"></div>

<h2>{data.pages.about.title}</h2>
<p>{@html data.pages.about.content}</p>

<img src={img} alt="People" />

<style>
	p {
		max-width: 600px;
	}
</style>
