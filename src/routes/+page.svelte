<script>
	import github from "$lib/assets/github.svg";
	import linkedin from "$lib/assets/linkedin-svgrepo-com.svg";
	import link from "$lib/assets/link.svg";
	import mail from "$lib/assets/mail.svg";

	let { data } = $props();
	let person = $derived(data.person);
</script>

<section>
	<img src={person.avatar} alt="profile pic" width="80" />
	<h1>{person.name}</h1>
	<p>
		<img src={mail} alt="github icon" width="24" /> rowanvanlaar@gmail.com
	</p>
	<a href="https://github.com/{person.github_handle}">
		<img src={github} alt="github icon" width="24" /> github
	</a>
	<a href="www.linkedin.com/in/rowan-van-laar-777369324">
		<img src={linkedin} alt="github icon" width="24" /> linkedin
	</a>
	<a href="rowanvanlaar.nl">
		<img src={link} alt="github icon" width="24" /> website
	</a>
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
		display: grid;
		grid-template-columns: 0.5fr 1fr;
		column-gap: 1em;
		width: 40%;

		img {
			grid-row: span 5;
			align-self: center;
			border-radius: 50%;
		}
		p,
		a {
			display: flex;
			gap: 0.5em;
			grid-column: 2;
			color: black;
			margin-block-end: 1em;

			img {
				border-radius: 0;
			}
		}
	}
</style>
