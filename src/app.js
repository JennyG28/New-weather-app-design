      let now = new Date();
      console.log(new Date());

      let day = now.getDay();
      console.log(day);

      let year = now.getFullYear();
      console.log(year);

      let month = now.getMonth();
      console.log(month);

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

      console.log(`Today is ${dayOfTheWeek}, ${monthName} ${date}, ${year}`);

      function formatDate(now) {
        console.log(`Today is ${dayOfTheWeek}, ${monthName} ${date}, ${year}`);
      }
      formatDate(now);

      let todaysDay = document.querySelector("#todays-day");

      todaysDay.innerHTML = `${dayOfTheWeek}, ${monthName} ${date}, ${year}`;

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

      function displayWeatherCondition(response) {
        document.querySelector("#current-city").innerHTML = response.data.name;
        console.log(response);

        celsiusTemperature = response.data.main.temp;
        let celsiusLink = document.querySelector("#celsius-link");
        celsiusLink.style = "color: #000000";
        fahrenheitLink.style = "color: #C0C0C0";

        document.querySelector("#temperature-number").innerHTML = Math.round(
          response.data.main.temp
        );
        document.querySelector("#weather-description").innerHTML =
          response.data.weather[0].description;

        document.querySelector("#max-temp").innerHTML = Math.round(
          response.data.main.temp_max
        );
        document.querySelector("#min-temp").innerHTML = Math.round(
          response.data.main.temp_min
        );
        document.querySelector("#humidity").innerHTML =
          response.data.main.humidity;
        document.querySelector("#wind").innerHTML = Math.round(
          response.data.wind.speed
        );
        let iconElement = document.querySelector("#icon");
        iconElement.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );

        let pictureElement = document.querySelector("#picture");
        let background = response.data.weather[0].icon;
        if (background === "01d"){
        backgroundImage.style = "background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%)";
        pictureElement.setAttribute(
          "src",
          `src/img-1.png`
        );
        } else if (background === "02d") {
          backgroundImage.style = "background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)";
           pictureElement.setAttribute(
          "src",
          `src/img-2.png`
        );
        } else if (background === "03d" || background === "04d") {
          backgroundImage.style = "background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);";
           pictureElement.setAttribute(
          "src",
          `src/img-3.png`
        );
        } else if (background === "09d" || background === "10d" || background === "11d") {
          backgroundImage.style = "background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);";
           pictureElement.setAttribute(
          "src",
          `src/img-4.png`
        );
        } else if (background === "13d") {
          backgroundImage.style = "background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);";
           pictureElement.setAttribute(
          "src",
          `src/img-5.png`
        );
         } else if (background === "50d") {
          backgroundImage.style = "background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);";
           pictureElement.setAttribute(
          "src",
          `src/img-6.png`
        );
        } 
      
       
        
      }
      

      function searchCity(city) {
        let apiKey = "c330d6d567e845b62d32598b378046e4";
        //The default temperature unit is °F
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
        axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
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

      function showPosition(position) {
        let apiKey = "c330d6d567e845b62d32598b378046e4";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`;

        axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
      }

      function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(showPosition);
      }

      let button = document.querySelector("button");
      button.addEventListener("click", getCurrentPosition);

      function displayFahrenheitTemperature(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature-number");
        let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
        temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
        let fahrenheitLink = document.querySelector("#fahrenheit-link");
        fahrenheitLink.style = "color: #000000";
        celsiusLink.style = "color: #808080";
      }

      function displayCelsiusTemperature(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature-number");
        temperatureElement.innerHTML = Math.round(celsiusTemperature);
        let celsiusLink = document.querySelector("#celsius-link");
        celsiusLink.style = "color: #000000";
        fahrenheitLink.style = "color: #808080";
      }

      //Global variable. It can be accessed from any function. It will have no value "null" when page is load.
      let celsiusTemperature = null;

      //When this is click the funtion displayCelsiusTemperature is called
      let fahrenheitLink = document.querySelector("#fahrenheit-link");
      fahrenheitLink.style = "color: #808080";
      fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

      let celsiusLink = document.querySelector("#celsius-link");
      celsiusLink.style = "color: #000000";
      celsiusLink.addEventListener("click", displayCelsiusTemperature);

      let backgroundImage = document.querySelector("#background");
      backgroundImage.style = "background-color: #FFA19F";

      searchCity("New York");