<script lang="ts">
	import answers from '$lib/store.js';
	import { page } from '$app/stores';

	export let data;

	const slug: string = $page.params.slug;

	let answer: string = $answers[slug];

	// function yes() {
	// 	answer = 'yes';
	// }
	// function no() {
	// 	answer = 'no';
	// }

	// This reactive statement udpates when answer changes
	$: answers.update((answers) => {
		answers[slug] = answer;
		return answers;
	});
</script>

<h1>{data.question.title}</h1>
<div>{@html data.question.content}</div>

{#each ['yes', 'unsure', 'no'] as option}
	<label>
		<input type="radio" name="answer" value={option} bind:group={answer} />
		{option}
	</label>
{/each}

<!-- <label>
	<button on:click={yes}> Yes </button>
	<button on:click={no}> No </button>
</label> -->

<p>Current answer: {answer}</p>

<p>At: {slug}</p>
<p>Store: {JSON.stringify($answers)}</p>
