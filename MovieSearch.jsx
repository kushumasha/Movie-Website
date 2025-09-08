import React, { useState } from "react";

const imdbApiKey = import.meta.env.VITE_IMDB_API_KEY || "d56c5267";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setError("");
    // IMDB API fetch
    try {
      const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${imdbApiKey}`);
      const data = await res.json();
      if (data && data.Title) {
        // Redirect to YouTube search for that movie
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(data.Title + " trailer")}`, "_blank");
      } else {
        setError("Movie not found.");
      }
    } catch {
      setError("API Error!");
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 mb-4 neon-border p-4 rounded-lg">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="flex-1 p-2 bg-black text-white neon-input"
        placeholder="Search Movie (IMDB)"
      />
      <button className="neon-btn px-4 py-2" type="submit">Search</button>
      {error && <span className="text-red-400 mt-2">{error}</span>}
    </form>
  );
}

export default MovieSearch;
