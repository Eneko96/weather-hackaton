<script>
	export let humidity;
	export let feel;
	export let wind;
</script>

<section>
	<div>
		<span> {humidity}% </span>
		<strong> Humidity </strong>
	</div>

	<div>
		<span> {feel} </span>
		<strong> Windspeed </strong>
	</div>

	<div>
		<span> {wind}º </span>
		<strong> Feels like </strong>
	</div>
</section>

<style>
	section {
		background-color: #e248c0;
		box-shadow: 5px 5px black;
		width: 100%;
		border: 3px solid #000;
		padding: 12px 32px;
		margin: 0 auto;
		display: flex;
		text-align: center;
		justify-content: space-evenly;
		/* left: 0;
		right: 0;
		bottom: 32px; */
	}

	span {
		display: block;
		font-weight: 600;
		font-size: 14px;
	}

	strong {
		font-size: 14px;
		font-weight: 500;
	}
</style>
