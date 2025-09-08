// Put your bot streaming links below
const botLinks = [
  "https://your-bot-link1.com",
  "https://your-bot-link2.com"
];

function MovieBots() {
  return (
    <div className="my-4 neon-border p-4 rounded-lg">
      <h2 className="text-xl neon-text mb-2">Movie Bots (Stream any file!)</h2>
      <div className="flex flex-col gap-2">
        {botLinks.map((link, idx) => (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn"
          >Bot {idx + 1} — Stream Now</a>
        ))}
      </div>
    </div>
  );
}
export default MovieBots;
