import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Replace with actual API key
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

  interface WeatherData {
    name: string;
    main: { temp: number; humidity: number };
    wind: { speed: number };
    coord: { lat: number; lon: number }; // ✅ Fix: Ensure coord exists
  }

  interface ForecastData {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  }

  interface WeatherState {
    data: WeatherData | null;
    forecast: ForecastData | null;  // ✅ Update forecast type
    loading: boolean;
    error: string | null;
  }
  
  const initialState: WeatherState = {
    data: null,
    forecast: null,
    loading: false,
    error: null,
  };

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const response = await axios.get(WEATHER_API_URL, {
      params: { q: city, appid: API_KEY, units: "metric" },
    });
    return response.data;
  }
);

export const fetchForecast = createAsyncThunk(
  "weather/fetchForecast",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: lat,
        longitude: lon,
        daily: "temperature_2m_max,temperature_2m_min,weathercode",
        timezone: "auto",
      },
    });

    return response.data.daily; // ✅ Return the 'daily' object
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default weatherSlice.reducer;
