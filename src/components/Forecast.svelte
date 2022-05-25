<script>
	import { fly } from 'svelte/transition';
	export let maxTemp;
	export let minTemp;
	export let delay;
	export let date;
	export let icon;

	const formattedDate = new Intl.DateTimeFormat('detault', { weekday: 'long' }).format(
		new Date(date)
	);
</script>

<article
	in:fly={{ delay: delay !== 0 ? delay * 100 + 600 : 600, x: -100 }}
	out:fly={{ delay: delay !== 0 ? delay * 100 : 0, x: +100 }}
>
	<section class="temperature-container">
		<p>{minTemp}º</p>
		<p>/</p>
		<p>{maxTemp}º</p>
	</section>
	<small>{formattedDate}</small>
	<img src={icon} alt="weather icon" />
</article>

<style>
	article {
		display: flex;
		background: var(--tertiary);
		box-shadow: 5px 5px black;
		border: 3px solid #000;
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
	img {
		width: 50px;
		height: 50px;
		object-fit: cover;
		margin-left: auto;
	}
</style>
