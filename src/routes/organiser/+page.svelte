<script lang="ts">
	import { micromark } from 'micromark';
	export let data;
</script>

<h2>{data.pages.organiser.title}</h2>
<p>{@html micromark(data.pages.organiser.content)}</p>
<a href="#"><button>{data.pages.organiser.button}</button></a>
