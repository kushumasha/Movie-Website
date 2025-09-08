import React, { useEffect, useState } from "react";

const suggestions = [
  "Inception", "The Godfather", "Avatar", "Interstellar", "Gladiator", "Titanic", "The Dark Knight"
];

function getRandomMovie() {
  return suggestions[Math.floor(Math.random() * suggestions.length)];
}

function MovieSuggestions() {
  const [movie, setMovie] = useState(getRandomMovie());

  useEffect(() => {
    // Change suggestion on refresh/exit
    setMovie(getRandomMovie());
  }, []);

  return (
    <div className="my-4 neon-border p-4 rounded-lg">
      <h2 className="text-xl neon-text mb-2">Recommended Movie</h2>
      <div className="text-2xl font-bold">{movie}</div>
    </div>
  );
}

export default MovieSuggestions;
