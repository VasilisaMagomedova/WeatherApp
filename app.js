let weather = {
	"apiKey": "9d6b1afd5545c7a0f0ee39e384ad3e3f",
	fetchWeather: function(city) {
		fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
		+ city 
		+ "&units=metric&appid=" 
		+ this.apiKey
		)
		.then((response) => response.json())
		.then((data) => this.displayWeather(data));
	},
	displayWeather: function(data) {
		const { name } = data;
		const { description } = data.weather[0];
		const { temp, pressure, humidity } = data.main;
		const { speed } = data.wind;
		document.querySelector(".city").innerText = name;
		document.querySelector(".cloudiness").innerText = description;
		document.querySelector(".temp").innerText = Math.round(temp) + "°";
		document.querySelector(".value-pressure").innerText = pressure + " hpa";
		document.querySelector(".value-humidity").innerText = humidity + "%";
		document.querySelector(".value-speed").innerText = Math.round(speed) + " km/h";
	},
	search: function() {
		this.fetchWeather(document.querySelector(".search-bar").value);
	}
};

document.querySelector(".search-card button").addEventListener("click", function() {
	weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
	if (event.key == "Enter") {
		weather.search();
	}
});