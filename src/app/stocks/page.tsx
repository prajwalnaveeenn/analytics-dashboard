"use client";
import React from "react";
import Stock from "@/components/stock";
import Link from "next/link";

const StockPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text 
               bg-gradient-to-r from-black via-blue-800 to-black 
               drop-shadow-lg mb-4">Stocks Analytics</h1>
      
      <Stock />

      <div className="flex justify-center mt-6">
        <Link href="/">
        <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-black transition">
  Back to Dashboard
</button>

        </Link>
      </div>
    </div>

  );
};

export default StockPage;
