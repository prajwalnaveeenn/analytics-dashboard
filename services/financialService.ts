import axios from "axios";

const API_KEY = "4AWXAEG9LYY20ZQY";
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchStockData = async (symbol: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol,
        apikey: API_KEY,
      },
    });

    return response.data["Time Series (Daily)"];
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};
