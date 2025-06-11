
export async function getWeatherByCoords(lat, lon, apiKey) {
const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

if (!response.ok) throw new Error('Failed to fetch weather')

const data = await response.json();
return data;
}