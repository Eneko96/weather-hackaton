<script>
	import { onMount } from 'svelte';
	import { funFacts } from '../services/utils';
	import { fade } from 'svelte/transition';
	const installed = Boolean(localStorage.getItem('installPrompt'));
	let funFact = installed ? funFacts[Math.floor(Math.random() * funFacts.length)] : funFacts.at(-1);
	let installable = installed ? false : true;

	function checkDevice() {
		return window.innerWidth < 768;
	}

	onMount(() => {
		const interval = setInterval(() => {
			function nonEqualIndex() {
				const randomNum = Math.floor(Math.random() * funFacts.length);
				if (funFacts[randomNum] === funFacts.at(-1)) installable = true;
				else installable = false;
				const exist = funFacts[randomNum] === funFact;
				if (exist) {
					return nonEqualIndex();
				} else {
					return randomNum;
				}
			}
			const randomNum = nonEqualIndex();
			funFact = funFacts[randomNum];
		}, 15000);

		return () => {
			clearInterval(interval);
		};
	});

	const handleInstall = async () => {
		console.log('👍', 'butInstall-clicked');
		// @ts-ignore-next-line
		const promptEvent = window.deferredPrompt;

		if (!promptEvent) {
			// The deferred prompt isn't available.
			console.log('👎', 'The deferred prompt isn`t available.');
			return;
		}

		// Show the install prompt.
		promptEvent.prompt();
		// Log the result
		const result = await promptEvent.userChoice;
		console.log('👍', 'userChoice', result);
		// Reset the deferred prompt variable, since
		// prompt() can only be called once.
		// @ts-ignore-next-line
		window.deferredPrompt = null;
		handleClose();
	};

	const handleClose = () => {
		installable = false;
		localStorage.setItem('installPrompt', 'true');
	};

	$: {
		const isPhone = checkDevice();
		const isInstalled = localStorage.getItem('installPrompt') || false;

		window.addEventListener('beforeinstallprompt', (event) => {
			// Prevent the mini-infobar from appearing on mobile.
			event.preventDefault();
			if (!isInstalled && isPhone) {
				setShow(true);
			}
			console.log('👍', 'beforeinstallprompt', event);
			// Stash the event so it can be triggered later.
			// @ts-ignore-next-line
			window.deferredPrompt = event;
		});
	}
</script>

<main>
	<div class="watch-cap" />
	<div class="watch-container">
		<div class="watch-arrow" />
	</div>
	{#key funFact}
		<div class="fun-fact" in:fade|local={{ delay: 300 }}>
			<p>{funFact}</p>
		</div>
	{/key}
	{#if installable}
		<button class="install-cap" on:click={handleInstall}>Install</button>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.fun-fact {
		animation-name: tilt;
		animation-duration: 1s;
		animation-delay: 13s;
		animation-iteration-count: infinite;
		height: 5rem;
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
