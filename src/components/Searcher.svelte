<script>
	let clicked = false;
	export let onSearch;
	import { expoIn } from 'svelte/easing';
	import { horizontalSlide } from '../services/transitions';
	let timer;

	const handleSearch = (e) => {
		clearTimeout(timer);
		timer = setTimeout(() => onSearch(e.target.value), 750);
	};
</script>

<footer>
	<button
		style={`${clicked && 'box-shadow: 0px 0px black; transform: translate(4px, 2px);'} `}
		on:click={() => (clicked = !clicked)}>Search</button
	>
	{#if clicked}
		<input on:keyup={handleSearch} transition:horizontalSlide placeholder="Search" />
	{/if}
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		width: 100%;
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		padding: 12px 32px;
	}
	input {
		background-color: var(--secondary);
		width: 80%;
		padding: 8px;
		height: 3.5rem;
		line-height: normal;
		outline: none;
		border: 3px solid #000;
		border-radius: 4px;
		font-size: 16px;
		outline: none;
		padding-left: 3rem;
		position: absolute;
		left: 3rem;
		top: 14px;
		border-radius: 25px;
	}

	input::placeholder {
		font-size: large;
		line-height: 3rem;
		color: black;
	}

	button {
		z-index: 1;
		background: var(--secondary);
		border: 0;
		border-radius: 100%;
		width: 3.4rem;
		height: 3.5rem;
		box-shadow: 4px 2px black;
		border: 3px solid #000;
		text-align: center;
		font-family: 'Bebas Neue', cursive;
	}
	button:active {
		box-shadow: 0px 0px black;
		transform: translate(4px, 2px);
	}
</style>
