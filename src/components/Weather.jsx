import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  
    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState ({
      humidity: null,
      windSpeed: null,
      temperature: null,
      location: "Loading...",
      icon: clear_icon
    });

    const allIcons = {
      "01d": clear_icon,
      "01n": clear_icon,
      "02d": cloud_icon,
      "02n": cloud_icon,
      "03d": cloud_icon,
      "03n": cloud_icon,
      "04d": drizzle_icon,
      "04n": drizzle_icon,
      "09d": rain_icon,
      "09n": rain_icon,
      "10d": rain_icon,
      "10n": rain_icon,
      "13d": snow_icon,
      "13n": snow_icon,
    };

    const search = async (city) => {
      if(!city.trim()) {
        alert("Enter City Name");
        return;
      }
      try {
          const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_APP_ID}`;
          const response = await fetch(url);
          const data = await response.json();

          if(data.cod !== 200){
            alert(data.message || "Invalid city name");
          }

          console.log(data);

          const icon = allIcons[data.weather?.[0]?.icon] || clear_icon;

          setWeatherData({
            humidity: data.main?.humidity ?? "N/A",
            windSpeed: data.wind?.speed ?? "N/A",
            temperature: data.main?.temp ? Math.floor(data.main.temp) : "N/A",
            location: data.name || "Unknown Location",
            icon: icon
          });

      } catch (error){
        console.error("Error fetching weather data", error);
        alert("City not found. Please try again.");

      }
    };

    useEffect(()=> {
      search("New Jersey");
    }, []);

  return (
    <div className ="weather">
      <div className ="search-bar">
        <input 
        ref={inputRef} 
        type ="text" 
        placeholder="Enter a City Name"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search(inputRef.current.value);
          }
        }}
         />
        <img 
        src={search_icon} 
        alt="search icon" 
        onClick={() => search(inputRef.current.value)}/>
      </div>
      {weatherData.temperature !== null ? (
        <>
        <img src={weatherData.icon} alt="Weather icon" className="weather-icon"/>
        <p className = "temperature">{weatherData.temperature}°F</p>
        <p className ="location">{weatherData.location}</p>
        <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="Humidity icon" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="Wind icon" />
          <div>
            <p>{weatherData.windSpeed} mph</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
      </>
      ) : (
          <p>Loading weather data...</p>
      )}      
    </div>
  );
};

export default Weather;