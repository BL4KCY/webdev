const	apiKay = '8d38d155f284a1e09e8381fdc0933ddf'
const	apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const	searchBox = document.querySelector('.search input')
const	searchBtn = document.querySelector('.search button')
const	weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(cityName) {
	
	let response = await fetch(apiURL + `&appid=${apiKay}&q=${cityName}`)
	let data = await response.json()
	
	document.querySelector('.city-name').innerHTML = data.name
	document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
	document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
	document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
	
	console.log(weatherIcon.dataset.lucide );
	
	
	// if (data.weather[0].main == 'Clouds') {
		
	// 	weatherIcon.dataset.lucide = 'Haze'
	// }
}

searchBtn.addEventListener('click', () => {
	let		cityName = searchBox.value;
	searchBox.value = ''
	checkWeather(cityName);
})

