"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { fetchWeather, fetchForecast } from "../store/weatherSlice";

// Default Forecast (Optional Fallback)
const defaultForecast = [
  { day: "W", temp: 5 },
  { day: "E", temp: 10 },
  { day: "L", temp: 15},
  { day: "C", temp: 20 },
  { day: "O", temp: 25 },
  { day: "M", temp: 30 },
  { day: "E", temp: 35 },
];

const GEO_DB_API_KEY = "355517a5c7mshcca3da4a902ee71p19c3dfjsn7b1a6b019a40"; // Replace with your API key
const GEO_DB_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

const Weather = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const { data, forecast, loading, error } = useAppSelector((state) => state.weather);

  // Convert API response to an array format for the chart
  const forecastData =
    forecast && forecast.time
      ? forecast.time.map((date, index) => ({
          day: new Date(date).toLocaleDateString(),
          temp: forecast.temperature_2m_max[index],
        }))
      : defaultForecast; // Fallback to default if no forecast

  // Debounced function to fetch city suggestions
  const fetchCities = debounce(async (query: string) => {
    if (!query) return;
    try {
      const response = await axios.get(GEO_DB_API_URL, {
        params: { namePrefix: query, limit: 5 },
        headers: {
          "X-RapidAPI-Key": GEO_DB_API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      });
      const cityNames = response.data.data.map((city: any) => city.city);
      setSuggestions(cityNames);
    } catch (err) {
      console.error("Error fetching cities", err);
    }
  }, 500);

  // Fetch city suggestions when `city` updates
  useEffect(() => {
    fetchCities(city);
  }, [city]);

  useEffect(() => {
    if (data && data.coord) {
      dispatch(fetchForecast({ lat: data.coord.lat, lon: data.coord.lon }));
    }
  }, [data, dispatch]);
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // Handle selecting a suggested city
  const handleSelectCity = (selectedCity: string) => {
    setCity(selectedCity);
    setSuggestions([]);
    dispatch(fetchWeather(selectedCity));
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-full">
  
      {/* Autocomplete Dropdown */}
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={handleInputChange}
          className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300 outline-none p-3 rounded-lg w-full shadow-sm transition-all duration-300 ease-in-out"
        />
  
        {suggestions.length > 0 && (
          <ul className="absolute left-0 w-full border border-gray-200 bg-white shadow-lg mt-1 rounded-lg z-10 overflow-hidden max-h-60 overflow-y-auto transition-all duration-200 ease-in-out">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectCity(suggestion)}
                className="p-3 hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-150 ease-in-out"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
  
      {/* Search Button */}
      <button
        onClick={() => dispatch(fetchWeather(city))}
        className="bg-blue-500 text-white p-2 rounded-lg w-full max-w-lg mt-2"
      >
        Search
      </button>
  
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {data && (
        <div className="mt-4 p-6 bg-white shadow-lg rounded-lg text-gray-800 w-full max-w-4xl">
          {/* City Name */}
          <h2 className="text-2xl font-bold text-center text-gray-700">{data.name}</h2>
  
          {/* Full-Width Weather Chart */}
          <div className="w-full h-[400px] bg-white shadow-lg rounded-lg mt-4">
            {error === "API Subscription ended" && (
              <p className="text-gray-500 text-center">Loading...</p>
            )}
            
            <ResponsiveContainer width="100%" height={300}>
          <LineChart data={forecastData}>
            <XAxis dataKey="day" />
            <YAxis domain={[20, 35]} />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
          </div>
  
          {/* Weather Details */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">🌡️ Temperature:</span>
              <span className="text-xl font-semibold text-blue-500">{data.main.temp}°C</span>
            </div>
  
            <div className="flex items-center justify-between">
              <span className="text-gray-600">💧 Humidity:</span>
              <span className="text-xl font-semibold text-green-500">{data.main.humidity}%</span>
            </div>
  
            <div className="flex items-center justify-between">
              <span className="text-gray-600">🌬️ Wind Speed:</span>
              <span className="text-xl font-semibold text-purple-500">{data.wind.speed} m/s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;


  