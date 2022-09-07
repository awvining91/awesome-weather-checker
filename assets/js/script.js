/* Welcome to the javascript section! I had to start over many times on this 
project due to various bugs and conflicts but the version that worked the best is shown
below.

To start off I used a let declaration to declare a block-scoped local variable to start off the
logic. I creaded a apikey token on Openweathermap.com and created a function
called gerClimate. 

It passed a parameter called "here" into a fetch method
that used the openweathermap api url concatenated with other inputs such as
units, my appkey and imperial measurements (fahrenheight since we're in the U.S)

After the request for info was made to the openweather server I received the data
back as a "received" parameter that contained the info that I needed. In order to 
use this info I needed to convert it using the .json method to parse it to 
produce a javaScript object.


*/

// Opening statement starts the fetch request
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
        .then((data) => this.showClimate(data));
    },

    /* Once the response is changed via .json I passed teh info allong to the showClimate function.
    Next, I had a series of constant variables defined in regards to the openweathermap
    api documentation.
    
    With the help of the document mentation I was able to pull the info
    I needed out of the openweather map respone and return it to the correspoiding
    section in the html with the aid of the querySelector method.

    Finally I was able to add an event listener to the search bar so that when the 
    user types in a city the appropriate dat will pull up.

    I started running out of time, so I turned in what I had. I hope to resubmit in the
    future to further perfect the acceptence criteria.

    */

    showClimate: function (data) {

      console.log(data);
      const { name } = data;
      const { icon, description} = data.weather[0];
      const { temp, humidity, uvi } = data.main;
      const { speed } = data.wind;

        //The query selector links the transfer of info to the html page
      document.querySelector(".place").innerText = "Weather in " + name;

      document.querySelector(".picture").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";

      document.querySelector(".clouds").innerText = description;

      document.querySelector(".degrees").innerText = temp + "°F";

      document.querySelector(".wet").innerText =
        "Humidity: " + humidity + "%";

      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " m/h";
      
      
      document.querySelector(".weather").classList.remove("loading");

//Search button event listener below   
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
  

  /* I used this youtube video as a reference for the javascript logic https://www.youtube.com/watch?v=WZNG8UomjSI&list=WL&index=10&t=15s credit to original creator */

  /* Resources
  https://openweathermap.org/api/one-call-3#current
 
  https://www.youtube.com/watch?v=WZNG8UomjSI&list=WL&index=10&t=15s
  
  https://www.youtube.com/watch?v=6trGQWzg2AI&list=WL&index=14&t=2s
  
  https://www.youtube.com/watch?v=eMzHhu4TaqY&list=WL&index=13&t=177s
  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  
  https://developer.mozilla.org/en-US/docs/Web/API/Response
  
  https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893

  https://dev.to/shantanu_jana/how-to-make-a-weather-app-using-javascript-4lke

  https://www.geeksforgeeks.org/weather-app-using-vanilla-javascript/

  https://www.studytonight.com/post/how-to-build-a-weather-app-using-javascript-for-complete-beginners



  */