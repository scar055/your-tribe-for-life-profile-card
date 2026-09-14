<script>
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	{@render children()}
</main>

<style>
	main {
		display: flex;
		height: 100dvh;
		justify-content: center;
		align-items: center;
	}
</style>
