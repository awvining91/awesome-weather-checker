let weather = {
    apiKey: "166ce9dbf117f228937f391618d752ca",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      console.log(data);
      const { name } = data;
      const { icon, description} = data.weather[0];
      const { temp, humidity, uvi } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " m/h";
      
      
      document.querySelector(".weather").classList.remove("loading");
      
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Mesa");
  
  
  //------------------------------------------------------//
  
  var getUVIndex = function (lat, lon) {
    // formate the OpenWeather api url
    var apiUrl =
      dailyUVIndexApiStarts +
      personalAPIKey +
      "&lat=" +
      lat +
      "&lon=" +
      lon +
      "&" +
      unit;
    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        // remove all class background
        $("#UVIndexToday").removeClass();
        $("#UVIndexToday").html(response.value);
        if (response.value < 3) {
          $("#UVIndexToday").addClass("p-1 rounded bg-success text-white");
        } else if (response.value < 8) {
          $("#UVIndexToday").addClass("p-1 rounded bg-warning text-white");
        } else {
          $("#UVIndexToday").addClass("p-1 rounded bg-danger text-white");
        }
      });
  };

  /* I used this youtube video as reference for the javascript logic <!-- I used this youtube as reference for the html https://www.youtube.com/watch?v=WZNG8UomjSI&list=WL&index=10&t=15s credit to original creator */

  /* Resources
  https://openweathermap.org/api/one-call-3#current
 
  https://www.youtube.com/watch?v=WZNG8UomjSI&list=WL&index=10&t=15s
  
  https://www.youtube.com/watch?v=6trGQWzg2AI&list=WL&index=14&t=2s
  
  https://www.youtube.com/watch?v=eMzHhu4TaqY&list=WL&index=13&t=177s
  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  
  https://developer.mozilla.org/en-US/docs/Web/API/Response
  
  https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893



  */