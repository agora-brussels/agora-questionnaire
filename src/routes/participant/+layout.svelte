<script lang="ts">
	import { base } from '$app/paths';

	export let data;

	import answers from '$lib/store.js';
	function reset() {
		answers.set({});
	}
</script>

<nav>
	<ul>
		<li>
			<strong>
				<a href="/" class="secondary">Home</a> >
				<a href="{base}/participant" class="contrast">{data.pages.participant.subtitle}</a>
			</strong>
		</li>
	</ul>
	<ul>
		<li><a href="#" class="secondary">About</a></li>
		<li><a href="{base}/overview" class="secondary">My answers</a></li>
		<li><button on:click={reset} class="secondary outline"> Reset</button></li>
	</ul>
</nav>

<slot />
