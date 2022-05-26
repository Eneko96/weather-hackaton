<script>
	import { fly } from 'svelte/transition';
	export let transitionAxis = { x: 100 };
	export let body;
</script>

<div in:fly={{ ...transitionAxis, delay: 100 }}>
	<header />
	<p>{body}</p>
</div>

<style>
	header {
		height: 1.5rem;
		width: 100%;
		background-color: var(--quaternary);
	}
	div {
		width: 10rem;
		height: 10rem;
		border-radius: 7px;
		background-color: white;
		box-shadow: 5px 5px black;
		border: 3px solid #000;
	}

	p {
		padding: 0 1rem;
	}
</style>
