<script lang="ts">
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

<img src="src/img/32-100.jpg" alt="people" />

<!-- <h1>Overview of the themes</h1>

<ul>
	{#each data.themes as { slug, title }}
		<li><a href="{base}/{slug}">{title}</a></li>
	{/each}
</ul> -->

<style>
	p {
		max-width: 600px;
	}
</style>
