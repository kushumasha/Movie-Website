const themes = [
  { name: "Neon Blue", class: "neon-blue" },
  { name: "Neon Pink", class: "neon-pink" },
  { name: "Neon Green", class: "neon-green" },
  { name: "Neon Orange", class: "neon-orange" }
];

function NeonThemeSwitcher({ setTheme }) {
  return (
    <div className="flex gap-2">
      {themes.map(t => (
        <button key={t.class} className={`neon-btn ${t.class}`} onClick={() => setTheme(t.class)}>{t.name}</button>
      ))}
    </div>
  );
}
export default NeonThemeSwitcher;
