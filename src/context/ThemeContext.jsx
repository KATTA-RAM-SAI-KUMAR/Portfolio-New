import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");
  const [musicOn, setMusicOn] = useState(false); // ✅ important

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMusic = () => {
    setMusicOn((prev) => !prev);
  };

  const theme = {
    bg: mode === "dark" ? "#020617" : "#ffffff",
    text: mode === "dark" ? "#e2e8f0" : "#0f172a",
    subtext: mode === "dark" ? "#94a3b8" : "#475569",
    border: mode === "dark" ? "#1e293b" : "#e5e7eb",
  };

  return (
    <ThemeContext.Provider
      value={{ theme, mode, toggleTheme, musicOn, toggleMusic }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);