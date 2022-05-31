<script>
	import { getForecast } from '../services/weather.js';
	import { goto } from '$app/navigation';
	import WeatherInfo from '../components/weather-footer.svelte';
	import Forecast from '../components/Forecast.svelte';
	import Searcher from '../components/Searcher.svelte';
	import Header from '../components/Header.svelte';
	import forc from '../services/store';
	import coordsStore from '../services/coordinatesStore';
	import Config from '../components/Config.svelte';
	import FunFact from '../components/FunFact.svelte';
	import { fade } from 'svelte/transition';
	let firstSearch = false;
	let forecast = null;
	let coords = $coordsStore;
	const handleForecast = async (value) => {
		forc.addForecast(await getForecast(`${value}&days=5`));
	};

	coordsStore.subscribe((val) => (coords = val));
	forc.subscribe((val) => (forecast = val));

	const getData = async () => {
		handleForecast(`${coords}&days=5`);
	};

	$: if (typeof window !== 'undefined' && !firstSearch && !forecast) {
		const { geolocation } = navigator;
		geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			coordsStore.setCoords([latitude, longitude]);
			getData(coords);
			firstSearch = true;
		});
	}

	const handleSearch = async (value) => {
		forc.addForecast(await getForecast(`${value}&days=5`));
	};

	const handleClick = (idx) => {
		goto('Detail', { state: { forecast: forecast.forecast[idx] } });
	};
</script>

<main>
	{#if forecast}
		<Header
			conditionText={forecast.conditionText}
			locationName={forecast.locationName}
			isDay={forecast.isDay}
			temperature={forecast.temperature}
			range={{
				maxTemp: forecast.forecast[0].day.maxtemp_c,
				minTemp: forecast.forecast[0].day.mintemp_c
			}}
		/>
		<WeatherInfo humidity={forecast.humidity} feel={forecast.feelsLike} wind={forecast.windSpeed} />
		<section>
			<ul>
				{#each forecast.forecast as forec, idx (forec)}
					<Forecast
						delay={idx}
						maxTemp={forec.day.maxtemp_c}
						minTemp={forec.day.mintemp_c}
						date={forec.date}
						conditionText={forec.day.condition.text}
						isDay={forec.day.is_day}
						onClick={handleClick}
					/>
				{/each}
			</ul>
			<Config {coords} onUbi={getData} />
			<div class="funfact" in:fade|local={{ delay: 3000 }}><FunFact /></div>
		</section>
		<Searcher onSearch={handleSearch} />
	{:else}
		<div class="loading-container">
			<div class="loading-box">
				<h1>Loading</h1>
				Powered by: &#32;<a href="https://www.weatherapi.com/" title="Free Weather API"
					>WeatherAPI.com</a
				>
			</div>
		</div>
	{/if}
</main>

<style>
	main {
		padding: 2rem;
		height: 100%;
	}

	h1 {
		font-weight: 300;
		color: #333;
		text-transform: uppercase;
		padding: 16px 0 0 0;
	}

	ul {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
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
		background: var(--quaternary);
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

	section {
		padding: 0.5rem 0;
	}

	.funfact {
		position: absolute;
		width: 80%;
		bottom: 7rem;
	}
</style>
