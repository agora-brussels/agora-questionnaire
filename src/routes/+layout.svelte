<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	export let data;
</script>

<nav>
	<ul>
		<li>
			<strong>
				<a href="{base}/" class="secondary">Home</a>
				>
				<a href="{base}/participant" class="contrast">{data.pages.participant.subtitle}</a>
			</strong>
		</li>
	</ul>
	<ul>
		<li><a href="#" class="secondary">About</a></li>
		<li><a href="{base}/participant/overview" class="secondary">Overview</a></li>
	</ul>
</nav>

<slot />
