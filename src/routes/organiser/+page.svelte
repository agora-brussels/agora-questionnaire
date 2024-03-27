<script lang="ts">
	export let data;
</script>

<h2>{data.pages.organiser.title}</h2>
<p>{@html data.pages.organiser.content}</p>
<a href="#"><button>{data.pages.organiser.button}</button></a>

<style>
	p {
		max-width: 600px;
	}
</style>
