<div>
	<slot />
</div>

<style>
	:global(body) {
		background: white;
		display: grid;
		place-content: center;
		margin: 0;
		min-height: 100vh;
	}

	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}

	:global(h1, h2, h3, h4, h5) {
		margin: 0;
	}

	div {
		background: var(--primary);
		width: 400px;
		max-width: 100%;
		display: block;
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		position: relative;
	}

	@media screen and (max-width: 600px) {
		div {
			height: 100vh;
			width: 100vw;
		}
	}

	@media screen and (min-width: 1200px) {
		div {
			aspect-ratio: 8 / 16;
		}
	}
</style>
