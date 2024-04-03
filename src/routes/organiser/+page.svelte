<script lang="ts">
	import { base } from '$app/paths';
	import { micromark } from 'micromark';
	export let data;
</script>

<h2>{data.pagesContent.organiser.title}</h2>
<p>{@html micromark(data.pagesContent.organiser.content)}</p>
<a href="{base}/organiser/accessibility"><button>By theme</button></a>
<!-- {data.pagesContent.organiser.button} -->
<a href="{base}/organiser/accessibility/database"><button>By question</button></a>
