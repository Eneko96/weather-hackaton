<script>
	import { fly } from 'svelte/transition';
	import WeatherIcon from '../components/weather-icon.svelte';
	import { findKind } from '../services/weatherKinds';
	export let maxTemp;
	export let minTemp;
	export let delay;
	export let date;
	export let onClick;
	export let conditionText;
	const isDay = true;

	const formattedDate = new Intl.DateTimeFormat('detault', { weekday: 'long' }).format(
		new Date(date)
	);
</script>

<article
	in:fly={{ delay: delay !== 0 ? delay * 100 + 600 : 600, x: -100 }}
	out:fly|local={{ delay: delay !== 0 ? delay * 100 : 0, x: +100 }}
	on:click={() => onClick(delay)}
>
	<section class="temperature-container">
		<p>{minTemp}º</p>
		<p>/</p>
		<p>{maxTemp}º</p>
	</section>
	<small>{formattedDate}</small>
	<span>
		<WeatherIcon icon={findKind(conditionText, isDay)} height="1.5rem" width="1.5rem" />
	</span>
</article>

<style>
	article {
		display: flex;
		background: var(--tertiary);
		transition: background 0.3s;
		box-shadow: 5px 5px black;
		border: 3px solid #000;
	}

	article:active {
		box-shadow: 0px 0px black;
		transform: translate(4px, 2px);
		user-select: none;
	}
	.temperature-container {
		display: flex;
		padding-left: 10px;
	}
	p {
		font-size: 29px;
		margin: 0;
		margin-bottom: 7px;
		margin-top: 7px;
	}
	small {
		align-self: flex-end;
	}
	span {
		margin-top: 0.2rem;
		margin-right: 0.2rem;
		margin-left: auto;
	}
</style>
