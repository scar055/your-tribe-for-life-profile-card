export async function load({ fetch }) {
	const res = await fetch(
		`https://fdnd.directus.app/items/person?fields=*&filter[squads][squad_id][cohort][_eq]=2627&sort=name&filter[id][_eq]=249`,
	);
	const data = await res.json();

	return { person: data.data[0] };
}
