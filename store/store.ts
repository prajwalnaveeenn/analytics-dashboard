import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import newsReducer from "./newsSlice";
import financeReducer from "./financeSlice";
import movieReducer from "./movieSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    news: newsReducer,
    finance: financeReducer,
    movies: movieReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
