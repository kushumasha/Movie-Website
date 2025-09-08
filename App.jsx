import React, { useState } from "react";
import MovieSearch from "./MovieSearch";
import MovieSuggestions from "./MovieSuggestions";
import MovieBots from "./MovieBots";
import VideoStreamer from "./VideoStreamer";
import NeonThemeSwitcher from "./NeonThemeSwitcher";

function App() {
  const [theme, setTheme] = useState("neon-blue");
  const logoLink = "https://your-logo-link.com"; // এখানে আপনার লোগো লিঙ্ক দিন

  return (
    <div className={`min-h-screen flex flex-col items-center bg-gradient-to-tr from-black to-gray-900 ${theme}`}>
      <header className="flex justify-between items-center w-full p-4">
        <a href={logoLink} target="_blank" rel="noopener noreferrer">
          <img src="/logo.png" alt="Premium Logo" className="h-16 neon-glow" />
        </a>
        <NeonThemeSwitcher setTheme={setTheme} />
      </header>
      <main className="w-full max-w-2xl">
        <h1 className="neon-text text-center text-4xl font-bold mb-4">Premium Movie Portal</h1>
        <MovieSearch />
        <MovieSuggestions />
        <MovieBots />
        <VideoStreamer />
      </main>
      <footer className="text-center text-gray-400 mt-8 mb-4">
        &copy; {new Date().getFullYear()} Premium Movie Website
      </footer>
    </div>
  );
}

export default App;
