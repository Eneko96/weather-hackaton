<script>
	import { fade } from 'svelte/transition';
	import themeProvider from '../services/theme';
	import { themes } from '../services/utils';
	const [def, wer] = themes;
	let theme;
	export let onUbi;
	themeProvider.subscribe((themeStored) => (theme = themeStored));
	const handleConfigButton = () => {
		if (theme === def) themeProvider.changeTheme(wer);
		else themeProvider.changeTheme(def);
	};
</script>

<article in:fade={{ delay: 1000 }}>
	<p on:click={handleConfigButton}>Theme</p>
	<p on:click={onUbi}>Ubi</p>
</article>

<style>
	article {
		position: absolute;
		top: 33rem;
		right: 2rem;
		display: flex;
		justify-content: space-between;
		height: 2rem;
		width: 6rem;
		margin-left: auto;
	}

	p {
		margin: 0;
		padding: 0.2rem;
		text-align: center;
		background: var(--primary);
		transition: background 0.3s;
		box-shadow: 3px 3px black;
		border: 3px solid #000;
	}

	p:hover {
		cursor: pointer;
	}

	p:active {
		box-shadow: 0px 0px black;
		transform: translate(4px, 2px);
		user-select: none;
	}
</style>
