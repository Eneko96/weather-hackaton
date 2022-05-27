<script>
	export let icon;
	export let width = '3rem';
	export let height = '3rem';
</script>

<div>
	<svelte:component this={icon} {width} {height} />
</div>
