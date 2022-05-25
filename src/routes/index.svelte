<script>
	import { getWeatherFrom, getForecast } from '../services/weather.js';
	import WeatherInfo from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';
	import Forecast from '../components/Forecast.svelte';
	import Searcher from '../components/Searcher.svelte';
	import { kinds } from '../services/weatherKinds.js';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
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
		<div class="loading-container">
			<div class="loading-box">
				<h1>Loading</h1>
			</div>
		</div>
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
		height: 100%;
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

	.loading-container {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loading-box {
		box-shadow: 5px 5px black;
		border: 3px solid #000;
		width: 65%;
		background-color: var(--quaternary);
		line-height: 6rem;
		text-align: center;
		animation: 1.5s boop forwards infinite;
	}

	@keyframes boop {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-3deg);
		}
		40% {
			transform: rotate(4deg);
		}
		60% {
			transform: rotate(-5deg);
		}
		80% {
			transform: rotate(3deg);
		}
		100% {
			transform: rotate(2.6deg);
		}
	}
</style>
