<script lang="ts">
	import { base } from '$app/paths';
	export let data;
</script>

<h1>{data.home.title}</h1>
<p>{@html data.home.content}</p>
<a href="accessibility"><button>{data.home.button}</button></a>
<p>{data.home.alt} <a href="/organisation">{data.home.alt_button}</a></p>
<p>{@html data.home.about}</p>

<!-- <h1>Overview of the themes</h1>

<ul>
	{#each data.themes as { slug, title }}
		<li><a href="{base}/{slug}">{title}</a></li>
	{/each}
</ul> -->
