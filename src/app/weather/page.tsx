"use client";
import React, { useState, useEffect } from "react";
import Weather from "@/components/weather";
import Link from "next/link";
import { FaSun, FaSnowflake } from "react-icons/fa";

const WeatherPage = () => {
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    setTemperature(Math.floor(Math.random() * 40) - 10);
  }, []);

  const isHot = temperature && temperature > 25;
  const isCold = temperature && temperature <= 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-5xl text-center">
        {/* ATTRACTIVE TITLE */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg mb-4">
          Weather Forecast
        </h1>
        <h2 className="text-gray-600 mb-6">Check the current weather and forecast details</h2>

        {/* WEATHER ICON */}
        <div className="flex items-center justify-center mb-6">
          {isHot ? (
            <FaSun size={60} className="text-yellow-500 animate-pulse" />
          ) : isCold ? (
            <FaSnowflake size={60} className="text-blue-400 animate-spin-slow" />
          ) : (
            <p className="text-gray-600 text-xl">Weather for the next 7 days!</p>
          )}
        </div>

        {/* WEATHER COMPONENT (Graph is inside this) */}
        <div className="w-full max-w-5xl p-4 bg-gray-100 rounded-lg shadow-md">
          <Weather />
        </div>

        {/* BACK BUTTON */}
        <div className="flex justify-center mt-6">
          <Link href="/">
          <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-black transition">
  Back to Dashboard
</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
