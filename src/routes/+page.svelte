<script lang="ts">
	export let data;
</script>

<h1>{data.pages.home.title}</h1>
<p>{@html data.pages.home.content}</p>
<a href="participant"><button>{data.pages.home.button}</button></a>

<p>{data.pages.home.alt} <a href="organiser">{data.pages.home.alt_button}</a></p>
<p>
	{data.pages.home.about} <a href="organiser" class="secondary">{data.pages.home.about_button}</a>
</p>

<!-- <h1>Overview of the themes</h1>

<ul>
	{#each data.themes as { slug, title }}
		<li><a href="{base}/{slug}">{title}</a></li>
	{/each}
</ul> -->
