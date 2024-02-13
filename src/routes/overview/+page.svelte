<script lang="ts">
	import answers from '$lib/store';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Overview of the answers</h1>

<ul>
	{JSON.stringify(answers)}
</ul>
