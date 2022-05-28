export async function getWeatherFrom(query = 'Buenos Aires') {
	if (typeof query === 'number') {
		return fetch(`/api/get-weather?q=${query[0]},${query[1]}`).then((res) => res.json());
	}
	return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}

export async function getForecast(query = 'London&days=3') {
	return fetch(`/api/get-forecast?q=${query}`).then((res) => res.json());
}

