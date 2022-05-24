<script>
	import { getWeatherFrom, getForecast } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';
	import { kinds } from '../services/weatherKinds.js';
	import { each } from 'svelte/internal';
	let coords = [];
	let forecast = null;
	const handleForecast = () => {
		let forecast = getForecast(`${'London'}&days=3`);
		forecast.then((res) => console.log(res));
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
		<section>
			<ul>
				{#if forecast}
					{#each forecast as { forecast: forec }}
						<li>
							<div>
								<div>{forec.day.maxtemp_c}º</div>
							</div>
						</li>
					{/each}
				{/if}
			</ul>
			<WeatherFooter />
			<button disabled={coords.length === 0} on:click={handleForecast}>forecast</button>
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
</style>
