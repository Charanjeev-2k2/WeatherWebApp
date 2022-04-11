let weather = {
    apiKey: "57c363c3db59051cff2cf9636069dc00",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
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
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      
      alert("Temperature is: " + temp);
  
    },
  };
  

  

var p = document.getElementsByClassName("get-weather");
var select = document.getElementsByClassName("city");
console.log(select);
var x = "New Delhi";
p.onclick = weather.fetchWeather(x);
   

//(document.querySelector(".city" || {}).value) || 