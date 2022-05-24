<script>
	import { getWeatherFrom, getForecast } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';
	import Forecast from '../components/Forecast.svelte';
	import { kinds } from '../services/weatherKinds.js';
	let coords = [];
	let forecast = null;
	const handleForecast = async () => {
		forecast = await getForecast(`${'London'}&days=3`);
		forecast.forecast.push(forecast.forecast[0]);
		forecast.forecast.push(forecast.forecast[1]);
		forecast.forecast.push(forecast.forecast[1]);
		forecast.forecast.push(forecast.forecast[1]);
		console.log(forecast);
	};

	let jamonConQueso = getWeatherFrom();
	$: if (typeof window !== 'undefined' && navigator && navigator.geolocation) {
		console.log('we exist');
		const { geolocation } = navigator;
		geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			coords = [latitude, longitude];
			jamonConQueso = getWeatherFrom(coords);
		});
	}
</script>

{#await jamonConQueso then weather}
	<main>
		<h1>{weather.locationName}</h1>
		<section class="first-box">
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
		<button disabled={coords.length === 0} on:click={handleForecast}>forecast</button>
		<section>
			<ul>
				{#if forecast}
					{#each forecast.forecast as forec, idx}
						<Forecast
							delay={idx}
							maxTemp={forec.day.maxtemp_c}
							minTemp={forec.day.mintemp_c}
							date={forec.date}
							icon={forec.day.condition.icon}
						/>
					{/each}
				{/if}
			</ul>
			<WeatherFooter />
		</section>
	</main>
{/await}

<style>
	main {
		padding: 2rem;
	}
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
		align-self: baseline;
		left: auto;
		font-weight: 700;
		transform: rotate(-90deg);
		font-size: 10px;
		text-align: left;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
