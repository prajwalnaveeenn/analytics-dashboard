import axios from "axios";

const STOCK_API_KEY = process.env.NEXT_PUBLIC_STOCK_API_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchStockData = async (symbol: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol,
        apikey: STOCK_API_KEY,
      },
    });

    return response.data["Time Series (Daily)"];
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};
