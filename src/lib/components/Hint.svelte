<script lang="ts">
	export let hint: string;
	export let img: string = '';
</script>

{#if hint}
	<div style="display: grid; grid-template-columns: auto 6rem">
		<article style="max-width: 400px; margin-left: 3rem; height: fit-content; justify-self: end;">
			<div style="display: flex">
				<!-- <div style="margin-top: 0.3rem; margin-right: 1rem">💡</div> -->
				<div style="font-size:smaller; font-weight:100; margin-left:0.5rem">
					{hint}
				</div>
			</div>
		</article>
		{#if img}
			<img src={img} alt="People" style="height: 150px; margin-left: 2rem" />
		{/if}
	</div>
{/if}
