const FETCH_OPTIONS = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': 'd46e507997msh53e51728c3c8827p1bd79djsn9c275bd08a8d'
	}
};

export async function get(event) {
  const { searchParams } = event.url;
  const query = searchParams.get('q') ?? 'London&days=3';
  const days = searchParams.get('days')
  console.log(query, days)

  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&${days}`,FETCH_OPTIONS
  )

  const data = await response.json();

  const { location, current, forecast } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
  const { text, icon } = condition;
  const { forecastday } = forecast;

  const body = {
    conditionText: text,
		conditionIcon: icon,
		country,
		localtime,
		locationName: name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir,
    forecast: forecastday
  }

  return {
    status: 200,
    body
  }
}
