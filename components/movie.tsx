"use client";

import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { fetchTrendingMovies, fetchMovieSearch } from "../store/movieSlice";

const Movie = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error } = useAppSelector((state) => state.movies);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  const handleSearch = () => {
    if (query) dispatch(fetchMovieSearch(query));
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-full">
      <input
        type="text"
        placeholder="Search Movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded-lg w-full"
      />
<button
  onClick={handleSearch}
  className="w-full mt-2 px-4 py-3 text-lg font-semibold text-white 
             bg-gradient-to-r from-green-500 to-blue-500 
             rounded-lg shadow-md transition-all duration-300 
             transform hover:scale-105 active:scale-95 active:opacity-80"
>
  🔍 Search
</button>


      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
        {movies.map((movie: any) => (
          <div key={movie.id} className="p-2 border rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg"
            />
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-sm">⭐ {movie.vote_average}</p>
            <p className="text-xs">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
