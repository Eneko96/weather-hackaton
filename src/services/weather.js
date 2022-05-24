export async function getWeatherFrom(query = 'Buenos Aires') {
	console.log('%c getWeatherFrom', 'background-color: red', query);
	if (typeof query === 'number') {
		return fetch(`/api/get-weather?q=${query[0]},${query[1]}`).then((res) => res.json());
	}
	return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}
