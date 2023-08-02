function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const apiKey = "YOUR_WEATHER_API_KEY"; // Replace with your actual weather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        displayError();
      });
  }
  
  function displayWeather(data) {
    const weatherDataElement = document.getElementById("weatherData");
  
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
  
    const weatherInfoHTML = `
      <h2>${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Weather: ${weatherDescription}</p>
    `;
  
    weatherDataElement.innerHTML = weatherInfoHTML;
  }
  
  function displayError() {
    const weatherDataElement = document.getElementById("weatherData");
    weatherDataElement.innerHTML = "<p>Error fetching weather data. Please try again later.</p>";
  }
  
  // Add any additional JavaScript code specific to the weather reporting page here
  