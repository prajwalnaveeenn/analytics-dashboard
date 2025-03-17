"use client";
import React from "react";;
import Movie from "@/components/movie";
import Link from "next/link";

const MoviePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">

    <div className="p-6">
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text 
               bg-gradient-to-r from-black via-blue-800 to-black 
               drop-shadow-lg mb-4">
  Movie Time!
</h1>

      
      <Movie />

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

export default MoviePage;
