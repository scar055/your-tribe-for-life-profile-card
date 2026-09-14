<script>
	let { data } = $props();
	let person = $derived(data.person);
</script>

<section>
	<h1>{person.name}</h1>
	<p>{person.bio}</p>
</section>

<style>
	section {
		width: 260px;
		padding: 34px;
		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(18px);
		border: 1px solid rgba(255, 255, 255, 0.45);
		border-radius: 18px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
	}
</style>
