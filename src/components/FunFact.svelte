<script>
	import { onMount } from 'svelte';
	import { funFacts } from '../services/utils';
	import { fade } from 'svelte/transition';
	let arrowRef;
	let show = false;
	let funFact = 'You can tell the temperature by counting a cricket’s chirps!';

	onMount(() => {
		const timer = setTimeout(() => {
			show = true;
		}, 3000);

		const interval = setInterval(() => {
			funFact = funFacts[Math.floor(Math.random() * funFacts.length)];
		}, 15000);

		return () => {
			clearInterval(interval);
			clearTimeout(timer);
		};
	});
</script>

{#if show}
	<main transition:fade>
		<div class="watch-cap" />
		<div class="watch-container">
			<div class="watch-arrow" />
		</div>
		{#key funFact}
			<div class="fun-fact" in:fade={{ delay: 200 }} out:fade={{ duration: 100 }}>
				<p>{funFact}</p>
			</div>
		{/key}
	</main>
{/if}

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		margin-top: 4rem;
		width: 85%;
	}

	.fun-fact {
		animation-name: tilt;
		animation-duration: 0.5s;
		animation-delay: 13.5s;
		animation-iteration-count: infinite;
	}

	@keyframes tilt {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(0.7deg);
		}

		50% {
			transform: rotate(-0.7deg);
		}

		75% {
			transform: rotate(0.7deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.watch-container {
		position: relative;
		height: 2rem;
		width: 2rem;
		background: #333;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}

	.watch-cap {
		height: 5px;
		width: 5px;
		margin-top: -5px;
		background: #333;
		border-radius: 1px;
	}

	.watch-arrow {
		background: white;
		width: 1.5px;
		height: 0.74rem;
		background: white;
		margin-top: 4px;
		transform-origin: bottom;
		animation: arrow 15s infinite;
	}

	@keyframes arrow {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(36deg);
		}
		20% {
			transform: rotate(72deg);
		}
		30% {
			transform: rotate(108deg);
		}
		40% {
			transform: rotate(144deg);
		}
		50% {
			transform: rotate(180deg);
		}
		60% {
			transform: rotate(216deg);
		}
		70% {
			transform: rotate(252deg);
		}
		80% {
			transform: rotate(288deg);
		}
		90% {
			transform: rotate(324deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
