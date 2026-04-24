import { createContext, useContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../theme/theme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const theme = mode === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);