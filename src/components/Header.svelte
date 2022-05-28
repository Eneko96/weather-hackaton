<script>
	import { findKind } from '../services/weatherKinds';
	import { fade } from 'svelte/transition';
	import WeatherIcon from '../components/weather-icon.svelte';
	export let locationName;
	export let temperature;
	export let isDay;
	export let conditionText;
	export let range;
	export let { maxTemp, minTemp } = range;
	let keyHeader = 10101010102;
</script>

{#key keyHeader}
	<header transition:fade|local>
		<h1>{locationName}</h1>
		<section class="first-box">
			<div>
				<h2>{temperature}º</h2>
			</div>
			<div class="condition">
				<WeatherIcon icon={findKind(conditionText, isDay)} />
				<div>{maxTemp}º/{minTemp}º</div>
			</div>
			<h3>{conditionText}</h3>
		</section>
	</header>
{/key}

<style>
	.first-box {
		display: flex;
		justify-content: space-between;
	}

	.condition {
		align-items: center;
		display: flex;
		flex-direction: column;
		align-self: baseline;
	}

	h2 {
		font-weight: 300;
		font-size: 120px;
		color: #333;
		text-transform: uppercase;
		padding: 0;
	}

	h3 {
		position: relative;
		align-self: baseline;
		left: auto;
		font-weight: 700;
		transform: rotate(-90deg);
		font-size: 10px;
		text-align: left;
	}
</style>
