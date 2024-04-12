<script lang="ts">
	import participantAnswers from '$lib/stores/participantAnswers.js';
	import organiserAnswers from '$lib/stores/organiserAnswers.js';

	export let audience: string = '';
	export let questionSlug: string = '';
	export let forcedAnswer: string | undefined = undefined;

	const options = ['yes', 'unsure', 'no'];
	const colors = ['#419491', '#919191', '#ed1566'];
	const defaultColor = '#D6D6D6';

	let answers = audience == 'participant' ? participantAnswers : organiserAnswers;

	let answer: string;
	let color: string;

	$: answer = forcedAnswer || $answers[questionSlug];
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
