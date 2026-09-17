<script>
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";

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

		background: #99ffaa;
		background: linear-gradient(
			135deg,
			rgba(153, 255, 170, 1) 0%,
			rgba(114, 242, 242, 1) 100%
		);
	}
</style>
