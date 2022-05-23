<script>
	import { getWeatherFrom } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';

	let jamonConQueso = getWeatherFrom();
	$: if (typeof window !== 'undefined' && navigator && navigator.geolocation) {
		console.log('we exist');
		const { geolocation } = navigator;
		geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			const coords = [latitude, longitude];
			jamonConQueso = getWeatherFrom(coords);
		});
	}
</script>

{#await jamonConQueso then weather}
	<section>
		<div>
			<h1>{weather.locationName}</h1>
			<h2>{weather.temperature}º</h2>
		</div>
		<div class="condition">
			<h3>{weather.conditionText}</h3>
			<WeatherIcon text={weather.conditionText} icon={weather.conditionIcon} />
		</div>
	</section>
	<WeatherFooter />
{/await}

<style>
	section {
		padding: 2rem;
		display: flex;
	}

	.condition {
		display: flex;
		align-items: center;
	}

	h1 {
		font-weight: 300;
		color: #333;
		text-transform: uppercase;
		padding: 16px 0 0 0;
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
		left: 20%;
		font-weight: 700;
		transform: rotate(-90deg);
	}
</style>
