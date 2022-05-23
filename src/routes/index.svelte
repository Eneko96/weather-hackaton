<script>
	import { getWeatherFrom } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';
	import { kinds } from '../services/weatherKinds.js';

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
	<main>
		<h1>{weather.locationName}</h1>
		<section>
			<div>
				<h2>{weather.temperature}º</h2>
			</div>
			<div class="condition">
				<WeatherIcon
					text={weather.conditionText}
					icon={kinds[weather.isDay ? 'day' : 'night'].partlyCloudy}
				/>
				<div>max/min</div>
			</div>
			<h3>{weather.conditionText}</h3>
		</section>
		<WeatherFooter />
	</main>
{/await}

<style>
	main {
		padding: 2rem;
	}
	section {
		display: flex;
		justify-content: space-between;
	}

	.condition {
		align-items: center;
		display: flex;
		flex-direction: column;
		align-self: baseline;
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
		height: 1rem;
		align-self: center;
		left: auto;
		font-weight: 700;
		transform: rotate(-90deg);
	}
</style>
