<script>
	import { getWeatherFrom, getForecast } from '../services/weather.js';
	import WeatherInfo from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';
	import Forecast from '../components/Forecast.svelte';
	import Searcher from '../components/Searcher.svelte';
	import { kinds } from '../services/weatherKinds.js';
	import { fade } from 'svelte/transition';
	let coords = [];
	let firstSearch = false;
	let weatherKey = 86;
	let forecast = null;
	const handleForecast = async (value) => {
		forecast = await getForecast(`${value}&days=5`);
		console.log(forecast);
	};

	let weather = null;
	$: if (typeof window !== 'undefined' && !firstSearch) {
		const { geolocation } = navigator;
		geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			coords = [latitude, longitude];
			const getData = async () => {
				weather = await getWeatherFrom(coords);
				handleForecast(`${coords}&days=5`);
			};
			getData();
			firstSearch = true;
		});
	}

	const handleSearch = async (value) => {
		coords = [];
		weather = await getWeatherFrom(value);
		forecast = await getForecast(`${value}&days=5`);
	};
</script>

<main>
	{#if weather !== null}
		{#key weatherKey}
			<h1>{weather.locationName}</h1>
			<section class="first-box" transition:fade>
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
			<WeatherInfo humidity={weather.humidity} feel={weather.feelsLike} wind={weather.windSpeed} />
		{/key}
	{:else}
		<h1>Loading</h1>
	{/if}
	<section>
		<ul>
			{#if forecast}
				{#each forecast.forecast as forec, idx (forec)}
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
	</section>
	<Searcher onSearch={handleSearch} />
</main>

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
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
