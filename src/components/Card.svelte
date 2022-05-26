<script>
	import { fly } from 'svelte/transition';
	export let transitionAxis = { x: 100 };
	export let left = false;
	export let delay;
</script>

<div class={`${left && 'left'}`} in:fly={{ ...transitionAxis, delay }}>
	<header />
	<slot />
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

	div.left {
		margin-left: auto;
	}
</style>
