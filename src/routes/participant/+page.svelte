<script lang="ts">
	export let data;
</script>

<h1>{data.pages.participant.title}</h1>
<p>{@html data.pages.participant.content}</p>
<a href="accessibility"><button>{data.pages.participant.button}</button></a>
