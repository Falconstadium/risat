import { createContext, useEffect } from "react";
import { useState } from "react";

export const themeContext = createContext<unknown | any>(undefined);

export const ThemeProvider = ({ children }: any) => {
  const darkMode = JSON.parse(localStorage.getItem("mode") || "[]");
  const [theme, setTheme] = useState(darkMode);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(theme));
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
