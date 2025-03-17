"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { fetchStock } from "../store/financeSlice";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

const Stock = () => {
  const [symbol, setSymbol] = useState("");
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.finance);

  const handleSearch = () => {
    if (symbol) dispatch(fetchStock(symbol));
  };

  // Format Data for Chart
  const chartData = data
    ? {
        labels: Object.keys(data).slice(0, 7).reverse(),
        datasets: [
          {
            label: "Stock Price",
            data: Object.values(data)
              .slice(0, 7)
              .reverse()
              .map((d: any) => parseFloat(d["4. close"])),
            borderColor: "blue",
            fill: false,
          },
        ],
      }
    : null;

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <input
        type="text"
        placeholder="Enter stock symbol (e.g. AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        className="border-black p-2 rounded-lg mr-2"
      />
      <button onClick={handleSearch} className="bg-green-500 text-white p-2 rounded-lg">
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default Stock;
