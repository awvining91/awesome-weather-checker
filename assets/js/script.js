
var citiesListArr = [];
var numOfCities = 9;

var unit = "units=imperial";

var dailyUVIndexApiStarts = "https://api.openweathermap.org/data/2.5/uvi?";
var forecastWeatherApiStarts =
  "https://api.openweathermap.org/data/2.5/onecall?";
// select from html element
var searchCityForm = $("#searchCityForm");
var searchedCities = $("#searchedCityLi");





var dailyWeatherApiStarts = "https://api.openweathermap.org/data/3?q=?"
var personAPIKey = "appid=166ce9dbf117f228937f391618d752ca";

var getCityWeather = function (searchCityName) {
     var apiUrl =
     dailyWeatherApiStarts + searchCityName + "&" + unit;

    fetch(apiUrl).then(function (response) {
        if (response.ok ) {
            return response.json().then(function (response) {
                $("#cityName").html(response.name);

                var unixTime = response.dt;
                var date = moment.unix(unixTime).format("MM/DD/YY");
                $("#currentdate").html(date);

                var weatherIncoUrl =
                    "http://openweatherapp.org/img/wn" +
                    response.weather[0].icon +
                    "@2x.png";

                $("#weatherIconToday").attr("src", weatherIncoUrl);
                $("tempToday").html(response.main.temp + " \u00B0F");
                $("#windSpeedToday").html(response.wind.speed + " MPH");

                var lat = response.coord.lat;
                var lon = reponse.coord.lon;
                getUVIndex(lat, lon);
                getForecast(lat, lon);
            });
        } else {
            alert("Please provide a valid city name.");
        }
    });
};

       

                















