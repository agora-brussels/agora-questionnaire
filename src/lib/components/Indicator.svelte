<script lang="ts">
	import answers from '$lib/stores/answers.js';

	export let questionSlug: string = '';

	const options = ['yes', 'unsure', 'no'];
	const colors = ['#419491', '#919191', '#ed1566'];
	const defaultColor = '#D6D6D6';

	let answer: string;
	let color: string;

	$: answer = $answers[questionSlug];
	$: color = options.indexOf(answer) != -1 ? colors[options.indexOf(answer)] : defaultColor;
</script>

<div class="dot" style="background-color: {color}" />

<style>
	.dot {
		height: 1rem;
		width: 1rem;
		border-radius: 20%;
		margin-right: 0.25rem;
		display: inline-block;
	}
</style>
