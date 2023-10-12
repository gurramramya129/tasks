import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '784a96ee02e66cfb642b704dfb2625eb';  

  useEffect(() => {
    if (city === '') {
      return; 
    }

    setLoading(true);
    setError(null);

    fetch(`https://openweathermap.org/api=${city}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;


