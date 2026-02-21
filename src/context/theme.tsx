import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeProps {
  toggleTheme(): void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // 2. Safe JSON parsing with try-catch
  const getInitialTheme = (): Theme => {
    const savedMode = localStorage.getItem("mode");
    if (!savedMode) return "light";

    try {
      // If you previously saved it as a raw string (e.g., "dark"),
      // JSON.parse might fail if it's not wrapped in quotes.
      // If it fails, we assume it's a raw string.
      return JSON.parse(savedMode) as Theme;
    } catch (e) {
      return savedMode as Theme;
      console.error(e);
    }
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 3. Persist and apply classes
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(theme));

    // Apply theme to document for Tailwind 'dark:' selectors
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
