<script lang="ts">
	import { base } from '$app/paths';
</script>

<nav>
	<ul>
		<li>
			<strong>
				<a href="/" class="secondary">Home</a>
			</strong>
		</li>
	</ul>
	<ul>
		<li><a href="#" class="secondary">About</a></li>
		<li><a href="{base}/overview" class="secondary">Overview</a></li>
	</ul>
</nav>

<slot />
