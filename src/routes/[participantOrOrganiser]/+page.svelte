<script lang="ts">
	import { base } from '$app/paths';
	import { micromark } from 'micromark';
	export let data;
</script>

<h2>{data.participantOrOrganiserPagesContent.title}</h2>
<p>{@html micromark(data.participantOrOrganiserPagesContent.content)}</p>
<a href="{base}/{data.participantOrOrganiser}/accessibility"
	><button>{data.participantOrOrganiserPagesContent.button}</button></a
>
