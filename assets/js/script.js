let weather = {
    myLogin: "166ce9dbf117f228937f391618d752ca",
    getClimate: function (here) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          here +
          "&units=imperial&appid=" +
          this.myLogin
      )
        .then((received) => {
          if (!received.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return received.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      console.log(data);
      const { name } = data;
      const { icon, description} = data.weather[0];
      const { temp, humidity, uvi } = data.main;
      const { speed } = data.wind;
      document.querySelector(".place").innerText = "Weather in " + name;
      document.querySelector(".picture").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".clouds").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " m/h";
      
      
      document.querySelector(".weather").classList.remove("loading");
      
    },
    search: function () {
      this.getClimate(document.querySelector(".search-bar").value);
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
  
  weather.getClimate("Mesa");
  
  
  //------------------------------------------------------//
  

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