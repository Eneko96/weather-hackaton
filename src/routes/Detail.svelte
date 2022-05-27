<script>
	import { goto } from '$app/navigation';
	import Card from '../components/Card.svelte';
	const forecast = history.state.forecast;
	console.log(forecast);
	const { astro, day, hour } = forecast;
	console.log(astro);

	const hoursToShow = [hour[6], hour[8], hour[12], hour[16], hour[20], hour[0]];

	const formatDay = (time) =>
		new Intl.DateTimeFormat('default', { hour: '2-digit' }).format(new Date(time));

	const timeZone = (time) => (new Date(time).getHours() >= 12 ? ' pm' : ' am');

	const emogier = (temperature) => {
		if (temperature > 22) {
			return '🥵';
		} else if (temperature > 18) {
			return '🥰';
		} else if (temperature > 15) {
			return '🤧';
		} else if (temperature > 10) {
			return '😰';
		} else {
			return '🥶';
		}
	};
</script>

{#key 'penis'}
	<main>
		<Card delay={200} title="📷 Time">
			<div class="card-container">
				<p><span>Moonrise → </span>{astro.moonrise}</p>
				<p><span>Moonset → </span>{astro.moonset}</p>
				<p><span>Sunrise → </span>{astro.sunrise}</p>
				<p><span>Sunset → </span>{astro.sunset}</p>
				<p><span>Moon Phase → </span>{astro.moon_phase}</p>
			</div>
		</Card>
		<div class="spacer" />
		<Card transitionAxis={{ x: -100 }} left delay={400} title="Hotties nor coldies">
			<div class="card-container">
				<p><span>Day → </span>{day.avgtemp_c}º</p>
				<p><span>Night → </span>{day.mintemp_c}º</p>
				<p><span>High → </span>{day.maxtemp_c}º</p>
				<p><span>Low → </span>{day.mintemp_c}º</p>
				<p><span>Wind → </span>{day.maxwind_kph}º</p>
				<p><span>Avg Humidity → </span>{day.avghumidity}º</p>
			</div>
		</Card>
		<div class="spacer" />
		<Card delay={600} title="Hours">
			<div class="card-container">
				{#each hoursToShow as hour}
					<p>
						<span>{formatDay(hour.time)}:00 {timeZone(hour.time)} → </span>
						<span>{hour.temp_c}º <span class="emogi">{emogier(hour.temp_c)}</span> </span>
					</p>
				{/each}
			</div>
		</Card>
		<footer>
			<button on:click={() => goto('/')}>Back</button>
		</footer>
	</main>
{/key}

<style>
	main {
		padding: 5rem 5rem;
	}

	button {
		z-index: 1;
		background: var(--tertiary);
		border: 0;
		border-radius: 100%;
		width: 3.4rem;
		height: 3.5rem;
		box-shadow: 4px 2px black;
		border: 3px solid #000;
		text-align: center;
		font-family: 'Bebas Neue', cursive;
	}
	button:active {
		box-shadow: 0px 0px black;
		transform: translate(4px, 2px);
	}

	footer {
		display: flex;
		align-items: center;
		width: 100%;
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		padding: 12px 32px;
	}

	.spacer {
		height: 2.5rem;
	}

	p {
		display: flex;
		margin: 0;
	}

	.card-container {
		padding: 0.4rem;
	}

	span {
		font-weight: bold;
	}

	.emogi {
		margin-left: 0.3rem;
		position: relative;
		bottom: 2px;
		font-size: 0.7rem;
	}
</style>
