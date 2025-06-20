import { createContext, ReactNode, useEffect } from "react";
import { useState } from "react";

type themeProps = {
  toggleTheme(): void;
  theme: string;
};

export const themeContext = createContext<themeProps>({
  toggleTheme() {},
  theme: "",
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const darkMode = JSON.parse(localStorage.getItem("mode") || "");
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
