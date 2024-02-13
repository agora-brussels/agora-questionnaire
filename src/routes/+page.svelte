<script lang="ts">
	import { base } from '$app/paths';
	export let data;
</script>

<h1>Welcome to Agora Questionnaire</h1>
<p>Visit <a href="https://agora.brussels">agora.brussels</a> for more information.</p>

<h1>Overview of the questions</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="{base}/{slug}">{title}</a></li>
	{/each}
</ul>
