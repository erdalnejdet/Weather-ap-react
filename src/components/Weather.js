import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c17a68a3ab95d01eff8e1b99d1d324e&units=metric&lang=tr`
      );
      setWeather(response.data);
      setCity('');
    
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='container'>
        <h1>Hava Durumu Uygulaması</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className='form-control'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Şehir"
            required
          />
          <button type="submit">Ara</button>
        </form>
        {weather && (
          <div className='result'>
            <h2>{weather.name}</h2>
            <p>Sıcaklık: {weather.main.temp}°C</p>
            <p>Hissedilen Sıcaklık: {weather.main.feels_like}°C</p>
            <p>Hava Durumu: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;