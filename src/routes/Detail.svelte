<script>
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import Card from '../components/Card.svelte';
</script>

{#key 'penis'}
	<main>
		<Card body="Hello Card" />
		<footer>
			<button on:click={() => goto('/')}>Back</button>
		</footer>
	</main>
{/key}

<style>
	main {
		padding: 5rem;
	}

	button {
		z-index: 1;
		background: var(--tertiary);
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
</style>
