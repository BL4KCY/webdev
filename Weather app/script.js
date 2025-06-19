const	apiKay = '8d38d155f284a1e09e8381fdc0933ddf'
const	apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const	weatherIconURL = 'https://openweathermap.org/img/wn/'
const	searchBox = document.querySelector('.search input')
const	searchBtn = document.querySelector('.search button')
const	errorDiv = document.querySelector('.error');
const	weatherDiv = document.querySelector('.weather')


async function checkWeather(cityName) {
	
	let response = await fetch(apiURL + `&appid=${apiKay}&q=${cityName}`)
	if (response.status == 404) {
		errorDiv.style.display = 'block'
		weatherDiv.style.display = 'none'
	} else {
		
		let data = await response.json()
		
		document.querySelector('.city-name').innerHTML = data.name
		document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
		document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
		document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
		document.querySelector('.weather-icon').src = weatherIconURL + data.weather[0].icon + '@4x.png'
		errorDiv.style.display = 'none'
		weatherDiv.style.display = 'block'
	}
}


searchBtn.addEventListener('click', () => {
	let		cityName = searchBox.value;
	searchBox.value = ''
	checkWeather(cityName);
})

