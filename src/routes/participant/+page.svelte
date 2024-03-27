<script lang="ts">
	import img from '$lib/img/7-100.jpg';
	export let data;
</script>

<h2>{data.pages.participant.title}</h2>

<img src={img} alt="People" style="height: 400px; float:right" />

<p>{@html data.pages.participant.content}</p>
<a href="accessibility"><button>{data.pages.participant.button}</button></a>
