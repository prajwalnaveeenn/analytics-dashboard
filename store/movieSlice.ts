import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_API_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = createAsyncThunk(
  "movies/fetchTrending",
  async () => {
    const response = await axios.get(`${TMDB_API_URL}/trending/movie/week`, {
      params: { api_key: TMDB_API_KEY },
    });
    return response.data.results;
  }
);

export const fetchMovieSearch = createAsyncThunk(
  "movies/fetchSearch",
  async (query: string) => {
    const response = await axios.get(`${TMDB_API_URL}/search/movie`, {
      params: { api_key: TMDB_API_KEY, query },
    });
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [], loading: false, error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      })
      .addCase(fetchMovieSearch.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export default movieSlice.reducer;
