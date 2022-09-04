

var dailyWeatherApiStarts = "https://api.openweathermap.org/data/3?q=?"
var personAPIKey = "appid=166ce9dbf117f228937f391618d752ca";

var getCityWeather = function (searchCityName) {
     var apiUrl =
     dailyWeatherApiStarts + searchCityName + "&" + unit;

    fetch(apiUrl).then(function (response)) {
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
                








            }









        }





    }




























}