<script lang="ts">
	import { base } from '$app/paths';
	import { micromark } from 'micromark';
	export let data;
</script>

<h2>{data.pagesContent.organiser.title}</h2>
<p>{@html micromark(data.pagesContent.organiser.content)}</p>
<a href="{base}/organiser/accessibility/database"
	><button>{data.pagesContent.organiser.button}</button></a
>
