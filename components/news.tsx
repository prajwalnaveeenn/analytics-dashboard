"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { fetchNews } from "../store/newsSlice";

const News = () => {
  const [category, setCategory] = useState("technology");
  const dispatch = useAppDispatch();
  const { articles, loading, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [category, dispatch]);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-full">
      <h2 className="text-xl font-semibold mb-4">Latest News</h2>
      
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded-lg mb-4"
      >
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
        <option value="entertainment">Entertainment</option>
      </select>

      {/* Loading/Error States */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* News Articles */}
      <div className="grid gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-md mb-2" />
            )}
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.source.name}</p>
            <p className="text-gray-800">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
