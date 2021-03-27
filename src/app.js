let now = new Date();

      let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ];
     
let dayOfTheWeek = days[now.getDay()];

let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

let monthName = months[now.getMonth()];

let date = now.getDate();
let todaysDay = document.querySelector("#todays-day");

todaysDay.innerHTML = `${dayOfTheWeek}, ${monthName} ${date}`;

let hour = now.getHours();
      if (hour < 10) {
        hour = `0${hour}`;
      }
let minutes = now.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

let exactTime = document.querySelector("#current-time");
exactTime.innerHTML = `${hour}:${minutes}`;
    

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

//It fetches current weather condition for searched city
function displayWeatherCondition(response) {

  document.querySelector("#current-city").innerHTML = response.data.name;
  console.log(response);

  celsiusTemperature = response.data.main.temp;
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.style = "color: #000000";
  fahrenheitLink.style = "color: #696969";

  document.querySelector("#temperature-number").innerHTML = Math.round(
  response.data.main.temp);

  document.querySelector("#weather-description").innerHTML =
  response.data.weather[0].description;

  document.querySelector("#max-temp").innerHTML = Math.round(
  response.data.main.temp_max);

  document.querySelector("#min-temp").innerHTML = Math.round(
  response.data.main.temp_min);

  document.querySelector("#humidity").innerHTML =
  response.data.main.humidity

  document.querySelector("#wind").innerHTML = Math.round(
  response.data.wind.speed);

  //Determines background color, woman image and main icon based on weather description
  let iconElement = document.querySelector("#icon");
  let pictureElement = document.querySelector("#picture");
  let background = response.data.weather[0].icon;
        if (background === "01d"){
        backgroundImage.style = "background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%)";
        pictureElement.setAttribute(
          "src",
          `src/img-1.png`
        );
         iconElement.setAttribute(
          "src",
          `src/day.svg`
        );
         } else if (background === "01n"){
        backgroundImage.style = "background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)";
        pictureElement.setAttribute(
          "src",
          `src/img-1.png`
        );
         iconElement.setAttribute(
          "src",
          `src/night.svg`
        ); 
        } else if (background === "02d") {
          backgroundImage.style = "background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-2.png`
        );
           iconElement.setAttribute(
          "src",
          `src/cloudyday.svg`
        );
      } else if (background === "02n") {
          backgroundImage.style = "background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-2.png`
        );
           iconElement.setAttribute(
          "src",
          `src/cloudy-night-1.svg`
        );
        } else if (background === "03d" || background === "04d") {
          backgroundImage.style = "background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);";
           pictureElement.setAttribute(
          "src",
          `src/img-3.png`
        );
          iconElement.setAttribute(
          "src",
          `src/cloudy.svg`
        );
        } else if (background === "04n" || background === "03n") {
          backgroundImage.style = "background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-3.png`
        );
          iconElement.setAttribute(
          "src",
          `src/cloudy-night-3.svg`
        );
        } else if (background === "09d" || background === "10d") {
          backgroundImage.style = "background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);";
           pictureElement.setAttribute(
          "src",
          `src/img-4.png`
        );
         iconElement.setAttribute(
          "src",
          `src/rainy-5.svg`
        );
        } else if (background === "09n" || background === "10n") {
          backgroundImage.style = "background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-4.png`
        );
           iconElement.setAttribute(
          "src",
          `src/rainy-5.svg`
        );
         } else if (background === "11d" ) {
          backgroundImage.style = "background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-4.png`
        );
         iconElement.setAttribute(
          "src",
          `src/thunder.svg`
        );
        } else if (background === "11n" ) {
          backgroundImage.style = "background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-4.png`
        );
         iconElement.setAttribute(
          "src",
          `src/thunder.svg`
        );
        } else if (background === "13d") {
          backgroundImage.style = "background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);";
           pictureElement.setAttribute(
          "src",
          `src/img-5.png`
        );
        iconElement.setAttribute(
          "src",
          `src/snowy-6.svg`
        );
        } else if (background === "13n" ) {
          backgroundImage.style = "background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-5.png`
        );
         iconElement.setAttribute(
          "src",
          `src/snowy-6.svg`
        );
         } else if (background === "50d") {
          backgroundImage.style = "background-image: linear-gradient(to right, #868f96 0%, #596164 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-7.png`
        );
        iconElement.setAttribute(
          "src",
          `src/rainy-4.svg`
        );
        } else if (background === "50n" ) {
          backgroundImage.style = "background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-7.png`
        );
         iconElement.setAttribute(
          "src",
          `src/rainy-4.svg`
        );
        }       
      }

//Fetches forecast every three hours
function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 6; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
    <div class="col-2">
      <h6>
        ${formatHours(forecast.dt * 1000)}
      </h6>
      <img
        src="https://openweathermap.org/img/wn/${
          forecast.weather[0].icon
        }@2x.png"/>
      <div class="weather-forecast-temperature">
        <strong>
          ${Math.round(forecast.main.temp_max)}°
        </strong>
        ${Math.round(forecast.main.temp_min)}°
      </div>
    </div>
  `;
  }
}

//3. The searchCity funtion gets the api information that will send a response to functions: displayWeatherCondition and displayForecast
function searchCity(city) {

  let apiKey = "c330d6d567e845b62d32598b378046e4";
        
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
      
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayForecast);
                
}

//2. The search function runs...
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city").value;

  searchCity(city);
}
      

//1. the program gets the info from input-form and goes to the Search function.
let form = document.querySelector("#input-form");
form.addEventListener("submit", search);

      
//Gets location coordinates and triggers functions displayWeatherCondition and displayForecast
function showPosition(position) {
  let apiKey = "c330d6d567e845b62d32598b378046e4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`;

  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);

  //This part makes sure to display the forecast for the current position
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayForecast);

}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

//It converts to Fahrenheit and determines font style
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  
  let temperatureElement = document.querySelector("#temperature-number");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.style = "color: #000000";
  celsiusLink.style = "color: #696969";
}

//It assigns Celsius temperature and determines font style
function displayCelsiusTemperature(event) {
event.preventDefault();
        
  let temperatureElement = document.querySelector("#temperature-number");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.style = "color: #000000";
  fahrenheitLink.style = "color: #696969";
}

//Global variable. It can be accessed from any function. It will have no value "null" when page is load.
let celsiusTemperature = null;

//When this is clicked the funtion displayFahrenheitTemperature is called
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.style = "color: #696969";
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

//When this is clicked the funtion displayCelsiusTemperature is called
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.style = "color: #000000";
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let backgroundImage = document.querySelector("#background");

searchCity("New York");