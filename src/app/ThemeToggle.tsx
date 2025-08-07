'use client'

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // ✅ path must match

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 px-4 py-2 rounded-full bg-zinc-800 text-white shadow-md hover:bg-zinc-700 transition"
    >
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
