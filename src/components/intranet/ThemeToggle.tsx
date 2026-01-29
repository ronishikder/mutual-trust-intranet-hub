import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is already enabled
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-link p-2"
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      style={{ color: isDark ? 'var(--mtb-yellow)' : 'var(--muted-fg)' }}
    >
      {isDark ? (
        <Sun style={{ width: 18, height: 18 }} />
      ) : (
        <Moon style={{ width: 18, height: 18 }} />
      )}
    </button>
  );
}
